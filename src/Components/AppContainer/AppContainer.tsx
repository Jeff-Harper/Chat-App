import React from "react";
import styles from "./AppContainer.module.css";

type MainContainerProps = {
    children?: React.ReactNode;
};

export function AppContainer({ children }: MainContainerProps) {
    return <div className={styles.container}>{children}</div>;
}
