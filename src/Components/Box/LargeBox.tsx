import { ReactNode } from "react";
import styles from "./styles.module.css";

interface LargeBoxProps {
    flex?: "row" | "column";
    children?: ReactNode;
}

export function LargeBox({ flex, children }: LargeBoxProps) {
    return (
        <div className={styles.largeBox}>
            {!flex ? (
                <div className={styles.innerContainer}>{children}</div>
            ) : flex === "row" ? (
                <div className={styles.innerContainerFlexRow}>{children}</div>
            ) : (
                <div className={styles.innerContainerFlexColumn}>
                    {children}
                </div>
            )}
        </div>
    );
}
