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

export const withImg = (f: (img: State) => State) => (
  image: Buffer
): Promise<Buffer> => {
  return new Promise((res, rej) =>
    f(img(image)).toBuffer((e, data) => {
      if (e) return rej(e);
      res(data);
    })
  );
};

export const toBuffer = (image: State): Promise<Buffer> =>
  promisify(image.toBuffer).bind(image)() as Promise<Buffer>;

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
