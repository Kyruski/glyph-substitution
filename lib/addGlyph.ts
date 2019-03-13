import fs from "fs";
import path from "path";
import { GenericObject } from "../index";

function addGlyph(
  glyph: string,
  letter: string,
  glyphObj: GenericObject
): string {
  letter = letter.toLowerCase();
  let rootPath: string = path.join(
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
  fs.appendFileSync(
    path.join(rootPath, `./dependencies/letters/${letter}.txt`),
    glyph + "\r\n"
  );
  return `Glyph "${glyph}" has been added as a substitution for "${letter}".`;
}

export default addGlyph;

// import axios from "axios";

// axios.post("http://localhost:6969/load/glyph", { glyph, letter });
