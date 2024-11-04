import ChatArea from "./ChatArea/ChatArea";
import ChatMessageField from "./ChatArea/ChatMessageField/ChatMessageField";
import { AppContainer } from "../../Components/AppContainer/AppContainer";
import ChatSidebar from "./ChatSidebar/ChatSidebar";
import { exampleChatA } from "../../data/testData";
import Welcome from "./Welcome/Welcome";
import CreateGroup from "./CreateGroup/CreateGroup";

export default function ChatApp() {
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
