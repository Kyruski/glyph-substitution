import * as React from "react";
import { useState } from "react";

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
      let result: string = props.addWord(word.value);
      word.value = "";
      setMessage(result);
    }
  };

  const onKeyPress = function(event: any): void {
    if (event.which === 13) {
      event.preventDefault();
      onButtonClick();
    }
  };

  return (
    <div>
      <div id="component-title">Add a word to the Banned Words List</div>
      <form onKeyPress={onKeyPress}>
        <input type="text" id="add-word" required />
        <button type="button" onClick={onButtonClick}>
          Add Word
        </button>
      </form>
      <div id="add-word-message">{message}</div>
    </div>
  );
}

export default AddWord;
