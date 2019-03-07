import fs from "fs";
const obj: object = require("./loadDictionary");

function addGlyph(glyph: string, letter: string): string {
  letter = letter.toLowerCase();
  if (obj[glyph]) {
    if (obj[glyph].includes(letter)) return "Glyph combination already exists.";
    obj[glyph].push(letter);
  } else {
    obj[glyph] = [letter];
  }
  fs.appendFileSync(
    __dirname + `/dependencies/letters/${letter}.txt`,
    glyph + "\r\n"
  );
  return `Glyph "${glyph}" has been added as a substitution for "${letter}".`;
}

module.exports = addGlyph;
