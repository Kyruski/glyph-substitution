import React from "react";

function GlyphListItem(props: any): JSX.Element {
  return (
    <tr>
      <td>{props.item[0]}</td>
      <td>{props.item[1].join(", ")}</td>
    </tr>
  );
}

export default GlyphListItem;
