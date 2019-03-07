const fs = require('fs');

function addBannedWord(word, bannedWords) {
  let word = word.toLowerCase();
  if (bannedWords.includes(word)) return 'Word already exists in the list.';
  else {
    bannedWords.push(word);
    fs.appendFileSync(__dirname + '/dependencies/badWord.txt', word + '\n');
    return `Word "${word}" was added to the banned words list.`;
  }
}

module.exports = addBannedWord;