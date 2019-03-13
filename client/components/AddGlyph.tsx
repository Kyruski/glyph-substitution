import * as React from "react";
import { useState } from "react";
import GlyphList from "./GlyphList";

function AddGlyph(props: any): JSX.Element {
  let [message, setMessage] = useState("");
  let [isShowing, setIsShowing] = useState(false);

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
      let result: string = props.addGlyph(glyph.value, letter.value);
      glyph.value = "";
      letter.value = "";
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
      <div id="component-title">Add a Glyph to the Substitution list</div>
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
      </form>
      <div id="add-glyph-message">{message}</div>
      <div>
        <button
          type="button"
          onClick={e => {
            e.preventDefault;
            setIsShowing(!isShowing);
          }}
        >
          Show All Glyphs
        </button>
        {isShowing ? <GlyphList lettersList={props.lettersList} /> : ""}
      </div>
    </div>
  );
}

export default AddGlyph;
