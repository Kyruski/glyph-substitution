import fs from "fs";

function addGlyph(glyph: string, letter: string, glyphObj: object): string {
  letter = letter.toLowerCase();
  if (glyphObj[glyph]) {
    if (glyphObj[glyph].includes(letter))
      return "Glyph combination already exists.";
    glyphObj[glyph].push(letter);
  } else {
    glyphObj[glyph] = [letter];
  }
  fs.appendFileSync(
    __dirname + `/dependencies/letters/${letter}.txt`,
    glyph + "\r\n"
  );
  return `Glyph "${glyph}" has been added as a substitution for "${letter}".`;
}

module.exports = addGlyph;
