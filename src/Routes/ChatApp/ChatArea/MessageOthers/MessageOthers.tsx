import { User, Message } from "../ChatArea";
import styles from "./styles.module.css";

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

interface MessageOthersProps {
    message: Message;
    sender: User;
}

export default function MessageOthers({ message, sender }: MessageOthersProps) {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>{sender.displayName[0]}</div>
            <div className={styles.message}>
                <p className={styles.sender}>{sender.displayName}</p>
                <p className={styles.messageText}>{message.text}</p>
                <p className={styles.timeStamp}>{message.timeStamp}</p>
            </div>
        </div>
    );
}
