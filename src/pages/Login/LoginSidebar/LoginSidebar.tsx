import React from "react";
import { LargeBox } from "../../../components/Box/LargeBox";
import styles from "./LoginSidebar.module.css";

export function LoginSidebar() {
  return (
    <LargeBox flex="column">
      <div className={styles.icon}></div>
    </LargeBox>
  );
}
