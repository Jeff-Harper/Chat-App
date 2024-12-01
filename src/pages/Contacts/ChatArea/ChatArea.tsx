import React, { useState } from "react";
import { WorkAreaContainer } from "../../../components/WorkAreaContainer/WorkAreaContainer";
import { SmallBox } from "../../../components/Box/SmallBox";
import styles from "./ChatArea.module.css";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

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
  children?: React.ReactNode;
  chatId: string;
  title: string;
  iconURL: string;
  users: User[];
  messages: Message[];
}

export function ChatArea() {
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
            onChange={(e) => setMessage(e.target.value)}
          />
          <IconButton>
            <SendIcon />
          </IconButton>
        </div>
      </SmallBox>
    </WorkAreaContainer>
  );
}
