import React, { useState } from "react";
import AllActiveBots from "./AllActiveBots";
import StartBot from "./StartBot";

const Bot = function(props: any): JSX.Element {
  return (
    <div>
      <StartBot
        runningProcesses={props.runningProcesses}
        toggleBot={props.toggleBot}
      />
      <AllActiveBots
        runningProcesses={props.runningProcesses}
        toggleBot={props.toggleBot}
      />
    </div>
  );
};

export default Bot;
