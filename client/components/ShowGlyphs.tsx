import React, { useState } from "react";
import GlyphList from "./GlyphList";

function ShowGlyphs(props: any): JSX.Element {
  let [isShowing, setIsShowing]: [boolean, Function] = useState(false); //boolean for if the list of all glpyhs is showing

  return (
    <div>
      <button
        type="button"
        onClick={(event: React.MouseEvent): void => {
          event.preventDefault;
          setIsShowing(!isShowing);
        }}
      >
        Show All Glyphs
      </button>
      {isShowing ? <GlyphList glyphList={props.glyphList} /> : ""}
    </div>
  );
}

export default ShowGlyphs;
