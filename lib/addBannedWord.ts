const fs = require("fs");

interface AddBannedWord {
  (word: string, bannedWords: Array<string>): string;
}

let addBannedWord: AddBannedWord;
addBannedWord = function(word: string, bannedWords: Array<string>): string {
  word = word.toLowerCase();
  if (bannedWords.includes(word)) return "Word already exists in the list.";
  bannedWords.push(word);
  fs.appendFileSync(__dirname + "/dependencies/bannedWords.txt", word + "\n");
  return `Word "${word}" was added to the banned words list.`;
};

export default addBannedWord;
