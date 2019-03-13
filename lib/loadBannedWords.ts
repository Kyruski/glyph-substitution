import fs from "fs";
import path from "path";
import getPath from "./getPath";

const bannedWords: Array<string> = [];
let rootPath: string = getPath();
let document: Array<string> = fs
  .readFileSync(path.join(rootPath, `/dependencies/bannedWords.txt`), "utf-8")
  .split("\r\n");
document.forEach(
  (word: string): void => {
    let words: Array<string> = word.split("\n");
    for (let item of words) {
      if (item !== "") {
        bannedWords.push(item);
      }
    }
  }
);

export default bannedWords;
