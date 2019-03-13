import React from "react";
import AddGlyphForm from "./AddGlyphForm";
import ShowGlyphs from "./ShowGlyphs";

function AddGlyph(props: any): JSX.Element {
  return (
    <div>
      <div id="component-title">Add a Glyph to the Substitution list</div>
      <AddGlyphForm addGlyph={props.addGlyph} />
      <ShowGlyphs glyphList={props.glyphList} />
    </div>
  );
}

export default AddGlyph;
