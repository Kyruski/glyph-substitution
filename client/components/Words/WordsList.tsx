import React from "react";
import store from "../../store";
import { Table } from "antd";

function WordsList(): JSX.Element {
  const columns = [
    { title: "Banned Word", dataIndex: "word", key: "word", width: "150px" }
  ];
  const bannedWords = store.getState().bannedWords;
  const dataSource = bannedWords.map((word: string, index: number) => ({
    key: index,
    word: word
  }));

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={false}
      className="words-table"
    />
  );
}

export default WordsList;
