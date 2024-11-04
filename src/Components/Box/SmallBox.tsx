import React from "react";
import styles from "./Box.module.css";

interface SmallBoxProps {
    children?: React.ReactNode;
}

export function SmallBox({ children }: SmallBoxProps) {
    return <div className={styles.smallBox}>{children}</div>;
}
