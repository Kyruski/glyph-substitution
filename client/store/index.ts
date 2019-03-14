import { createStore, Store } from "redux";
import bannedWords from "../../lib/loadBannedWords";
import glyphList from "../../lib/loadDictionary";

export const initialState = {
  bannedWords,
  glyphList,
  runningProcesses: [],
  message: "",
  isShowing: false
};
export const store: Store = createStore(reducer);

export default store;
