"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var bannedWords = [];
var document = fs_1.default
    .readFileSync(__dirname + "/dependencies/bannedWords.txt", "utf-8")
    .split("\r\n");
document.forEach(function (word) {
    if (word !== "")
        bannedWords.push(word.split("\n")[0]);
});
module.exports = bannedWords;
