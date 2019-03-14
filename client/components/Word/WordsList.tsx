import React from "react";
import store from "../../store";

function WordsList(): JSX.Element {
  return (
    <div>
      {/* 
          //@ts-ignore */}
      <table border="1" style={{ maxWidth: "80%", margin: "0 2%" }}>
        <thead>
          <tr>
            <th>Word</th>
          </tr>
        </thead>
        <tbody>
          {store.getState().wordsList.map(
            (item: string, index: number): JSX.Element => (
              <tr key={`word-${index}`}>
                <td>{item}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default WordsList;
