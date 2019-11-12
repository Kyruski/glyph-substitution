import React from "react";
import ActiveBot from "../../components/Bot/ActiveBot";
import { ChildProcess } from "child_process";
import store from "../../store";

interface Props {
  toggleBot: (channel: string) => void;
}

function AllActiveBots({ toggleBot }: Props): JSX.Element {
  const processes = store.getState().runningProcesses;
  return processes.length ? (
    <>
      {/* 
        //@ts-ignore */}
      <table
        style={{ border: "0", margin: "0 auto", borderSpacing: "2px 0px" }}
      >
        <thead>
          <tr>
            <th style={{ width: "155px" }}>Channel Name</th>
            <th style={{ width: "175px" }}>Active Since</th>
            <th style={{ width: "60px" }} />
          </tr>
        </thead>
        <tbody>
          {processes.map(
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
    </>
  ) : (
    <div></div>
  );
}

export default AllActiveBots;
