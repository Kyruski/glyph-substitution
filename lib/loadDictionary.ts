import fs from "fs";
import path from "path";

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

const glyphs: object | any = {};
let rootPath = path.join(process.argv[0], "../../../../../../../../../../lib");
for (let letter of letters) {
  let document: Array<string> = fs
    .readFileSync(
      path.join(rootPath, `/dependencies/letters/${letter}.txt`),
      "utf-8"
    )
    .split("\r\n");
  for (let item of document) {
    if (item === "") continue;
    if (glyphs[item]) {
      if (!glyphs[item].includes(letter)) {
        glyphs[item] = [...glyphs[item], letter];
      }
    } else {
      glyphs[item] = [letter];
    }
  }
}

const lettersArray: Array<any> = [];

for (let letter of letters) {
  let lettersItem: Array<string> = [];
  for (let key in glyphs) {
    if (glyphs[key].includes(letter)) {
      lettersItem.push(key);
    }
  }
  lettersArray.push([letter, lettersItem]);
}

export const lettersList = lettersArray;
export const glyphList = glyphs;
export default {};
