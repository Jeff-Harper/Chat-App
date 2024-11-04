// Example Users
const Jeffrey = {
    id: "a",
    username: "GingerSnaps",
    displayName: "Jeff",
};
const Rachael = {
    id: "b",
    username: "Mah_Waif",
    displayName: "Rachael",
};
const Mochi = {
    id: "c",
    username: "Demon_Baby_420",
    displayName: "Mochi",
};

// Example Chats
export const exampleChatA = {
    chatId: "1234",
    title: "My First Chat!",
    iconURL: "",
    users: [Jeffrey, Rachael, Mochi],
    messages: [
        {
            timeStamp: new Date(8.64e3 + 1).getMilliseconds(),
            text: "Hello world!",
            senderId: Jeffrey.id,
        },
        {
            timeStamp: new Date(8.64e3 + 2).getMilliseconds(),
            text: "new phone, who dis?",
            senderId: Rachael.id,
        },
        {
            timeStamp: new Date(8.64e3 + 3).getMilliseconds(),
            text: "lkj;;;;;;;;;;;;allllllkkkmmmmmmnmmmmmmmmjj8............kmk,....lk..",
            senderId: Mochi.id,
        },
        {
            timeStamp: new Date(8.64e3 + 4).getMilliseconds(),
            text: "Rachael, its me! Your loving husband :)",
            senderId: Jeffrey.id,
        },
        {
            timeStamp: new Date(8.64e3 + 5).getMilliseconds(),
            text: "Who?",
            senderId: Rachael.id,
        },
        {
            timeStamp: new Date(8.64e3 + 6).getMilliseconds(),
            text: ":,(",
            senderId: Jeffrey.id,
        },
        {
            timeStamp: new Date(8.64e3 + 7).getMilliseconds(),
            text: "ayurf653f6uh;kklkkkkllo099---=0iiiii98",
            senderId: Mochi.id,
        },
        {
            timeStamp: new Date(8.64e3 + 8).getMilliseconds(),
            text: "Wait, when did Mochi learn to use a computer?",
            senderId: Jeffrey.id,
        },
        {
            timeStamp: new Date(8.64e3 + 9).getMilliseconds(),
            text: "There's a lot about me you don't know...",
            senderId: Mochi.id,
        },
    ],
};
