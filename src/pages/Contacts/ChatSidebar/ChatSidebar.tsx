import React, { useState } from "react";
import { SidebarContainer } from "../../../components/SidebarContainer/SidebarContainer";
import { LargeBox } from "../../../components/Box/LargeBox";
import { SmallBox } from "../../../components/Box/SmallBox";
import { ConversationListItem } from "./Components/ConversationItem/ConversationItem";
import { TextInput } from "../../../components/TextInput/TextInput";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import styles from "./ChatSidebar.module.css";

const testConversationsData = [
  {
    name: "test1",
    lastMessage: "Last Message #1",
    timeStamp: "today",
  },
  {
    name: "test2",
    lastMessage: "Last Message #2",
    timeStamp: "today",
  },
  {
    name: "test4",
    lastMessage: "Last Message #4",
    timeStamp: "today",
  },
  {
    name: "test5",
    lastMessage: "Last Message #5",
    timeStamp: "today",
  },
  {
    name: "test6",
    lastMessage: "Last Message #6",
    timeStamp: "today",
  },
  {
    name: "test7",
    lastMessage: "Last Message #7",
    timeStamp: "today",
  },
  {
    name: "test8",
    lastMessage: "Last Message #8",
    timeStamp: "today",
  },
  {
    name: "test9",
    lastMessage: "Last Message #9",
    timeStamp: "today",
  },
];

export function ChatSidebar() {
  const [conversations, setConversations] = useState(testConversationsData);

  return (
    <SidebarContainer>
      <SmallBox>
        <div className={styles.header}>
          <div>
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <PersonAddIcon />
            </IconButton>
            <IconButton>
              <GroupAddIcon />
            </IconButton>
            <IconButton>
              <AddCircleIcon />
            </IconButton>
            <IconButton>
              <NightlightIcon />
            </IconButton>
          </div>
        </div>
      </SmallBox>

      <LargeBox flex="column">
        <div>
          <div className={styles.header}>
            <h2>Conversations</h2>
            <IconButton title="New conversation">
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <form className={styles.search} role="search">
            <TextInput
              variant="filled"
              width="wide"
              id="q"
              name="q"
              aria-label="Search conversations"
              type="search"
              placeholder="Search"
            />
            <div aria-hidden hidden={true}>
              <AutorenewIcon />
            </div>
          </form>
        </div>

        <nav className={styles.conversations}>
          <ul>
            {conversations.map((conversation) => {
              return (
                <ConversationListItem
                  data={conversation}
                  key={conversation.name}
                />
              );
            })}
          </ul>
        </nav>
      </LargeBox>
    </SidebarContainer>
  );
}
