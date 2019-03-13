import React, { useState } from "react";
import WordsList from "./WordsList";

function ShowWords(props: any): JSX.Element {
  let [isShowing, setIsShowing]: [boolean, Function] = useState(false); //boolean for if the list of all glpyhs is showing;

  return (
    <div>
      <button
        type="button"
        onClick={(event: React.MouseEvent): void => {
          event.preventDefault;
          setIsShowing(!isShowing);
        }}
      >
        Show All Banned Words
      </button>
      {isShowing ? <WordsList wordsList={props.bannedWords} /> : ""}
    </div>
  );
}

export default ShowWords;
