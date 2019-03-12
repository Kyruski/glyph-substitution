import React, { useState } from "react";
import ActiveBot from "./ActiveBot";

const Bot = function(props: any) {
  let [message, setMessage] = useState("");

  const buttonClick = function(e: any): void {
    // @ts-ignore
    e.preventDefault;
    // @ts-ignore
    let channel: HTMLInputElement = document.getElementById("join-channel");
    if (channel.value) {
      props.toggleBot(channel.value);
      setMessage("");
    } else {
      setMessage("Please enter a valid channel name");
    }
  };

  const onKeyPress = function(event: any): void {
    if (event.which === 13) {
      buttonClick(event);
    }
  };

  return (
    <div>
      <form onKeyPress={onKeyPress}>
        Add a bot to your Twitch Channel!
        <br />
        Enter the name of the channel for the bot to join:
        <br />
        Channel :
        <input type="text" id="join-channel" />
        <button
          type="button"
          onClick={(e: any): void => {
            buttonClick(e);
          }}
        >
          Join
        </button>
        {message}
      </form>
      <div>
        <table style={{ border: "1" }}>
          <thead>
            <tr>
              <th style={{ width: "80px" }} />
              <th style={{ width: "150px" }}>Channel Name</th>
            </tr>
          </thead>
          <tbody>
            {props.runningProcesses.map(
              (runningProcess: any, index: number) => (
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
    </div>
  );
};

export default Bot;
