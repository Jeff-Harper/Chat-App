import { LargeBox } from "../../../Components/Box/LargeBox";
import WorkAreaContainer from "../../../Components/WorkAreaContainer/WorkAreaContainer";
import styles from "./styles.module.css";

export default function Welcome() {
    return (
        <WorkAreaContainer>
            <LargeBox>
                <div className={styles.container}>
                    <div className={styles.logo}></div>
                    <p>Let's chat!</p>
                </div>
            </LargeBox>
        </WorkAreaContainer>
    );
}
