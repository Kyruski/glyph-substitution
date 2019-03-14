import { ChildProcess } from "child_process";
import { Action } from "../..";

export default (
  state: Array<[string, ChildProcess]> = [],
  action: Action
): Array<[string, ChildProcess]> => {
  switch (action.type) {
    case "ADD_PROCESS":
      return [...state, [action.channel, action.process]];
    case "REMOVE PROCESS":
      let index: number;
      for (let i = 0; i < state.length; i++) {
        if (state[i][0] === action.channel) {
          index = i;
          break;
        }
      }
      //@ts-ignore
      return index
        ? [...state.slice(0, index), ...state.slice(index + 1)]
        : state;
    default:
      return state;
  }
};
