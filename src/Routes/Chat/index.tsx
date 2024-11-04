import React from "react";
import { AppContainer } from "../../Components/AppContainer/AppContainer";
import { ChatMessageField } from "./ChatArea/ChatMessageField/ChatMessageField";
import { ChatArea } from "./ChatArea/ChatArea";
import { ChatSidebar } from "./ChatSidebar/ChatSidebar";
import { exampleChatA } from "../../data/testData";
import { Welcome } from "./Welcome/Welcome";
import { CreateGroup } from "./CreateGroup/CreateGroup";

export function Chat() {
    return (
        <AppContainer>
            <ChatSidebar />

            {/* <CreateGroup /> */}
            <Welcome />
            {/* <ChatArea {...exampleChatA}>
                    <ChatMessageField
                        users={exampleChatA.users}
                        messages={exampleChatA.messages}
                    />
                </ChatArea> */}
        </AppContainer>
    );
}
