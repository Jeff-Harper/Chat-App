import React from "react";
import { WorkAreaContainer } from "../../../Components/WorkAreaContainer/WorkAreaContainer";
import { LargeBox } from "../../../Components/Box/LargeBox";
import { IconButton } from "@mui/material";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import styles from "./CreateGroup.module.css";

export function CreateGroup() {
    return (
        <WorkAreaContainer>
            <LargeBox>
                <div className={styles.container}>
                    <div className={styles.inputContainer}>
                        <input placeholder="Enter group name" type="text" />
                        <IconButton>
                            <DoneOutlineRoundedIcon />
                        </IconButton>
                    </div>
                </div>
            </LargeBox>
        </WorkAreaContainer>
    );
}
