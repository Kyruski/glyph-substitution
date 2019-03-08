import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddWord from "./AddWord";

function App(): JSX.Element {
  // const components = [["AddWord", "Add a new Banned Word", AddWord]];
  // let [currentWindow, setCurrentWindow] = useState<string>(components[0][0]);

  return (
    <Router>
      <div>
        <div>Welcome to the Glyph Substitution Checker</div>
        <Link to="/AddWord">Add a new Banned Word</Link>
        <Route path="/AddWord" component={AddWord} />
      </div>
    </Router>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
