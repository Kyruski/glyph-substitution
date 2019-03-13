import React from "react";
import GlyphListItem from "./GlyphListItem";
import makeLettersList from "../../lib/makeLettersList";

const GlyphList = function(props: any) {
  const lettersList = makeLettersList(props.glyphList);

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
            (item: Array<any>, index: number): JSX.Element => (
              <GlyphListItem key={`glyphlistitem${index}`} item={item} />
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GlyphList;
