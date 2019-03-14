import React from "react";
import GlyphList from "./GlyphList";
import store from "../store";
import { setIsShowing } from "../actions";

function ShowGlyphs(): JSX.Element {
  return (
    <div>
      <button
        type="button"
        onClick={(event: React.MouseEvent): void => {
          event.preventDefault;
          store.dispatch(setIsShowing(!store.getState().isShowing));
        }}
      >
        Show All Glyphs
      </button>
      {store.getState().isShowing ? <GlyphList /> : ""}
    </div>
  );
}

export default ShowGlyphs;
