import fs from "fs";
import path from "path";
import { AddBannedWord } from "../index";

let addBannedWord: AddBannedWord;
let rootPath: string = path.join(
  process.argv[0],
  "../../../../../../../../../../lib"
);
addBannedWord = function(word: string, bannedWords: Array<string>): string {
  word = word.toLowerCase();
  if (bannedWords.includes(word)) return "Word already exists in the list.";
  fs.appendFileSync(
    path.join(rootPath, "../lib/dependencies/bannedWords.txt"),
    word + "\n"
  );
  bannedWords.push(word);
  return `Word "${word}" was added to the banned words list.`;
};

export default addBannedWord;

// import axios from "axios";

// axios.post("http://localhost:6969/load/word", { payload: word });
