import { ReactNode } from "react";
import styles from "./styles.module.css";

interface SmallBoxProps {
    children?: ReactNode;
}

export function SmallBox({ children }: SmallBoxProps) {
    return <div className={styles.smallBox}>{children}</div>;
}
