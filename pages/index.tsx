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
import { Header, Rail, AppBar, AppBarProps, Conversation } from "../components";

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

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <AppBar appBarData={appBarData} />
      <Rail />
      <Conversation />
    </div>
  );
};

export default Home;
