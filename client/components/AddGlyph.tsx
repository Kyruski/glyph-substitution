import React from "react";
import AddGlyphForm from "./AddGlyphForm";
import ShowGlyphs from "./ShowGlyphs";
import { GenericObject } from "../../index";

interface Props {
  addGlyph: (glyph: string, letter: string) => string;
  glyphList: GenericObject;
}

function AddGlyph({ addGlyph, glyphList }: Props): JSX.Element {
  return (
    <div>
      <div id="component-title">Add a Glyph to the Substitution list</div>
      <AddGlyphForm addGlyph={addGlyph} />
      <ShowGlyphs glyphList={glyphList} />
    </div>
  );
}

export default AddGlyph;
