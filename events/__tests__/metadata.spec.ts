import { withImg, img, metadata } from "../src/magick";
import * as fs from "fs";
import { promisify } from "util";

const readAsync = promisify(fs.readFile).bind(fs);

const testMeta = async ({ expects, source }) => {
  const buf = await readAsync(source);
  const image = img(buf);
  const { format, size } = await metadata(image);
  expect(format).toBe(expects.format);
  expect(size.height).toBe(expects.height);
  expect(size.width).toBe(expects.width);
};

test("grabbing gif metadata", () =>
  testMeta({
    expects: {
      height: 250,
      width: 250,
      format: "gif",
    },
    source: "__tests__/test.gif",
  }));

test("grabbing png metadata", () =>
  testMeta({
    expects: {
      height: 628,
      width: 1200,
      format: "png",
    },
    source: "./__tests__/test.png",
  }));

test("grabbing jpg metadata", () =>
  testMeta({
    expects: {
      height: 1080,
      width: 1920,
      format: "jpeg",
    },
    source: "./__tests__/test.jpg",
  }));
