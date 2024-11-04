import React, { useState } from "react";
import { SidebarContainer } from "../../../Components/SidebarContainer/SidebarContainer";
import { LargeBox } from "../../../Components/Box/LargeBox";
import { SmallBox } from "../../../Components/Box/SmallBox";
import { ConversationItem } from "./Components/ConversationItem/ConversationItem";
import styles from "./ChatSidebar.module.css";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";

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
        name: "test3",
        lastMessage: "Last Message #3",
        timeStamp: "today",
    },
];

export function ChatSidebar() {
    const [conversations, setConversations] = useState(testConversationsData);

    console.log("Rendering Sidebar");

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

            <LargeBox>
                <div className={styles.search}>
                    <label htmlFor="sidebar-search-field">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </label>
                    <input
                        id="sidebar-search-field"
                        role="search"
                        type="search"
                        placeholder="search"
                    />
                </div>
                <div className={styles.conversations}>
                    {conversations.map(conversation => {
                        return (
                            <ConversationItem
                                data={conversation}
                                key={conversation.name}
                            />
                        );
                    })}
                </div>
            </LargeBox>
        </SidebarContainer>
    );
}
