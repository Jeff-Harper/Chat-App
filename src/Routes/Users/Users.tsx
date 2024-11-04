import React from "react";
import styles from "./Groups.module.css";
import { AppContainer } from "../../Components/AppContainer/AppContainer";
import { WorkAreaContainer } from "../../Components/WorkAreaContainer/WorkAreaContainer";
import SidebarContainer from "../../Components/SidebarContainer/SidebarContainer";
import { UsersSidebar } from "./UsersSidebar/UsersSidebar";
import { UsersList } from "./UsersList/UsersList";

export function Users() {
    return (
        <AppContainer>
            <SidebarContainer>
                <UsersSidebar />
            </SidebarContainer>
            <WorkAreaContainer>
                <UsersList />
            </WorkAreaContainer>
        </AppContainer>
    );
}
