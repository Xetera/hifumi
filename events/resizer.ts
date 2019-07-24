import fetch, { Response } from "node-fetch";
import sharp, { Sharp, Metadata } from "sharp";
import { Stream } from "stream";
import fs from "fs";
import AWS from "aws-sdk";
import gm from "gm";

const s3 = new AWS.S3();

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

const resizeImage = (image: Buffer): Promise<Buffer> =>
  new Promise((res, rej) => {
    img(image)
      .resize(RESIZE_WIDTH)
      .toBuffer(convertCallbacks(res, rej));
  })

const downloadImage = async ({ original_url }: any): Promise<DownloadedImage> => {
  const image = await getBuffer(original_url);
  const meta = await metadata(image);
  return {
    image,
    meta
  }
};

const uploadImage = async (image: Buffer, filename: string) => {
  return s3.putObject({
    Bucket: EVENTS_BUCKET_NAME!,
    Key: filename,
    Body: image
  }).promise()
}

export const resize = async ({ body }) => {
  try {
    const data = JSON.parse(body).event.data.new;
    const { image, meta } = await downloadImage(data)
    const resized = await resizeImage(image);
    const resizedName = `thumbnails/${data.id}`;
    const originalName = `images/${data.id}`;

    await Promise.all([uploadImage(image, originalName), uploadImage(resized, resizedName)]);

    return {
      body: JSON.stringify({
        meta
      })
    }
  } catch (err) {
    console.error(err);

  }
}
