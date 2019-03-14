import fs from "fs";
import path from "path";
import { GenericObject } from "../index";
import getPath from "./getPath";
import store from "../client/store";
import { setGlyphList } from "../client/actions";

function addGlyph(
  glyph: string,
  letter: string,
  glyphObj: GenericObject
): string {
  letter = letter.toLowerCase();
  let rootPath: string = getPath();
  if (glyphObj[glyph].includes(letter))
    return "Glyph combination already exists.";
  store.dispatch(setGlyphList(glyph, letter));
  fs.appendFileSync(
    path.join(rootPath, `./dependencies/letters/${letter}.txt`),
    glyph + "\r\n"
  );
  return `Glyph "${glyph}" has been added as a substitution for "${letter}".`;
}

export default addGlyph;

// import axios from "axios";

// axios.post("http://localhost:6969/load/glyph", { glyph, letter });
