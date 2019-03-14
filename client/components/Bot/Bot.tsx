import React from "react";
import AllActiveBots from "../../containers/AllActiveBots";
import StartBot from "../../containers/StartBot";

interface Props {
  toggleBot: (channel: string) => void;
}

function Bot({ toggleBot }: Props): JSX.Element {
  return (
    <div>
      <StartBot toggleBot={toggleBot} />
      <AllActiveBots toggleBot={toggleBot} />
    </div>
  );
}

export default Bot;
