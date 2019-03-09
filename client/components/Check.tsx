import * as React from "react";
import { useState, useEffect } from "react";
import makeGlyphCombinations from "../../lib/makeGlyphCombinations";
import containsBannedWord from "../../lib/containsBannedWord";

function Check({ bannedWords, glyphList }: any): JSX.Element {
  let [message, setMessage] = useState("");

  const onButtonClick: any = function(): void {
    // @ts-ignore
    const string: HTMLInputElement = document.getElementById("check-string");
    // @ts-ignore
    if (string.value === "") {
      setMessage("Please enter a string to check");
    } else {
      setMessage("");
      let combos: Array<string> = makeGlyphCombinations(
        string.value,
        glyphList
      );
      let result: string | null = containsBannedWord(combos, bannedWords);
      string.value = "";
      setMessage(
        result
          ? `That string contains the banned word: ${result}`
          : "No banned word found in the entered string"
      );
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
      <div id="component-title">Check if a string contains a banned word</div>
      <form onKeyPress={onKeyPress}>
        <input type="text" id="check-string" />
        <button type="button" onClick={onButtonClick}>
          Check String
        </button>
      </form>
      <div id="add-word-message">{message}</div>
    </div>
  );
}

export default Check;
