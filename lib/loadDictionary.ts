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

const obj: object | any = {};
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
    if (obj[item]) {
      if (!obj[item].includes(letter)) {
        obj[item] = [...obj[item], letter];
      }
    } else {
      obj[item] = [letter];
    }
  }
}

export default obj;
