import React, { useEffect } from "react";
import AllActiveBots from "../../containers/Bot/AllActiveBots";
import StartBot from "../../containers/Bot/StartBot";

interface Props {
  toggleBot: (channel: string) => void;
}

function Bot({ toggleBot }: Props): JSX.Element {
  useEffect(() => {
    document.title = "Manage Twitch Bots";
  });
  return (
    <div>
      <StartBot toggleBot={toggleBot} />
      <AllActiveBots toggleBot={toggleBot} />
    </div>
  );
}

export default Bot;
