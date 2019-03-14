import React from "react";
import AddGlyphForm from "../../containers/AddGlyphForm";
import ShowGlyphs from "../../containers/ShowGlyphs";

interface Props {
  addGlyph: (glyph: string, letter: string) => string;
}

function AddGlyph({ addGlyph }: Props): JSX.Element {
  return (
    <div>
      <div id="component-title">Add a Glyph to the Substitution list</div>
      <AddGlyphForm addGlyph={addGlyph} />
      <ShowGlyphs />
    </div>
  );
}

export default AddGlyph;
