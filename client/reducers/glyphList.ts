import { GenericObject, Action } from "../..";
import glyphList from "../../lib/loadDictionary";

export default (
  state: GenericObject = glyphList,
  action: Action
): GenericObject => {
  let addItem: GenericObject = {};
  addItem[action.glyph] = [...state[action.glyph], action.letter];
  switch (action.type) {
    case "ADD_GLYPH":
      return { ...state, ...addItem };
    default:
      return state;
  }
};
