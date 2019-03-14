import bannedWords from "../../lib/loadBannedWords";
import { Action } from "../../index";

export default (state: Array<string> = bannedWords, action: Action) => {
  switch (action.type) {
    case "ADD_WORD":
      return [...state, action.word];
    default:
      return state;
  }
};
