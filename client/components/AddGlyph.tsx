import * as React from "react";
import { useState, useEffect } from "react";

function AddGlyph(props: any): JSX.Element {
  let [message, setMessage] = useState("");

  const onButtonClick: any = function(): void {
    // @ts-ignore
    const glyph: HTMLInputElement = document.getElementById("add-glyph");
    // @ts-ignore
    const letter: HTMLInputElement = document.getElementById("add-letter");
    // @ts-ignore
    if (glyph.value === "") {
      setMessage("Please enter a glyph to submit");
    } else if (letter.value === "") {
      setMessage("Please enter a letter to submit");
    } else {
      setMessage("");
      let result = props.addGlyph(glyph.value, letter.value);
      glyph.value = "";
      letter.value = "";
      setMessage(result);
    }
  };

  const onKeyPress = function(event: any) {
    if (event.which === 13) {
      event.preventDefault();
      onButtonClick();
    }
  };

  return (
    <div>
      <div id="component-title">Add a Glyph to the Substitution list</div>
      <form onKeyPress={onKeyPress}>
        Add Glyph{" "}
        <input
          type="text"
          id="add-glyph"
          maxLength={1}
          size={2}
          style={{ textAlign: "center" }}
        />{" "}
        as a substitution for the letter{" "}
        <input
          type="text"
          id="add-letter"
          maxLength={1}
          size={2}
          style={{ textAlign: "center" }}
        />
        <button type="button" onClick={onButtonClick}>
          Add Glyph
        </button>
      </form>
      <div id="add-word-message">{message}</div>
    </div>
  );
}

export default AddGlyph;
