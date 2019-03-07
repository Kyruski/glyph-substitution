const fs = require('fs');

const bannedWords = [];
let document = fs.readFileSync(__dirname + `/dependencies/bannedWords.txt`, 'utf-8').split('\r\n');
document.forEach(word => { bannedWords.push(word.split('\n')[0]) });

module.exports = bannedWords;