// @ts-ignore
import { Canvas, Image } from "canvas";
import { CanvasTextWrapper, CanvasTextWrapperOptions } from "canvas-text-wrapper";
import * as path from "path";

export interface ImageTemplate {
  name: string;
  image: string;
  dimensions: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  options?: CanvasTextWrapperOptions;
}
// tslint:disable
export const imageTemplates: ImageTemplate[] = [{
  name: "momosign",

  image: "momosign.jpg",
  dimensions: {
    x: 80,
    y: 160,
    width: 280,
    height: 80
  },
}, {
  name: "fact",
  image: "fact.jpg",
  dimensions: {
    x: 20,
    y: 45,
    width: 200,
    height: 215
  }
}, {
  name: "hifumisign",
  image: "hifumisign.jpg",
  dimensions: {
    x: 240,
    y: 365,
    width: 150,
    height: 180
  }
}, {
  name: "hajimesign",
  image: "hajimesign.jpg",
  dimensions: {
    x: 260,
    y: 395,
    width: 250,
    height: 200
  }
}, {
  name: "chat",
  image: "chat.png",
  options: {
    textAlign: "left"
  },
  dimensions: {
    x: 135,
    y: 115,
    width: 210,
    height: 150
  }
}];
// tslint:enable

export const loadTemplate = (name: string) => new Promise(async (res, rej) => {
  const src = path.resolve(path.join("assets", "templates", name));
  const img = new Image();
  img.onload = () => {
    const canvas = new Canvas(img.width, img.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    res(canvas);
  };
  img.onerror = rej;
  img.src = src;
});

export interface TextDimensions {
  x: number;
  y: number;
  height?: number;
  width?: number;
}

/**
 * Placing text on an existing canvas
 * @param text
 * @param canvas
 * @param dimensions
 * @param options
 */
export const placeText = (
  text: string, canvas: any, dimensions: TextDimensions, options?: CanvasTextWrapperOptions
): any => {
  /**
   * In order for this to work, a separate canvas has to be created
   * so the text can be adjusted according to the new canvas
   */
  const textCanvas = new Canvas();
  textCanvas.height = dimensions.height;
  textCanvas.width = dimensions.width;
  CanvasTextWrapper(textCanvas, text, {
    sizeToFill: true,
    textAlign: "center",
    verticalAlign: "middle",
    ...(options || {})
  });
  // merging the created text canvas with the original canvas to "draw" the text on
  canvas.getContext("2d").drawImage(textCanvas, dimensions.x, dimensions.y);
  return canvas;
};
