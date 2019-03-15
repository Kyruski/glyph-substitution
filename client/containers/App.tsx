import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { exec, ChildProcess } from "child_process";
import Check from "./Check";
import AddWord from "../components/Words/AddWord";
import AddGlyph from "../components/Glyphs/AddGlyph";
import Bot from "../components/Bot/Bot";
import addBannedWord from "../../lib/addBannedWord";
import addSubstitution from "../../lib/addGlyph";
import {
  AddWordType,
  AddGlyphType,
  ToggleBotType,
  VoidFunction
} from "../../index";
import store from "../store";
import {
  addRunningProcesses,
  removeRunningProcesses,
  setMessage,
  setIsShowing
} from "../actions";

function App(): JSX.Element {
  const addWord: AddWordType = function(word: string): string {
    let result: string = addBannedWord(word, store.getState().bannedWords);
    return result;
  };

  const addGlyph: AddGlyphType = function(
    glyph: string,
    letter: string
  ): string {
    let result: string = addSubstitution(
      glyph,
      letter,
      store.getState().glyphList
    );
    return result;
  };

  const toggleBot: ToggleBotType = function(channel: string): void {
    let pid: number = 0;
    let process: ChildProcess | null = null;
    for (let item of store.getState().runningProcesses) {
      //checks if bot is urnning in channel
      console.log("1", item);
      if (item[0] === channel) {
        console.log("we in here");
        pid = item[1].pid;
        process = item;
        break;
      }
    }
    if (pid) {
      console.log("in here too");
      //bot is running in channel so kill it
      exec(`kill -9 ${pid}`);
      store.dispatch(removeRunningProcesses(channel, process));
    } else {
      //bot is not running so start it
      let newProcess: ChildProcess = exec(`node bot.js ${channel}`);
      store.dispatch(addRunningProcesses(channel, newProcess));
    }
  };

  const resetState: VoidFunction = (): void => {
    store.dispatch(setMessage(""));
    store.dispatch(setIsShowing(false));
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/Check" onClick={() => resetState()}>
            Check for Substitution
          </Link>
          <Link to="/AddWord" onClick={() => resetState()}>
            Add a Banned Word
          </Link>
          <Link to="/AddGlyph" onClick={() => resetState()}>
            Add a Glyph Substitution
          </Link>
          <Link to="/Bot" onClick={() => resetState()}>
            Running Bot Instances
          </Link>
        </nav>
        <div id="main">
          <Route
            path="/Check"
            component={() => (
              <Check
                bannedWords={store.getState().bannedWords}
                glyphList={store.getState().glyphList}
              />
            )}
          />
          <Route
            path="/AddWord"
            component={() => <AddWord addWord={addWord} />}
          />
          <Route
            path="/AddGlyph"
            component={() => <AddGlyph addGlyph={addGlyph} />}
          />
          <Route path="/Bot" component={() => <Bot toggleBot={toggleBot} />} />
        </div>
      </div>
    </Router>
  );
}

export default App;

const render = (): void =>
  ReactDOM.render(<App />, document.getElementById("app"));
render();
store.subscribe(render);
