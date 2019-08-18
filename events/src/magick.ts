import gm, { State } from "gm";
import { promisify } from "util";
export const img = gm.subClass({ imageMagick: true });

export type Metadata = Readonly<{
  format: string;
  size: Readonly<{
    width: number;
    height: number;
  }>;
}>;

export const toBuffer = (image: State): Promise<Buffer> =>
  promisify(image.toBuffer).bind(image)() as Promise<Buffer>;

export const bufferSize = (buf: Buffer): number =>
  Math.ceil(buf.byteLength / 1024);

export const metadata = (state: State): Promise<Metadata> => {
  return new Promise((res, rej) => {
    return state.identify((err, data) => {
      const { format, size } = data;
      if (err) return rej(err);
      res({
        format: format.toLowerCase(),
        size,
      });
    });
  });
};
