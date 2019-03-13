import React, { useState } from "react";

function StartBot(props: any): JSX.Element {
  let [message, setMessage]: [string, Function] = useState("");

  const isRunning: (channel: string) => boolean = function(
    channel: string
  ): boolean {
    //checks if the bot is running in that channel
    for (let item of props.runningProcesses) {
      if (item[0] === channel) {
        return true;
      }
    }
    return false;
  };

  const buttonClick: () => void = function(): void {
    // @ts-ignore
    let channel: HTMLInputElement = document.getElementById("join-channel"); //get desired channel
    if (isRunning(channel.value)) {
      //check if running
      setMessage("The bot is already active in that channel");
      return;
    }
    if (channel.value) {
      //if it isn't running, add the channel
      props.toggleBot(channel.value);
      setMessage("");
    } else {
      //no channel was entered
      setMessage("Please enter a valid channel name");
    }
  };

  const onKeyPress: (event: React.KeyboardEvent) => void = function(
    event: React.KeyboardEvent
  ): void {
    if (event.which === 13) {
      //prevent enter from reloading the page
      event.preventDefault;
      buttonClick();
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
        onClick={(event: React.MouseEvent): void => {
          event.preventDefault;
          buttonClick();
        }}
      >
        Join
      </button>
      <span className="red-text">{message}</span>
    </form>
  );
}

export default StartBot;
