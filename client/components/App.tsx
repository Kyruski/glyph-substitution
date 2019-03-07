import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";

console.log("we hereerererere", document.getElementById("app"));
function App(): JSX.Element {
  return <div>Hello Tony, it is 4:50pm right now</div>;
}

module.exports = App;

ReactDOM.render(<App />, document.getElementById("app"));
