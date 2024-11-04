import React from "react";
import styles from "./SidebarContainer.module.css";

type SidebarContainerProps = {
    children?: React.ReactNode;
};

export function SidebarContainer({ children }: SidebarContainerProps) {
    return <div className={styles.container}>{children}</div>;
}
