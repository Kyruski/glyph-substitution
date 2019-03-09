import axios from "axios";

function addGlyph(
  glyph: string,
  letter: string,
  glyphObj: object | any
): string {
  letter = letter.toLowerCase();
  if (glyphObj[glyph]) {
    if (glyphObj[glyph].includes(letter))
      return "Glyph combination already exists.";
    glyphObj[glyph].push(letter);
  } else {
    glyphObj[glyph] = [letter];
  }
  axios.post("http://localhost:6969/load/glyph", { glyph, letter });
  return `Glyph "${glyph}" has been added as a substitution for "${letter}".`;
}

export default addGlyph;
