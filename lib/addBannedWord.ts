import fs from "fs";
import path from "path";
import { AddBannedWord } from "../index";
import store from "../client/store";
import { setBannedWord } from "../client/actions";
import getPath from "./getPath";

let addBannedWord: AddBannedWord;
let rootPath: string = getPath();
addBannedWord = function(word: string, bannedWords: Array<string>): string {
  word = word.toLowerCase();
  if (bannedWords.includes(word)) return "Word already exists in the list.";
  fs.appendFileSync(
    path.join(rootPath, "../lib/dependencies/bannedWords.txt"),
    word + "\n"
  );
  store.dispatch(setBannedWord(word));
  return `Word "${word}" was added to the banned words list.`;
};

export default addBannedWord;

// import axios from "axios";

// axios.post("http://localhost:6969/load/word", { payload: word });
