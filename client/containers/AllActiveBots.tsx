import React from "react";
import ActiveBot from "./ActiveBot";
import { ChildProcess } from "child_process";
import store from "../../store";

interface Props {
  toggleBot: (channel: string) => void;
}

function AllActiveBots({ toggleBot }: Props): JSX.Element {
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
          {store.getState().runningProcesses.map(
            //maps through all running processes to display in ActiveBot
            (
              runningProcess: [string, ChildProcess],
              index: number
            ): JSX.Element => (
              <ActiveBot
                runningProcess={runningProcess}
                toggleBot={toggleBot}
                key={`runningProcess-${index}`}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AllActiveBots;
