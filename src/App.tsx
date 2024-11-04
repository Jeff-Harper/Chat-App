import React from "react";
import { Chat } from "./Routes/Chat";
import { Login } from "./Routes/Login/Login";
import { Groups } from "./Routes/Groups/Groups";
import "./App.css";

function App() {
    return (
        <div className="App">
            {/* <Chat /> */}
            {/* <Login /> */}
            <Groups />
        </div>
    );
}

export default App;
