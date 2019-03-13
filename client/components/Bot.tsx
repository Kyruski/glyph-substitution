import React from "react";
import AllActiveBots from "./AllActiveBots";
import StartBot from "./StartBot";
import { ChildProcess } from "child_process";

interface Props {
  runningProcesses: Array<[string, ChildProcess]>;
  toggleBot: (channel: string) => void;
}

function Bot({ runningProcesses, toggleBot }: Props): JSX.Element {
  return (
    <div>
      <StartBot runningProcesses={runningProcesses} toggleBot={toggleBot} />
      <AllActiveBots
        runningProcesses={runningProcesses}
        toggleBot={toggleBot}
      />
    </div>
  );
}

export default Bot;
