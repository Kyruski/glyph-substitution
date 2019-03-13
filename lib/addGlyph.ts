// import axios from "axios";
import fs from "fs";
import path from "path";

function addGlyph(
  glyph: string,
  letter: string,
  glyphObj: object | any
): string {
  letter = letter.toLowerCase();
  let rootPath = path.join(
    process.argv[0],
    "../../../../../../../../../../lib"
  );
  if (glyphObj[glyph]) {
    if (glyphObj[glyph].includes(letter))
      return "Glyph combination already exists.";
    glyphObj[glyph].push(letter);
  } else {
    glyphObj[glyph] = [letter];
  }
  // axios.post("http://localhost:6969/load/glyph", { glyph, letter });
  fs.appendFileSync(
    path.join(rootPath, `./dependencies/letters/${letter}.txt`),
    glyph + "\r\n"
  );
  return `Glyph "${glyph}" has been added as a substitution for "${letter}".`;
}

export default addGlyph;
