import contentStyles from "./Content.module.css";
import styles from "./Conversation.module.css";

import {
  Avatar,
  Button,
  Divider,
  Input,
  Tab,
  TabList,
} from "@fluentui/react-components";
import { Send16Regular } from "@fluentui/react-icons";
import React from "react";

const messageData: MessageGroupProps[] = [
  {
    messages: [
      { text: "1 lorem", date: "9/12" },
      { text: "2 lorem", date: "9/12" },
      { text: "3 lorem", date: "9/12" },
      { text: "4 lorem", date: "9/12" },
    ],
    isMine: true,
  },
  {
    messages: [
      { text: "1 lorem", date: "9/13" },
      { text: "2 lorem", date: "9/13" },
      { text: "3 lorem", date: "9/13" },
      { text: "4 lorem", date: "9/13" },
    ],
    isMine: false,
  },
];

const me = {
  name: "Esteban Munoz Facusse",
  avatarProps: {
    name: "Esteban Munoz Facusse",
  },
};

const sender = {
  name: "Olorin",
  avatarProps: {
    name: "Olorin",
  },
};

export const Conversation = () => {
  return (
    <div className={`${contentStyles.content} ${styles.conversation}`}>
      <div className={styles.conversationHeader}>
        <Avatar name="Olorin" />
        <h2>Olorin</h2>
        <TabList defaultSelectedValue={1}>
          <Tab value={1}>Chat</Tab>
          <Tab value={2}>Files</Tab>
          <Tab value={3}>Origanization</Tab>
          <Tab value={4}>Activity</Tab>
          <Tab value={5}>LinkedIn</Tab>
        </TabList>
      </div>
      <Divider />
      <div className={styles.conversationBody}>
        {messageData.map((m: MessageGroupProps) => (
          // eslint-disable-next-line react/jsx-key
          <MessageGroup {...m} />
        ))}
      </div>
      <div className={styles.conversationInput}>
        <Input
          placeholder="Type a new message"
          className={styles.messageInput}
        />
        <Button
          appearance="transparent"
          className={styles.messageSend}
          icon={<Send16Regular />}
        />
      </div>
    </div>
  );
};

type MessageGroupProps = {
  messages: MessageProps[];
  isMine: boolean;
};

const MessageGroup: React.FC<MessageGroupProps> = ({ messages, isMine }) => {
  return (
    <div className={styles.messageGroup}>
      <div className={styles.messageGroupLeft}>
        {isMine && <Avatar {...me.avatarProps} />}
      </div>
      <div className={styles.messageGroupCenter}>
        {messages.map((message) => (
          // eslint-disable-next-line react/jsx-key
          <Message {...message} isMine={isMine} />
        ))}
      </div>
      <div className={styles.messageGroupRight}>
        {!isMine && <Avatar {...sender.avatarProps} />}
      </div>
    </div>
  );
};

type MessageProps = {
  text: string;
  date?: string;
  isMine?: boolean;
};

const Message: React.FC<MessageProps> = ({ text, date, isMine }) => {
  return (
    <div
      className={`${styles.message} ${
        isMine ? styles.messageMine : styles.messageTheirs
      }`}
    >
      <div className={styles.messageName}>
        {isMine}
        {isMine ? me.name : sender.name}
      </div>
      <div className={styles.messageDate}>{date}</div>
      <div className={styles.messageText}>{text}</div>
    </div>
  );
};
