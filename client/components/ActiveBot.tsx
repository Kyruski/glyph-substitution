import React from "react";

const ActiveBot = function(props: any) {
  return (
    <tr>
      <td>
        <button
          onClick={(e): void => {
            e.preventDefault;
            props.toggleBot(props.runningProcess[0]);
          }}
        >
          Kill Bot
        </button>
      </td>
      <td>{props.runningProcess[0]}</td>
    </tr>
  );
};

export default ActiveBot;
