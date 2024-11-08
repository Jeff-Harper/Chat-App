import React from "react";
import { AppContainer } from "../../Components/AppContainer/AppContainer";
import { SidebarContainer } from "../../Components/SidebarContainer/SidebarContainer";
import { WorkAreaContainer } from "../../Components/WorkAreaContainer/WorkAreaContainer";
import { UsersSidebar } from "./UsersSidebar/UsersSidebar";
import { UsersList } from "./UsersList/UsersList";
import styles from "./Users.module.css";

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
