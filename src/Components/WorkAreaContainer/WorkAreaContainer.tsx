import React from "react";
import styles from "./WorkAreaContainer.module.css";

type WorkAreaContainerProps = {
    children?: React.ReactNode;
};

export function WorkAreaContainer({ children }: WorkAreaContainerProps) {
    return <div className={styles.container}>{children}</div>;
}
