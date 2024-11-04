import React from "react";
import { User, Message } from "../ChatArea";
import styles from "./MessageClient.module.css";

/* interface User {
    id: string;
    username: string;
    displayName: string;
}

interface Message {
    timeStamp: number;
    text: string;
    senderId: string;
} */

interface MessageClientProps {
    message: Message;
    sender: User;
}

export function MessageClient({ message, sender }: MessageClientProps) {
    return (
        <div className={styles.container}>
            <div className={styles.message}>
                <p className={styles.messageText}>{message.text}</p>
                <p className={styles.timeStamp}>{message.timeStamp}</p>
            </div>
        </div>
    );
}
