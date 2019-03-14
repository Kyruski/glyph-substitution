import React from "react";
import AddWordForm from "./AddWordForm";
import ShowWords from "./ShowWords";

interface Props {
  addWord: (word: string) => string;
}

function AddWord({ addWord }: Props): JSX.Element {
  return (
    <div>
      <div id="component-title">Add a word to the Banned Words List</div>
      <AddWordForm addWord={addWord} />
      <ShowWords />
    </div>
  );
}

export default AddWord;
