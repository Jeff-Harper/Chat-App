import React from "react";
import styles from "./ConversationListItem.module.css";

export type ConversationListItemData = {
  name: string;
  lastMessage: string;
  timeStamp: string;
};

export interface ConversationListItemProps {
  data: ConversationListItemData;
}

export function ConversationListItem(props: ConversationListItemProps) {
  const data = props.data;
  return (
    <li className={styles.listItem}>
      <p className={styles.icon}>{data.name[0]}</p>
      <p className={styles.title}>{data.name}</p>
      <p className={styles.lastMessage}>{data.lastMessage}</p>
      <p className={styles.timeStamp}>{data.timeStamp}</p>
    </li>
  );
}
