import { Tab, TabList, ToggleButton } from "@fluentui/react-components";
import styles from "./AppBar.module.css";

export type AppBarProps = {
  appBarData: {
    [k: string]: {
      icon: React.ReactElement;
    };
  };
};

export const AppBar: React.FC<AppBarProps> = ({ appBarData }) => {
  const tabs = Object.keys(appBarData);

  return (
    <TabList
      defaultSelectedValue={"Chat"}
      vertical
      className={styles.bar}
      appearance="transparent"
    >
      {tabs.map((k) => (
        <Tab
          className={styles.barItem}
          icon={appBarData[k].icon}
          key={`tab-${k}`}
          value={k}
        >
          {k}
        </Tab>
      ))}
    </TabList>
  );
};
