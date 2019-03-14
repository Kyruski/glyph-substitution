import React from "react";
import { VoidFunction, KeyPress, IsRunningType } from "../../../index";
import store from "../../store";
import { setMessage } from "../../actions";

interface Props {
  toggleBot: (channel: string) => void;
}

function StartBot({ toggleBot }: Props): JSX.Element {
  const isRunning: IsRunningType = function(channel: string): boolean {
    //checks if the bot is running in that channel
    for (let item of store.getState().runningProcesses) {
      if (item[0] === channel) {
        return true;
      }
    }
    return false;
  };

  const buttonClick: VoidFunction = function(): void {
    // @ts-ignore
    const channel: HTMLInputElement = document.getElementById("join-channel"); //get desired channel
    if (isRunning(channel.value)) {
      //check if running
      store.dispatch(setMessage("The bot is already active in that channel"));
      return;
    }
    if (channel.value) {
      //if it isn't running, add the channel
      toggleBot(channel.value);
      store.dispatch(setMessage(""));
    } else {
      //no channel was entered
      store.dispatch(setMessage("Please enter a valid channel name"));
    }
  };

  const onKeyPress: KeyPress = function(event: React.KeyboardEvent): void {
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
      <div className="red-text">{store.getState().message}</div>
    </form>
  );
}

export default StartBot;
