import { LargeBox } from "../../../../Components/Box/LargeBox";
import { Message, User } from "../ChatArea";
import MessageClient from "../MessageClient/MessageClient";
import MessageOthers from "../MessageOthers/MessageOthers";
import styles from "./styles.module.css";

const client = {
    id: "a",
    username: "GingerSnaps",
    displayName: "Jeff",
};

interface ChatMessageFieldProps {
    users: User[];
    messages: Message[];
}

export default function ChatMessageField({
    users,
    messages,
}: ChatMessageFieldProps) {
    console.log("Rendering ChatMessageField");

    return (
        <LargeBox>
            {messages.map(message => {
                const sender = users.find(user => user.id === message.senderId);

                if (!sender) return "No user found";

                if (sender.id === client.id)
                    return (
                        <MessageClient
                            key={message.timeStamp}
                            sender={sender}
                            message={message}
                        />
                    );

                return (
                    <MessageOthers
                        key={message.timeStamp}
                        sender={sender}
                        message={message}
                    />
                );
            })}
        </LargeBox>
    );
}
