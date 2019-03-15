import makeGlyphCombinations from "../../lib/makeGlyphCombinations";
import containsBannedWord from "../../lib/containsBannedWord";
import tmi from "tmi.js";
import client from "./bot";
import store from "../../client/store";

function checkMsg(msg: string): string {
  let combos: Array<string> = makeGlyphCombinations(
    msg,
    store.getState().glyphList
  );
  let result: string = containsBannedWord(combos, store.getState().bannedWords);
  return result;
}

export default function onMessageHandler(
  target: string,
  context: tmi.CommonUserstate,
  msg: string,
  self: boolean
): void {
  const user: string = context.username;
  if (user === "glyphsubstitutionbot") {
    return;
  }
  const banMessage: string = checkMsg(msg);
  if (banMessage) {
    client.say(target, "Get banned " + user);
    client.say(target, `/timeout ${user} 10`);
  }
}
