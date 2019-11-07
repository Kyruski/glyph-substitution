import React, { useEffect } from "react";
import AddWordForm from "../../containers/Words/AddWordForm";
import ShowWords from "../../containers/Words/ShowWords";

interface Props {
  addWord: (word: string) => string;
}

function AddWord({ addWord }: Props): JSX.Element {
  useEffect(() => {
    document.title = "Add a Banned Word";
  });
  return (
    <div>
      <div id="component-title">Add a word to the Banned Words List</div>
      <AddWordForm addWord={addWord} />
      <ShowWords />
    </div>
  );
}

export default AddWord;
