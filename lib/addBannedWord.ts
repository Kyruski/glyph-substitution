import fs from "fs";

function addBannedWord(word: string, bannedWords: Array<string>): string {
  word = word.toLowerCase();
  if (bannedWords.includes(word)) return "Word already exists in the list.";
  bannedWords.push(word);
  fs.appendFileSync(__dirname + "/dependencies/bannedWords.txt", word + "\n");
  return `Word "${word}" was added to the banned words list.`;
}

module.exports = addBannedWord;
