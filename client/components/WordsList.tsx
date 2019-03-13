import React from "react";

function WordsList(props: any): JSX.Element {
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
          {props.wordsList.map(
            (item: Array<string>, index: number): JSX.Element => (
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
