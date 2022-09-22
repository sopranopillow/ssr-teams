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
  GridDots24Regular,
  Search24Regular,
  MoreHorizontal24Regular,
} from "@fluentui/react-icons";
import {
  ToggleButton,
  FluentProvider,
  teamsLightTheme,
  Button,
  Input,
  Avatar,
} from "@fluentui/react-components";

const appBarItems: { [key: string]: Omit<AppBarItemProps, "children"> } = {
  Activity: {
    Icon: Alert24Regular,
  },
  Chat: {
    Icon: Chat24Regular,
  },
  Teams: {
    Icon: PeopleTeam24Regular,
  },
  Calendar: {
    Icon: CalendarLtr24Regular,
  },
  Calls: {
    Icon: Call24Regular,
  },
  Files: {
    Icon: Document24Regular,
  },
  Apps: {
    Icon: AppFolder24Regular,
  },
};

const Home: NextPage = () => {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Button appearance="transparent">
            <GridDots24Regular />
          </Button>
          <Input contentBefore={<Search24Regular />} placeholder="Search" />
          <Button appearance="transparent">
            <MoreHorizontal24Regular />
          </Button>
          <Avatar name="Kevin Stugis" badge={{ status: "available" }} />
        </div>
        <AppBar>
          {Object.keys(appBarItems).map((k) => (
            <AppBarItem key={`appBarItem-${k}`} {...appBarItems[k]}>
              {k}
            </AppBarItem>
          ))}
        </AppBar>
        <div className={styles.rail}>Rail</div>
        <div className={styles.content}>Content</div>
      </div>
    </FluentProvider>
  );
};

export default Home;

const AppBar: React.FunctionComponent<{ children: React.ReactElement[] }> = ({
  children,
}) => {
  return <ul className={styles.bar}>{children}</ul>;
};

type AppBarItemProps = {
  Icon: any;
  children: string;
};

const AppBarItem: React.FC<AppBarItemProps> = ({ children, Icon }) => {
  return (
    <li className={styles.barItem}>
      <ToggleButton appearance="transparent">
        <>
          <Icon />
          {children}
        </>
      </ToggleButton>
    </li>
  );
};
