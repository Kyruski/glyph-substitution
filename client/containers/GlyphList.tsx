import React from "react";
import GlyphListItem from "./GlyphListItem";
import makeLettersList from "../../../lib/makeLettersList";
import { GenericObject } from "../../../index";
import store from "../../store";

function GlyphList(): JSX.Element {
  const lettersList = makeLettersList(store.getState().glyphList);

  return (
    <div>
      {/* 
          //@ts-ignore */}
      <table border="1" style={{ maxWidth: "80%", margin: "0 2%" }}>
        <thead>
          <tr>
            <th>Letter</th>
            <th>Substitution Glyphs</th>
          </tr>
        </thead>
        <tbody>
          {lettersList.map(
            (item: [string, Array<string>], index: number): JSX.Element => (
              <GlyphListItem key={`glyphlistitem${index}`} item={item} />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default GlyphList;
