import { ReactNode } from "react";
import styles from "./styles.module.css";

type MainContainerProps = {
    children?: ReactNode;
};

export function AppContainer({ children }: MainContainerProps) {
    return <div className={styles.container}>{children}</div>;
}
