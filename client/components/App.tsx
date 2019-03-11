import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Check from "./Check";
import AddWord from "./AddWord";
import AddGlyph from "./AddGlyph";
import addBannedWord from "../../lib/addBannedWord";
import addSubstitution from "../../lib/addGlyph";
import axios from "axios";

function App(): JSX.Element {
  let glyphList: any;
  let bannedWords: Array<string>;

  (function loadItems(): void {
    axios.get("http://localhost:6969/load").then(data => {
      glyphList = data.data.glyphList;
      bannedWords = data.data.bannedWords;
    });
  })();

  const addWord = function(word: string): string {
    let result: string = addBannedWord(word, bannedWords);
    return result;
  };

  const addGlyph = function(glyph: string, letter: string): string {
    let result: string = addSubstitution(glyph, letter, glyphList);
    return result;
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/Check">Check for Substitution</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/AddWord">Add a Banned Word</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/AddGlyph">Add a Glyph Substitution</Link>
        </nav>
        <div>
          <Route
            path="/Check"
            component={() => (
              <Check bannedWords={bannedWords} glyphList={glyphList} />
            )}
          />
          <Route
            path="/AddWord"
            component={() => (
              <AddWord addWord={(word: string) => addWord(word)} />
            )}
          />
          <Route
            path="/AddGlyph"
            component={() => (
              <AddGlyph
                addGlyph={(glyph: string, letter: string) =>
                  addGlyph(glyph, letter)
                }
              />
            )}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
