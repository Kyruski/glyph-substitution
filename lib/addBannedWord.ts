import axios from "axios";

interface AddBannedWord {
  (word: string, bannedWords: Array<string>): string;
}

let addBannedWord: AddBannedWord;
addBannedWord = function(word: string, bannedWords: Array<string>): string {
  word = word.toLowerCase();
  if (bannedWords.includes(word)) return "Word already exists in the list.";
  axios.post("http://localhost:6969/load/word", { payload: word });
  bannedWords.push(word);
  return `Word "${word}" was added to the banned words list.`;
};

export default addBannedWord;
