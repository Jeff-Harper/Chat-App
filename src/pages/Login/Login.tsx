import React from "react";
import { AppContainer } from "../../components/AppContainer/AppContainer";
import { SidebarContainer } from "../../components/SidebarContainer/SidebarContainer";
import { WorkAreaContainer } from "../../components/WorkAreaContainer/WorkAreaContainer";
import { LoginSidebar } from "./LoginSidebar/LoginSidebar";
import { LoginForm } from "./LoginForm/LoginForm";
import styles from "./Login.module.css";

export function Login() {
  return (
    <AppContainer>
      <SidebarContainer>
        <LoginSidebar />
      </SidebarContainer>
      <WorkAreaContainer>
        <LoginForm />
      </WorkAreaContainer>
    </AppContainer>
  );
}
