import {
  Avatar,
  AvatarProps,
  Button,
  Divider,
} from "@fluentui/react-components";
import React from "react";
import styles from "./Rail.module.css";

type RailData = {
  [k: string]: Omit<RailItemProps, "setPressed" | "id">;
};

const railData: RailData = {
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
    title: "Olorin The Gray",
    avatarProps: {
      name: "Olorin The Gray",
    },
    preview: "Hey, how are you?",
    date: "9/12",
  },
};

export const Rail: React.FC = () => {
  const [selectedId, setSelectedId] = React.useState<string | undefined>();

  const setPressed = (id: string) => {
    if (selectedId === id) {
      setSelectedId(undefined);
    } else {
      setSelectedId(id);
    }
  };

  return (
    <div className={styles.rail}>
      <div className={styles.railHeader}>
        <h2>Chat</h2>
      </div>
      <Divider />
      <div className={styles.railBody}>
        {Object.keys(railData).map((k) => (
          <RailItem
            key={`railItem-${k}`}
            id={k}
            pressed={selectedId === k}
            setPressed={setPressed}
            {...railData[k]}
          />
        ))}
      </div>
    </div>
  );
};

type RailItemProps = {
  title: string;
  avatarProps: AvatarProps;
  preview: string;
  date: string;
  setPressed: (id: string) => void;
  id: string;
  pressed?: boolean;
};

const RailItem: React.FC<RailItemProps> = (props) => {
  const { title, avatarProps, preview, date, pressed, id, setPressed } = props;

  return (
    <button
      type="button"
      className={`${styles.railItem} ${pressed ? styles.railItemSelected : ""}`}
      onClick={() => setPressed(id)}
      aria-pressed={pressed}
    >
      <Avatar className={styles.avatar} color="colorful" {...avatarProps} />
      <span className={styles.title}>
        <span className={styles.titleText}>{title}</span>
        <span className={styles.titleDate}>{date}</span>
      </span>
      <span className={styles.preview}>{preview}</span>
    </button>
  );
};
