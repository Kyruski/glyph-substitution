import React from "react";
import { VoidFunction, KeyPress } from "../../../index";
import store from "../../store";
import { setMessage } from "../../actions";

interface Props {
  addWord: (word: string) => string;
}

function AddWordForm({ addWord }: Props): JSX.Element {
  const onButtonClick: VoidFunction = function(): void {
    // @ts-ignore
    const word: HTMLInputElement = document.getElementById("add-word"); //grabs the word ot be entered

    if (word.value === "") {
      store.dispatch(setMessage("Please enter a word to submit")); //if no word is entered
    } else {
      store.dispatch(setMessage(""));
      let result: string = addWord(word.value); //valid word was entered
      word.value = "";
      store.dispatch(setMessage(result));
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
      <div className="red-text">{store.getState().message}</div>
    </form>
  );
}

export default AddWordForm;
