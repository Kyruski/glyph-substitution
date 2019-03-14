import { combineReducers } from "redux";
import bannedWords from "./bannedWords";
import glyphList from "./glyphList";
import message from "./message";
import isShowing from "./isShowing";
import runningProcesses from "./runningProcesses";

export default combineReducers({
  bannedWords,
  glyphList,
  message,
  isShowing,
  // @ts-ignore
  runningProcesses
});
