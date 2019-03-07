const fs = require('fs');
const bannedWords = require('./loadBannedWords.js');

function addBannedWord(word, bannedWords) {
  word = word.toLowerCase();
  if (bannedWords.includes(word)) return 'Word already exists in the list.';
  bannedWords.push(word);
  fs.appendFileSync(__dirname + '/dependencies/bannedWords.txt', word + '\n');
  return `Word "${word}" was added to the banned words list.`;
}

module.exports = addBannedWord;