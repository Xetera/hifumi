import fetch from "node-fetch";
import { S3, AWSError } from "aws-sdk";
import { Metadata, metadata, img, toBuffer, bufferSize } from "./magick";
import mime from "mime-types";
import Hashids from "hashids";
import { updateImage } from "./gql";
import { State } from "gm";
import { PromiseResult } from "aws-sdk/lib/request";

// please don't look at this salt to try to reverse engineer the
// ids of images, I trust that you're all good boys.
const SALT = "hifumi";
const COMPRESSION_TYPE = "LZMA";
const RESIZE_WIDTH = 300;

const noopAsync = (): Promise<void> => Promise.resolve();
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

export const needsResizing = ({ size }: Metadata) => size.width > RESIZE_WIDTH;

const downloadImage = async (url: string): Promise<DownloadedImage> => {
  const image = await getBuffer(url);
  const state = img(image);
  const meta = await metadata(state);
  return { image, meta, state };
};

const uploadImage = async (
  image: Buffer,
  filename: string,
  meta: Metadata
): Promise<PromiseResult<S3.PutObjectOutput, AWSError>> => {
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

const prepareThumbnail = (state: State): Promise<Buffer> =>
  toBuffer(resizeImage(compress(state)));

export const resize = async ({ body }) => {
  try {
    console.time("full resize");
    // TODO: validate first
    const data = JSON.parse(body).event.data.new;
    const { original_url, id } = data;
    console.time("download");
    const { image, meta, state } = await downloadImage(original_url);
    console.timeEnd("download");
    const { size, format } = meta;
    const key = hash.encode(data.id);

    const thumbName = `thumbnails/${key}.${format}`;
    const originalBuffer = await toBuffer(await compress(state));
    const imageSize = bufferSize(originalBuffer);
    const isResizing = needsResizing(meta);
    console.log(
      `${isResizing ? "" : "Not "}resizing ${size.width}x${
        size.height
      } image [${id}]`
    );
    const originalName = `images/${key}.${format}`;
    const resizedUrl = isResizing ? thumbName : originalName;

    console.time("upload");
    await Promise.all<any>([
      uploadImage(originalBuffer, originalName, meta),
      isResizing
        ? (async () => {
            console.time("thumbnail");
            const thumbnail = await prepareThumbnail(state);
            console.timeEnd("thumbnail");
            return uploadImage(thumbnail, thumbName, meta);
          })()
        : noopAsync(),
    ]);
    console.timeEnd("upload");

    const { width, height } = size;
    const url = `${EVENTS_CDN_ROOT}/${originalName}`;
    const thumbnailUrl = `${EVENTS_CDN_ROOT}/${resizedUrl}`;

    await updateImage(
      {
        width,
        height,
        url,
        format,
        size: imageSize,
        thumbnail_url: thumbnailUrl,
      },
      id
    );

    console.timeEnd("full resize");
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
