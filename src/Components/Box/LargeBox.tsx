import React from "react";
import styles from "./Box.module.css";

interface LargeBoxProps {
  flex?: "row" | "column";
  children?: React.ReactNode;
}

export function LargeBox({ flex, children }: LargeBoxProps) {
  return (
    <div className={`${styles.largeBox} ${flex ? styles["flex" + flex] : ""}`}>
      {children}
    </div>
  );
}
