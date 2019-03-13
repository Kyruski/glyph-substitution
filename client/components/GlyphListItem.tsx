import React from "react";

const GlyphListItem = function(props: any) {
  return (
    <tr>
      <td>{props.item[0]}</td>
      <td>{props.item[1].join(", ")}</td>
    </tr>
  );
};

export default GlyphListItem;
