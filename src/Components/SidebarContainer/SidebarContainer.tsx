import { ReactNode } from "react";
import styles from "./styles.module.css";

type SidebarContainerProps = {
    children?: ReactNode;
};

export default function SidebarContainer({ children }: SidebarContainerProps) {
    return <div className={styles.container}>{children}</div>;
}
