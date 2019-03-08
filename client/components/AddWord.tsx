import * as React from "react";
import { useState, useEffect } from "react";

function AddWord(props: any): JSX.Element {
  let [message, setMessage] = useState("");

  const onButtonClick: any = function(): void {
    // @ts-ignore
    const word: HTMLInputElement = document.getElementById("add-word");
    // @ts-ignore
    if (word.value === "") {
      setMessage("Please enter a word to submit");
    } else {
      setMessage("");
      let result = props.addWord(word);
      if (result === "we good") {
        word.value = "";
      }
      setMessage(result);
    }
  };

  return (
    <div>
      <div>Add a word to the Banned Words List</div>
      <form>
        <input type="text" id="add-word" />
        <button type="button" onClick={onButtonClick}>
          Add Word
        </button>
      </form>
      <div id="add-word-message">{message}</div>
    </div>
  );
}

export default AddWord;
