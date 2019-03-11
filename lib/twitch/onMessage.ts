import makeGlyphCombinations from "../../lib/makeGlyphCombinations";
import containsBannedWord from "../../lib/containsBannedWord";
import addBannedWord from "../../lib/addBannedWord";
import addSubstitution from "../../lib/addGlyph";
import axios from "axios";
import tmi from "tmi.js";
import client from "./bot";

let glyphList: any;
let bannedWords: Array<string>;

function checkMsg(msg: string): string {
  let combos: Array<string> = makeGlyphCombinations(msg, glyphList);
  let result: string = containsBannedWord(combos, bannedWords);
  return result;
}

(function loadItems(): void {
  axios.get("http://localhost:6969/load").then(data => {
    glyphList = data.data.glyphList;
    bannedWords = data.data.bannedWords;
  });
})();

export default function onMessageHandler(
  target: string,
  context: tmi.CommonUserstate,
  msg: string,
  self: boolean
): void {
  console.log("this is elf", self);
  const user = context.username;
  if (user === "glyphsubstitutionbot") {
    return;
  }
  let banMessage = checkMsg(msg);
  console.log("words, ", bannedWords, "msg", banMessage);
  if (banMessage) {
    client.say(target, "Get banned " + user);
    client.say(target, `/timeout ${user} 10`);
  }
}
