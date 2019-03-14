import { Action } from "../../index";

export default (state: boolean = false, action: Action) => {
  switch (action.type) {
    case "SWITCH_SHOWING":
      return !state;
    default:
      return state;
  }
};
