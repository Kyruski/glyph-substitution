import React from "react";
import ActiveBot from "./ActiveBot";

const AllActiveBots = function(props: any): JSX.Element {
  return (
    <div>
      {/* 
        //@ts-ignore */}
      <table border="1">
        <thead>
          <tr>
            <th style={{ width: "80px" }} />
            <th style={{ width: "150px" }}>Channel Name</th>
          </tr>
        </thead>
        <tbody>
          {props.runningProcesses.map(
            (runningProcess: any, index: number): JSX.Element => (
              <ActiveBot
                runningProcess={runningProcess}
                toggleBot={props.toggleBot}
                key={`runningProcess-${index}`}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllActiveBots;
