import React from "react";
import styles from "./Groups.module.css";
import { AppContainer } from "../../Components/AppContainer/AppContainer";
import { WorkAreaContainer } from "../../Components/WorkAreaContainer/WorkAreaContainer";
import SidebarContainer from "../../Components/SidebarContainer/SidebarContainer";
import { GroupsSidebar } from "./GroupsSidebar/GroupsSidebar";
import { GroupMemberList } from "./GroupMembersList/GroupMembersList";

export function Groups() {
    return (
        <AppContainer>
            <SidebarContainer>
                <GroupsSidebar />
            </SidebarContainer>
            <WorkAreaContainer>
                <GroupMemberList />
            </WorkAreaContainer>
        </AppContainer>
    );
}
