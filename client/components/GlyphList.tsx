import React from "react";
import GlyphListItem from "./GlyphListItem";

const GlyphList = function(props: any) {
  return (
    <div>
      {/* 
          //@ts-ignore */}
      <table border="1" style={{ maxWidth: "80%", margin: "0 10%" }}>
        <thead>
          <tr>
            <th>Letter</th>
            <th>Substitution Glyphs</th>
          </tr>
        </thead>
        <tbody>
          {props.lettersList.map(
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
