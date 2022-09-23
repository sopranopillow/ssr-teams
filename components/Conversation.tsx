import contentStyles from "./Content.module.css";
import styles from "./Conversation.module.css";

import { Avatar, Divider, Tab, TabList } from "@fluentui/react-components";

export const Conversation = () => {
  return (
    <div className={`${contentStyles.content} ${styles.conversation}`}>
      <div className={styles.conversationHeader}>
        <Avatar name="Olorin The Gray" />
        <h2>Olorin The Gray</h2>
        <TabList defaultSelectedValue={1}>
          <Tab value="1">Chat</Tab>
          <Tab value="2">Files</Tab>
          <Tab value="3">Origanization</Tab>
          <Tab value="4">Activity</Tab>
          <Tab value="5">LinkedIn</Tab>
        </TabList>
      </div>
      <Divider />
      <div className={styles.conversationBody}>
        <div>Left</div>
        <div>Center</div>
        <div>Right</div>
      </div>
      <div className={styles.conversationInput}>Chat</div>
    </div>
  );
};
