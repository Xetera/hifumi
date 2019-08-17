import fetch from "node-fetch";
import { S3 } from "aws-sdk";
import { withImg, Metadata, metadata, img, toBuffer } from "./magick";
import mime from "mime-types";
import Hashids from "hashids";
import { updateImage } from "./gql";
import { State } from "gm";
import { promisify } from "util";

// please don't look at this salt to try to reverse engineer the
// ids of images, I trust that you're all good boys.
const SALT = "hifumi";
const COMPRESSION_TYPE = "LZMA";
const RESIZE_WIDTH = 300;

const noopAsync = () => Promise.resolve();
const s3 = new S3();
const hash = new Hashids(SALT);
const { EVENTS_BUCKET_NAME, EVENTS_CDN_ROOT } = process.env;

type DownloadedImage = Readonly<{
  image: Buffer;
  state: State;
  meta: Metadata;
}>;

const getBuffer = (url: string): Promise<Buffer> =>
  fetch(url).then(r => r.buffer());

const resizeImage = (state: State) =>
  state.resize(RESIZE_WIDTH).compress(COMPRESSION_TYPE);

const compress = (state: State) => state.compress(COMPRESSION_TYPE);

const needsResizing = ({ size }: Metadata) => size.width > RESIZE_WIDTH;

const downloadImage = async (url: string): Promise<DownloadedImage> => {
  const image = await getBuffer(url);
  const state = img(image);
  const meta = await metadata(state);
  return { image, meta, state };
};

const uploadImage = async (image: Buffer, filename: string, meta: Metadata) => {
  const contentType = mime.lookup(meta.format || "[unknown]");

  if (contentType === false) {
    throw new Error(
      `${meta.format} is not a valid upload type for ${filename}`
    );
  }

  const payload: S3.PutObjectRequest = {
    Bucket: EVENTS_BUCKET_NAME!,
    Key: filename,
    Body: image,
    ContentType: contentType,
  };

  return s3.putObject(payload).promise();
};

export const resize = async ({ body }) => {
  try {
    console.time("resize");
    const data = JSON.parse(body).event.data.new;
    const { original_url, id } = data;
    const { image, meta, state } = await downloadImage(original_url);
    const { size, format } = meta;
    const key = hash.encode(data.id);

    const resizedName = `thumbnails/${key}.${format}`;
    const originalName = `images/${key}.${format}`;
    const compressed = await compress(state);
    const compressedBuffer = await toBuffer(compressed);
    const resizedBuffer = await toBuffer(resized);

    await Promise.all([
      uploadImage(compressedBuffer, originalName, meta),
      needsResizing(meta)
        ? uploadImage(resizedBuffer, resizedName, meta)
        : noopAsync(),
    ]);

    const { width, height } = size;
    const url = `${EVENTS_CDN_ROOT}/${originalName}`;
    const thumbnailUrl = `${EVENTS_CDN_ROOT}/${resizedName}`;

    await updateImage(
      {
        width,
        height,
        url,
        format,
        thumbnail_url: thumbnailUrl,
      },
      { id }
    );

    console.timeEnd("resize");
    return {
      body: JSON.stringify({
        meta,
        original: {
          url,
        },
        thumbnail: {
          url: thumbnailUrl,
        },
      }),
    };
  } catch (err) {
    console.error(err);
    // TODO: include proper logging here
    return {};
  }
};
