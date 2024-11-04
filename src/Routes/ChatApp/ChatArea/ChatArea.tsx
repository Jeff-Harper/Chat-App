import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import styles from "./styles.module.css";
import { ReactNode, useState } from "react";
import { SmallBox } from "../../../Components/Box/SmallBox";
import WorkAreaContainer from "../../../Components/WorkAreaContainer/WorkAreaContainer";

export interface User {
    id: string;
    username: string;
    displayName: string;
}

export interface Message {
    timeStamp: number;
    text: string;
    senderId: string;
}

/* interface Chat {
    chatId: string;
    title: string;
    iconURL: string;
    users: User[];
    messages: Message[];
} */

interface ChatAreaProps {
    children?: ReactNode;
    chatId: string;
    title: string;
    iconURL: string;
    users: User[];
    messages: Message[];
}

export default function ChatArea({ title, children }: ChatAreaProps) {
    const [message, setMessage] = useState("");

    console.log("Rendering ChatArea");

    return (
        <WorkAreaContainer>
            <SmallBox>
                <div className={styles.headerContainer}>
                    <p className={styles.icon}>C</p>
                    <div className={styles.headerText}>
                        <p className={styles.title}>{title}</p>
                        <p className={styles.timeStamp}>today</p>
                    </div>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </SmallBox>

            {children}

            <SmallBox>
                <div className={styles.textInputContainer}>
                    <input
                        placeholder="What up?"
                        type="text"
                        defaultValue={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                    <IconButton>
                        <SendIcon />
                    </IconButton>
                </div>
            </SmallBox>
        </WorkAreaContainer>
    );
}
