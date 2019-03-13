import fs from "fs";
import path from "path";

const bannedWords: Array<string> = [];
let rootPath = path.join(process.argv[0], "../../../../../../../../../../lib");
let document: Array<string> = fs
  .readFileSync(path.join(rootPath, `/dependencies/bannedWords.txt`), "utf-8")
  .split("\r\n");
document.forEach(
  (word: string): void => {
    let words = word.split("\n");
    for (let item of words) {
      if (item !== "") {
        bannedWords.push(item);
      }
    }
  }
);

export default bannedWords;
