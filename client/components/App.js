"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var AddWord = require("./AddWord.js");
console.log("we hereerererere", document.getElementById("app"));
function App() {
    return (React.createElement("div", null,
        React.createElement("div", null, "Welcome to the Glyph Substitution Checker"),
        React.createElement(AddWord, null)));
}
exports["default"] = App;
ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
