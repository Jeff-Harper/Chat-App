import React from "react";
import styles from "./GroupsSidebar.module.css";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import { SmallBox } from "../../../Components/Box/SmallBox";
import { LargeBox } from "../../../Components/Box/LargeBox";

export function GroupsSidebar() {
    return (
        <>
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
            </LargeBox>
        </>
    );
}
