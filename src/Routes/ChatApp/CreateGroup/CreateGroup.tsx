import { IconButton } from "@mui/material";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import styles from "./styles.module.css";
import { LargeBox } from "../../../Components/Box/LargeBox";
import WorkAreaContainer from "../../../Components/WorkAreaContainer/WorkAreaContainer";

export default function CreateGroups() {
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
