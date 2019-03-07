const fs = require('fs');
const obj = require('./loadDictionary');

function addGlyph(glyph, letter) {
  console.log(obj[glyph]);
  letter = letter.toLowerCase();
  if (obj[glyph]) {
    if (obj[glyph].includes(letter)) return 'Glyph combination already exists.';
    obj[glyph].push(letter);
  } else {
    obj[glyph] = [letter];
  }
  fs.appendFileSync(__dirname + `/dependencies/letters/${letter}.txt`, glyph + '\r\n');
  return `Glyph "${glyph}" has been added as a substitution for "${letter}".`
}

module.exports = addGlyph;