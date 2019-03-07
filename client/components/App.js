"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
console.log("we hereerererere", document.getElementById("app"));
function App() {
    return React.createElement("div", null, "Hello Tony, it is 4:50pm right now");
}
module.exports = App;
ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
