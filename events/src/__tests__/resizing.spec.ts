import { needsResizing } from "../resizer";
import { metadata, img } from "../magick";
import { readAsync } from "./metadata.spec";

test("doesn't resize small images", async () => {
  const smallImage = await readAsync("./src/__tests__/test.gif");
  const meta = await metadata(img(smallImage));
  expect(needsResizing(meta)).toBe(false);
});
