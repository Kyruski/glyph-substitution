import React from "react";
import { ChildProcess } from "child_process";
import store from "../../store";
import { Table, Button } from "antd";

interface Props {
  toggleBot: (channel: string) => void;
}

function AllActiveBots({ toggleBot }: Props): JSX.Element {
  const parseTime = (date: Date) => {
    let dateArray = date.toISOString().split("T");
    let time = dateArray[1].split(".")[0];
    return `${dateArray[0]} at ${time}`;
  };

  const makeButton = (processToKill: string) => {
    return (
      <Button
        onClick={(event: React.MouseEvent): void => {
          event.preventDefault;
          toggleBot(processToKill); //we send the tuple to the toggleBot Function to kill
        }}
        style={{
          height: "30px"
        }}
      >
        Kill Bot
      </Button>
    );
  };

  const columns = [
    {
      title: "Channel Name",
      dataIndex: "channelName",
      key: "channelName",
      width: "155px"
    },
    {
      title: "Active Since",
      dataIndex: "activeSince",
      key: "activeSince",
      width: "175px"
    },
    {
      title: "",
      dataIndex: "removeBotButton",
      key: "removeBotButton",
      width: "60px",
      background: "none"
    }
  ];
  const processes = store.getState().runningProcesses;
  const dataSource = processes.map(
    (process: [string, ChildProcess, Date], index: number) => ({
      key: index,
      channelName: process[0],
      activeSince: parseTime(process[2]),
      removeBotButton: makeButton(process[0])
    })
  );

  return processes.length ? (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        className="bot-table"
      />
    </>
  ) : (
    <div></div>
  );
}

export default AllActiveBots;
