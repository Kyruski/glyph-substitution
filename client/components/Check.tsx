import React, { useState } from "react";
import makeGlyphCombinations from "../../lib/makeGlyphCombinations";
import containsBannedWord from "../../lib/containsBannedWord";
import { GenericObject, VoidFunction, KeyPress } from "../../index";

interface Props {
  glyphList: GenericObject;
  bannedWords: Array<string>;
}

function Check({ bannedWords, glyphList }: Props): JSX.Element {
  let [message, setMessage]: [string, Function] = useState(""); //message to display on Entry error

  const onButtonClick: VoidFunction = function(): void {
    // @ts-ignore
    const string: HTMLInputElement = document.getElementById("check-string"); //grab the string to check
    if (string.value === "") {
      //no string entered
      setMessage("Please enter a string to check");
    } else {
      //valid string
      setMessage("");
      let combos: Array<string> = makeGlyphCombinations(
        string.value,
        glyphList
      ); //make all combinations
      let result: string = containsBannedWord(combos, bannedWords); //check if any combo has a banned word
      string.value = "";
      setMessage(
        result
          ? `That string contains the banned word: ${result}`
          : "No banned word found in the entered string"
      );
    }
  };

  const onKeyPress: KeyPress = function(event: React.KeyboardEvent): void {
    if (event.which === 13) {
      //prevent enter from reloading the page
      event.preventDefault();
      onButtonClick();
    }
  };

  return (
    <div>
      <div id="component-title">Check if a string contains a banned word</div>
      <form onKeyPress={onKeyPress}>
        <input type="text" id="check-string" />
        <button type="button" onClick={onButtonClick}>
          Check String
        </button>
        <span className="red-text">{message}</span>
      </form>
    </div>
  );
}

export default Check;
