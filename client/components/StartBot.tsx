import React, { useState } from "react";

const StartBot = function(props: any): JSX.Element {
  let [message, setMessage] = useState("");

  const isRunning = function(channel: string): boolean {
    for (let item of props.runningProcesses) {
      if (item[0] === channel) {
        return true;
      }
    }
    return false;
  };

  const buttonClick = function(e: any): void {
    // @ts-ignore
    let channel: HTMLInputElement = document.getElementById("join-channel");
    if (isRunning(channel.value)) {
      setMessage("The bot is already active in that channel");
      return;
    }
    if (channel.value) {
      props.toggleBot(channel.value);
      setMessage("");
    } else {
      setMessage("Please enter a valid channel name");
    }
  };

  const onKeyPress = function(event: any): void {
    if (event.which === 13) {
      event.preventDefault;
      buttonClick(event);
    }
  };

  return (
    <form onKeyPress={onKeyPress}>
      Add a bot to your Twitch Channel!
      <br />
      Enter the name of the channel for the bot to join:
      <br />
      Channel :
      <input type="text" id="join-channel" required />
      <button
        type="button"
        onClick={(e: any): void => {
          e.preventDefault;
          buttonClick(e);
        }}
      >
        Join
      </button>
      <span className="red-text">{message}</span>
    </form>
  );
};

export default StartBot;
