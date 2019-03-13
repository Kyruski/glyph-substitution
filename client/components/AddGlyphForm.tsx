import React, { useState } from "react";
import { VoidFunction, KeyPress } from "../../index";

interface Props {
  addGlyph: (glyph: string, letter: string) => string;
}

function AddGlyphForm({ addGlyph }: Props): JSX.Element {
  let [message, setMessage]: [string, Function] = useState(""); //message to display on Entry error

  const onButtonClick: VoidFunction = function(): void {
    // @ts-ignore
    const glyph: HTMLInputElement = document.getElementById("add-glyph"); //grab glyph
    // @ts-ignore
    const letter: HTMLInputElement = document.getElementById("add-letter"); //grab letter
    if (glyph.value === "") {
      setMessage("Please enter a glyph to submit"); //this occurs when no glyph is entered
    } else if (letter.value === "") {
      setMessage("Please enter a letter to submit"); //this occurs when no letter is entered
    } else {
      setMessage(""); //if we make it in here, we have a proper entry.
      let result: string = addGlyph(glyph.value, letter.value);
      glyph.value = "";
      letter.value = "";
      setMessage(result); // want to display the results (Added or already exists)
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
      Add Glyph{" "}
      <input
        type="text"
        id="add-glyph"
        maxLength={1}
        size={2}
        style={{ textAlign: "center" }}
        required
      />{" "}
      as a substitution for the letter{" "}
      <input
        type="text"
        id="add-letter"
        maxLength={1}
        size={2}
        style={{ textAlign: "center" }}
        required
      />
      <button type="button" onClick={onButtonClick}>
        Add Glyph
      </button>
      <div className="red-text">{message}</div>
    </form>
  );
}

export default AddGlyphForm;
