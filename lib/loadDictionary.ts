import fs from "fs";
import path from "path";
import getPath from "./getPath";

let letters: Array<string> = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

const glyphList: object | any = {};
let rootPath: string = getPath();
for (let letter of letters) {
  let document: Array<string> = fs
    .readFileSync(
      path.join(rootPath, `/dependencies/letters/${letter}.txt`),
      "utf-8"
    )
    .split("\r\n");
  for (let item of document) {
    if (item === "") continue;
    if (glyphList[item]) {
      if (!glyphList[item].includes(letter)) {
        glyphList[item] = [...glyphList[item], letter];
      }
    } else {
      glyphList[item] = [letter];
    }
  }
}

export default glyphList;
