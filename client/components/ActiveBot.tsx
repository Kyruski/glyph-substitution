import React from "react";

function ActiveBot(props: any): JSX.Element {
  return (
    <tr>
      <td>
        <button
          onClick={(event: React.MouseEvent): void => {
            event.preventDefault;
            props.toggleBot(props.runningProcess[0]); //we send the tuple to the toggleBot Function to kill
          }}
        >
          Kill Bot
        </button>
      </td>
      <td>{props.runningProcess[0]}</td>
    </tr>
  );
}

export default ActiveBot;
