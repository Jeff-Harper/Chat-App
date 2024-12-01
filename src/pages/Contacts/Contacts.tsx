import React from "react";
import { ChatSidebar } from "./ChatSidebar/ChatSidebar";
import { Outlet } from "react-router";
import { ChatArea } from "./ChatArea/ChatArea";

function Contacts() {
  return (
    <>
      <ChatSidebar />
      <ChatArea />
    </>
  );
}

export { Contacts };
