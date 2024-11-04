import React from "react";
import styles from "./Box.module.css";

interface LargeBoxProps {
    flex?: "row" | "column";
    children?: React.ReactNode;
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
