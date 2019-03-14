import React from "react";
import WordsList from "../../components/Words/WordsList";
import store from "../../store";
import { setIsShowing } from "../../actions";

function ShowWords(): JSX.Element {
  return (
    <div>
      <button
        type="button"
        onClick={(event: React.MouseEvent): void => {
          event.preventDefault;
          store.dispatch(setIsShowing(!store.getState().isShowing));
        }}
      >
        Show All Banned Words
      </button>
      {store.getState().isShowing ? <WordsList /> : ""}
    </div>
  );
}

export default ShowWords;
