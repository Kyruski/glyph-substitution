const fs = require("fs");

const bannedWords: Array<string> = [];
let document: Array<string> = fs
  .readFileSync(__dirname + `/dependencies/bannedWords.txt`, "utf-8")
  .split("\r\n");
document.forEach(
  (word: string): void => {
    if (word !== "") {
      let words = word.split("\n");
      for (let item of words) {
        bannedWords.push(item);
      }
    }
  }
);

export default bannedWords;
