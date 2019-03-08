import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import AddWord from "./AddWord.js";

console.log("we hereerererere", document.getElementById("app"));
function App(): JSX.Element {
  return (
    <div>
      <div>Welcome to the Glyph Substitution Checker</div>
      <AddWord />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
