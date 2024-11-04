import React from "react";
import { AppContainer } from "../../Components/AppContainer/AppContainer";
import { SidebarContainer } from "../../Components/SidebarContainer/SidebarContainer";
import { WorkAreaContainer } from "../../Components/WorkAreaContainer/WorkAreaContainer";
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
