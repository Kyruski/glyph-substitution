import { Action } from "../../index";

export default (state: string = "", action: Action) => {
  switch (action.type) {
    case "SET_MESSAGE":
      return action.message;
    default:
      return state;
  }
};
