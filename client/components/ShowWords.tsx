import React, { useState } from "react";
import WordsList from "./WordsList";

interface Props {
  bannedWords: Array<string>;
}

function ShowWords({ bannedWords }: Props): JSX.Element {
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
      {isShowing ? <WordsList wordsList={bannedWords} /> : ""}
    </div>
  );
}

export default ShowWords;
