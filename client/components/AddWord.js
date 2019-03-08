"use strict";
exports.__esModule = true;
var React = require("react");
function AddWord() {
    return (React.createElement("div", null,
        React.createElement("div", null, "Add a word to the Banned Words List"),
        React.createElement("form", null,
            React.createElement("input", { type: "text", id: "add-word" }))));
}
module.exports = AddWord;
