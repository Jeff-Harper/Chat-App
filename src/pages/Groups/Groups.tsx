import React from "react";
import { AppContainer } from "../../components/AppContainer/AppContainer";
import { SidebarContainer } from "../../components/SidebarContainer/SidebarContainer";
import { WorkAreaContainer } from "../../components/WorkAreaContainer/WorkAreaContainer";
import { GroupsSidebar } from "./GroupsSidebar/GroupsSidebar";
import { GroupMemberList } from "./GroupMembersList/GroupMembersList";
import styles from "./Groups.module.css";

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
