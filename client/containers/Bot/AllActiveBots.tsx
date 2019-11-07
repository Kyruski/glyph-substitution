import React from "react";
import ActiveBot from "../../components/Bot/ActiveBot";
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
      <table border="0">
        <thead>
          <tr>
            <th style={{ width: "150px" }}>Channel Name</th>
            <th style={{ width: "175px" }}>Active Since</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {store.getState().runningProcesses.map(
            //maps through all running processes to display in ActiveBot
            (
              runningProcess: [string, ChildProcess, Date],
              index: number
            ): JSX.Element => (
              <ActiveBot
                runningProcess={runningProcess}
                toggleBot={toggleBot}
                key={`runningProcess-${index}`}
                index={index}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AllActiveBots;
