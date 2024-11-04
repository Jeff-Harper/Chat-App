import { LargeBox } from "../../../Components/Box/LargeBox";
import SidebarContainer from "../../../Components/SidebarContainer/SidebarContainer";
import styles from "./styles.module.css";

export default function LoginSidebar() {
    return (
        <SidebarContainer>
            <LargeBox flex="column">
                <div className={styles.icon}></div>
            </LargeBox>
        </SidebarContainer>
    );
}
