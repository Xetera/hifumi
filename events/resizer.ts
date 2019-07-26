import fetch from "node-fetch";
import sharp, { Metadata } from "sharp";
import { S3 } from "aws-sdk";
import gm, { State } from "gm";
import mime from "mime-types";
import Hashids from "hashids";

// please don't look at this salt to try to reverse engineer the
// ids of images, I trust that you're all good boys.
const SALT = "hifumi";
const hash = new Hashids(SALT);

const s3 = new S3();

const img = gm.subClass({ imageMagick: true });

const RESIZE_WIDTH = 300;
const { EVENTS_BUCKET_NAME } = process.env;

interface DownloadedImage {
  readonly image: Buffer;
  readonly meta: Metadata;
}

const convertCallbacks = (res, rej) => (e, data) => {
  if (e) return rej(e);
  res(data);
}

/**
 * Returns the URL target body as a 
 * @param url Target url
 */
const getBuffer = (url: string): Promise<Buffer> => fetch(url).then(r => r.buffer());

const metadata = (image: Buffer): Promise<Metadata> =>
  sharp(image).metadata();

const withImg = (f: (img: State) => State) => (image: Buffer): Promise<Buffer> =>
  new Promise((res, rej) =>
    f(img(image))
      .toBuffer(convertCallbacks(res, rej))
  )

const resizeImage = withImg(i => i.resize(RESIZE_WIDTH).compress("LZMA"))

const compress = withImg(i => i.compress("LZMA"))

const downloadImage = async ({ original_url }: any): Promise<DownloadedImage> => {
  const image = await getBuffer(original_url);
  const meta = await metadata(image);
  return {
    image,
    meta
  }
};

const uploadImage = async (image: Buffer, filename: string, meta: Metadata) => {
  const contentType = mime.lookup(meta.format || '[unknown]');

  if (contentType === false) {
    throw new Error(`${contentType} is not a valid upload type for ${filename}`);
  }

  return s3.putObject({
    Bucket: EVENTS_BUCKET_NAME!,
    Key: filename,
    Body: image,
    ContentType: contentType
  }).promise()
}

export const resize = async ({ body }) => {
  try {
    const data = JSON.parse(body).event.data.new;
    const { image, meta } = await downloadImage(data)
    const resized = await resizeImage(image);
    const key = hash.encode(data.id);

    const resizedName = `thumbnails/${key}.${meta.format}`;
    const originalName = `images/${key}.${meta.format}`;
    const compressed = await compress(image);

    await Promise.all([
      uploadImage(compressed, originalName, meta),
      uploadImage(resized, resizedName, meta)
    ]);

    return {
      body: JSON.stringify({
        meta
      })
    }
  } catch (err) {
    console.error(err);
    return {}
  }
}
