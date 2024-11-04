import { ReactNode } from "react";
import styles from "./styles.module.css";

type WorkAreaContainerProps = {
    children?: ReactNode;
};

export function WorkAreaContainer({ children }: WorkAreaContainerProps) {
    return <div className={styles.container}>{children}</div>;
}
