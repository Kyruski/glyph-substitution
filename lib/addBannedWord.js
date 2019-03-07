const fs = require('fs');
const bannedWords = require('./loadBannedWords.js');

function addBannedWord(word, bannedWords) {
  word = word.toLowerCase();
  console.log(word, bannedWords.includes(word), bannedWords, bannedWords[0]);
  if (bannedWords.includes(word)) return 'Word already exists in the list.';
  else {
    bannedWords.push(word);
    fs.appendFileSync(__dirname + '/dependencies/bannedWords.txt', word + '\n');
    return `Word "${word}" was added to the banned words list.`;
  }
}

console.log(addBannedWord('abcd', bannedWords));
console.log(bannedWords);

module.exports = addBannedWord;