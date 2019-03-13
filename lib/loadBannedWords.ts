import fs from "fs";
import path from "path";

const bannedWords: Array<string> = [];
let runCondition = process.argv[0].split("/");
let rootPath =
  runCondition[runCondition.length - 1] === "node"
    ? path.join(process.argv[1], "../lib")
    : path.join(process.argv[0], "../../../../../../../../../../lib");
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
