import React, { useState } from "react";
import { VoidFunction, KeyPress } from "../../index";

interface Props {
  addWord: (word: string) => string;
}

function AddWordForm({ addWord }: Props): JSX.Element {
  let [message, setMessage]: [string, Function] = useState(""); //message to display on Entry error

  const onButtonClick: VoidFunction = function(): void {
    // @ts-ignore
    const word: HTMLInputElement = document.getElementById("add-word"); //grabs the word ot be entered

    if (word.value === "") {
      setMessage("Please enter a word to submit"); //if no word is entered
    } else {
      setMessage("");
      let result: string = addWord(word.value); //valid word was entered
      word.value = "";
      setMessage(result);
    }
  };

  const onKeyPress: KeyPress = function(event: React.KeyboardEvent): void {
    if (event.which === 13) {
      //prevents enter from reloading the page
      event.preventDefault();
      onButtonClick();
    }
  };

  return (
    <form onKeyPress={onKeyPress}>
      <input type="text" id="add-word" required />
      <button type="button" onClick={onButtonClick}>
        Add Word
      </button>
      <span className="red-text">{message}</span>
    </form>
  );
}

export default AddWordForm;
