import React from "react";
import makeLettersList from "../../../lib/makeLettersList";
import store from "../../store";
import { Table } from "antd";

function GlyphList(): JSX.Element {
  const lettersList = makeLettersList(store.getState().glyphList);
  const columns = [
    {
      title: "Letter",
      dataIndex: "letter",
      key: "letter"
    },
    {
      title: "Substitution Glyphs",
      dataIndex: "subGlyphs",
      key: "subGlyphs"
    }
  ];
  const dataSource = lettersList.map(
    (item: [string, Array<string>], index: number) => ({
      key: index,
      letter: item[0],
      subGlyphs: item[1].join(", ")
    })
  );

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={false}
      className="glyph-table"
    />
  );
}

export default GlyphList;
