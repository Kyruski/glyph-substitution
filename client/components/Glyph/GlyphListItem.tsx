import React from "react";

interface Props {
  item: [string, Array<string>];
}

function GlyphListItem({ item }: Props): JSX.Element {
  return (
    <tr>
      <td>{item[0]}</td>
      <td>{item[1].join(", ")}</td>
    </tr>
  );
}

export default GlyphListItem;
