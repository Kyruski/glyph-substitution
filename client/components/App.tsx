import * as React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Check from "./Check";
import AddWord from "./AddWord";
import AddGlyph from "./AddGlyph";
import Bot from "./Bot";
import addBannedWord from "../../lib/addBannedWord";
import addSubstitution from "../../lib/addGlyph";
// import axios from "axios";
import glyphList from "../../lib/loadDictionary";
import bannedWords from "../../lib/loadBannedWords";
import { exec } from "child_process";

function App(): JSX.Element {
  let [runningProcesses, setRunningProcesses] = useState([]);

  // let glyphList: any;
  // let bannedWords: Array<string>;

  // (function loadItems(): void {
  //   axios.get("http://localhost:6969/load").then(data => {
  //     glyphList = data.data.glyphList;
  //     bannedWords = data.data.bannedWords;
  //   });
  // })();

  const addWord = function(word: string): string {
    let result: string = addBannedWord(word, bannedWords);
    return result;
  };

  const addGlyph = function(glyph: string, letter: string): string {
    let result: string = addSubstitution(glyph, letter, glyphList);
    return result;
  };

  const toggleBot = function(channel: string): void {
    let pid: number;
    let index: number;
    for (let [i, item] of runningProcesses.entries()) {
      if (item[0] === channel) {
        // @ts-ignore
        pid = item[1].pid;
        index = i;
        break;
      }
    }
    // @ts-ignore
    if (pid) {
      exec(`kill -9 ${pid}`);
      // @ts-ignore
      let slice1 = runningProcesses.slice(0, index);
      // @ts-ignore
      let slice2 = runningProcesses.slice(index + 1);
      setRunningProcesses([...slice1, ...slice2]);
    } else {
      let newProcess = exec(`node bot.js ${channel}`);
      // @ts-ignore
      setRunningProcesses([...runningProcesses, [channel, newProcess]]);
    }
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/Check">Check for Substitution</Link>
          {"     "}
          <Link to="/AddWord">Add a Banned Word</Link>
          {"     "}
          <Link to="/AddGlyph">Add a Glyph Substitution</Link>
          {"     "}
          <Link to="/Bot">Running Bot Instances</Link>
          {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            id="bot-button"
            onClick={(e: any) => {
              e.preventDefault;
              toggleBot();
            }}
          >
            {" "}
            {isBotRunning ? "Turn off Bot" : "Launch Bot"}{" "}
          </button> */}
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
              <AddWord addWord={addWord} bannedWords={bannedWords} />
            )}
          />
          <Route
            path="/AddGlyph"
            component={() => (
              <AddGlyph addGlyph={addGlyph} glyphList={glyphList} />
            )}
          />
          <Route
            path="/Bot"
            component={() => (
              <Bot runningProcesses={runningProcesses} toggleBot={toggleBot} />
            )}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
