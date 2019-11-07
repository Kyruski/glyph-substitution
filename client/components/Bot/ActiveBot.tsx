import React from "react";
import { ChildProcess } from "child_process";

interface Props {
  runningProcess: [string, ChildProcess, Date];
  toggleBot: (channel: string) => void;
  index: number;
}

const allRows = {
  height: "30px"
};
const style = {
  evenRow: {
    ...allRows,
    background: "#505050"
  },
  oddRow: {
    ...allRows,
    background: "#707070"
  }
};

function ActiveBot({ runningProcess, toggleBot, index }: Props): JSX.Element {
  let rowStyle = index % 2 === 0 ? style.evenRow : style.oddRow;
  let dateArray = runningProcess[2].toISOString().split("T");
  let time = dateArray[1].split(".")[0];
  let dateAsString = `${dateArray[0]} at  ${time}`;
  return (
    <tr style={rowStyle}>
      <td style={{ paddingLeft: "5px" }}>{runningProcess[0]}</td>
      <td style={{ paddingLeft: "5px" }}>{dateAsString}</td>
      <td style={{ background: "#303030" }}>
        <button
          onClick={(event: React.MouseEvent): void => {
            event.preventDefault;
            toggleBot(runningProcess[0]); //we send the tuple to the toggleBot Function to kill
          }}
          style={{
            height: "30px",
            background: "#6441a5",
            color: "#fff",
            border: "0"
          }}
        >
          Kill Bot
        </button>
      </td>
    </tr>
  );
}

export default ActiveBot;
