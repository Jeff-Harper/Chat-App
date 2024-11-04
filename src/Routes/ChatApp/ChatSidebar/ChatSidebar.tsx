import { IconButton } from "@mui/material";
import styles from "./styles.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import ConversationItem from "./Components/ConversationItem/ConversationItem";
import { SmallBox } from "../../../Components/Box/SmallBox";
import { LargeBox } from "../../../Components/Box/LargeBox";
import SidebarContainer from "../../../Components/SidebarContainer/SidebarContainer";

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

export default function ChatSidebar() {
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
