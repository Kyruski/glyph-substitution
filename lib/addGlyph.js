"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
function addGlyph(glyph, letter, glyphObj) {
    letter = letter.toLowerCase();
    if (glyphObj[glyph]) {
        if (glyphObj[glyph].includes(letter))
            return "Glyph combination already exists.";
        glyphObj[glyph].push(letter);
    }
    else {
        glyphObj[glyph] = [letter];
    }
    fs_1.default.appendFileSync(__dirname + ("/dependencies/letters/" + letter + ".txt"), glyph + "\r\n");
    return "Glyph \"" + glyph + "\" has been added as a substitution for \"" + letter + "\".";
}
module.exports = addGlyph;
