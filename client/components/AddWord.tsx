import * as React from "react";
import { useState, useEffect } from "react";

function AddWord(): JSX.Element {
  return (
    <div>
      <div>Add a word to the Banned Words List</div>
      <form>
        <input type="text" id="add-word" />
      </form>
    </div>
  );
}

module.exports = AddWord;
