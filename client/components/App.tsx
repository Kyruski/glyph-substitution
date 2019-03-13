import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { exec, ChildProcess } from "child_process";
import Check from "./Check";
import AddWord from "./AddWord";
import AddGlyph from "./AddGlyph";
import Bot from "./Bot";
import addBannedWord from "../../lib/addBannedWord";
import addSubstitution from "../../lib/addGlyph";
import glyphList from "../../lib/loadDictionary";
import bannedWords from "../../lib/loadBannedWords";

function App(): JSX.Element {
  let [runningProcesses, setRunningProcesses]: [
    Array<[string, ChildProcess]>,
    Function
  ] = useState([]); //an array of all running processes

  const addWord: (word: string) => string = function(word: string): string {
    let result: string = addBannedWord(word, bannedWords);
    return result;
  };

  const addGlyph: (glyph: string, letter: string) => string = function(
    glyph: string,
    letter: string
  ): string {
    let result: string = addSubstitution(glyph, letter, glyphList);
    return result;
  };

  const toggleBot: (channel: string) => void = function(channel: string): void {
    let pid: number = 0;
    let index: number = 0;
    for (let [i, item] of runningProcesses.entries()) {
      //checks if bot is urnning in channel
      if (item[0] === channel) {
        pid = item[1].pid;
        index = i;
        break;
      }
    }
    if (pid) {
      //bot is running in channel so kill it
      exec(`kill -9 ${pid}`);
      let slice1: Array<[string, ChildProcess]> = runningProcesses.slice(
        0,
        index
      );
      let slice2: Array<[string, ChildProcess]> = runningProcesses.slice(
        index + 1
      );
      setRunningProcesses([...slice1, ...slice2]);
    } else {
      //bot is not running so start it
      let newProcess: ChildProcess = exec(`node bot.js ${channel}`);
      // @ts-ignore
      setRunningProcesses([...runningProcesses, [channel, newProcess]]);
    }
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/Check">Check for Substitution</Link>
          <Link to="/AddWord">Add a Banned Word</Link>
          <Link to="/AddGlyph">Add a Glyph Substitution</Link>
          <Link to="/Bot">Running Bot Instances</Link>
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

// import axios from "axios";

// let glyphList: any;
// let bannedWords: Array<string>;

// (function loadItems(): void {
//   axios.get("http://localhost:6969/load").then(data => {
//     glyphList = data.data.glyphList;
//     bannedWords = data.data.bannedWords;
//   });
// })();
