import React from "react";
import styles from "./ConversationItem.module.css";

export type ConversationItemData = {
    name: String;
    lastMessage: String;
    timeStamp: String;
};

export interface ConversationItemProps {
    data: ConversationItemData;
}

export function ConversationItem(props: ConversationItemProps) {
    const data = props.data;
    return (
        <div className={styles.container}>
            <p className={styles.icon}>{data.name[0]}</p>
            <p className={styles.title}>{data.name}</p>
            <p className={styles.lastMessage}>{data.lastMessage}</p>
            <p className={styles.timeStamp}>{data.timeStamp}</p>
        </div>
    );
}
