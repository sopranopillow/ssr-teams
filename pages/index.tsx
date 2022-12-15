import type { NextPage } from "next";
import React from "react";
import styles from "../styles/Home.module.css";
import {
  Alert24Regular,
  Chat24Regular,
  PeopleTeam24Regular,
  CalendarLtr24Regular,
  Call24Regular,
  Document24Regular,
  AppFolder24Regular,
} from "@fluentui/react-icons";
import {
  Header,
  Rail,
  AppBar,
  AppBarProps,
  Conversation,
  RailProps,
} from "../components";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <AppBar appBarData={appBarData} />
      <Rail railData={railData} />
      <Conversation />
    </div>
  );
};

export default Home;

const railData: RailProps["railData"] = {
  "1": {
    title: "Esteban Munoz Facusse",
    avatarProps: {
      name: "Esteban Munoz Facusse",
    },
    preview: "Hey, how are you?",
    date: "9/12",
  },
  "2": {
    title: "Bill Gates",
    avatarProps: {
      name: "Bill Gates",
    },
    preview: "Hey, how are you?",
    date: "9/12",
  },
  "3": {
    title: "Satya Nadella",
    avatarProps: {
      name: "Satya Nadella",
    },
    preview: "Hey, how are you?",
    date: "9/12",
  },
  "4": {
    title: "Olorin",
    avatarProps: {
      name: "Olorin",
    },
    preview: "Hey, how are you?",
    date: "9/12",
  },
};

const appBarData: AppBarProps["appBarData"] = {
  Activity: {
    icon: <Alert24Regular />,
  },
  Chat: {
    icon: <Chat24Regular />,
  },
  Teams: {
    icon: <PeopleTeam24Regular />,
  },
  Calendar: {
    icon: <CalendarLtr24Regular />,
  },
  Calls: {
    icon: <Call24Regular />,
  },
  Files: {
    icon: <Document24Regular />,
  },
  Apps: {
    icon: <AppFolder24Regular />,
  },
};
