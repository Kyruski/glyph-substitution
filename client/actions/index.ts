import { ChildProcess } from "child_process";
import { Action } from "../..";

export const setMessage: Function = (message: string): Action => ({
  message,
  type: "SET_MESSAGE"
});

export const setIsShowing: Function = (isShowing: boolean): Action => ({
  isShowing,
  type: "SWITCH_SHOWING"
});

export const setBannedWord: Function = (word: string): Action => ({
  word,
  type: "ADD_WORD"
});

export const setGlyphList: Function = (
  glyph: string,
  letter: string
): Action => ({
  glyph,
  letter,
  type: "ADD_GLYPH"
});

export const addRunningProcesses: Function = (
  channel: string,
  process: ChildProcess,
  date: Date
): Action => ({
  channel,
  process,
  date,
  type: "ADD_PROCESS"
});

export const removeRunningProcesses: Function = (
  channel: string,
  process: ChildProcess
): Action => ({
  channel,
  process,
  type: "REMOVE_PROCESS"
});
