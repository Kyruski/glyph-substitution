import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddWord from "./AddWord";
import * as glyphDictionary from "../../lib/loadDictionary";
import bannedWords from "../../lib/loadBannedWords";
import addBannedWord from "../../lib/addBannedWord";

function App(): JSX.Element {
  const addWord = function(word: string): string {
    let result: string = "we good"; //addBannedWord(word, bannedWords);
    return result;
  };

  return (
    <Router>
      <div>
        <div>Welcome to the Glyph Substitution Checker</div>
        <Link to="/AddWord">Add a new Banned Word</Link>
        <Route
          path="/AddWord"
          component={() => (
            <AddWord addWord={(word: string) => addWord(word)} />
          )}
        />
      </div>
    </Router>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
