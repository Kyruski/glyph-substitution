import React from "react";
import { ChildProcess } from "child_process";

interface Props {
  runningProcess: [string, ChildProcess];
  toggleBot: (channel: string) => void;
}

function ActiveBot({ runningProcess, toggleBot }: Props): JSX.Element {
  return (
    <tr>
      <td>
        <button
          onClick={(event: React.MouseEvent): void => {
            event.preventDefault;
            toggleBot(runningProcess[0]); //we send the tuple to the toggleBot Function to kill
          }}
        >
          Kill Bot
        </button>
      </td>
      <td>{runningProcess[0]}</td>
    </tr>
  );
}

export default ActiveBot;
