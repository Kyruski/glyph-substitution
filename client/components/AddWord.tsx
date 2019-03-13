import React from "react";
import AddWordForm from "./AddWordForm";
import ShowWords from "./ShowWords";

function AddWord(props: any): JSX.Element {
  return (
    <div>
      <div id="component-title">Add a word to the Banned Words List</div>
      <AddWordForm addWord={props.addWord} />
      <ShowWords bannedWords={props.bannedWords} />
    </div>
  );
}

export default AddWord;
