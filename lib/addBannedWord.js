"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
function addBannedWord(word, bannedWords) {
    word = word.toLowerCase();
    if (bannedWords.includes(word))
        return "Word already exists in the list.";
    bannedWords.push(word);
    fs_1.default.appendFileSync(__dirname + "/dependencies/bannedWords.txt", word + "\n");
    return "Word \"" + word + "\" was added to the banned words list.";
}
module.exports = addBannedWord;
