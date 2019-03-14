import { Action } from "../../index";

export default (state: boolean = false, action: Action): boolean => {
  switch (action.type) {
    case "SWITCH_SHOWING":
      return action.isShowing;
    default:
      return state;
  }
};
