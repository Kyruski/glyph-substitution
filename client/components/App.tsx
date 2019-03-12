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
import { exec } from "child_process";

function App(): JSX.Element {
  let [isBotRunning, setIsBotRunning] = useState(false);
  let [runningProcess, setRunningProcess] = useState(0);

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

  const toggleBot = function(): void {
    console.log(runningProcess);
    if (isBotRunning) {
      let oldProcess = exec(`kill -9 ${runningProcess}`);
      console.log(oldProcess);
      setRunningProcess(0);
    } else {
      let newProcess = exec("npm run run-bot");
      setRunningProcess(newProcess.pid);
      console.log(newProcess);
    }
    setIsBotRunning(!isBotRunning);
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
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            onClick={(e: any) => {
              e.preventDefault;
              toggleBot();
            }}
          >
            {" "}
            {isBotRunning ? "Turn off Bot" : "Launch Bot"}{" "}
          </button>
        </nav>
        <div id="main">
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
