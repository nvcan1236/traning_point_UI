import { IoChatbubblesSharp } from "react-icons/io5";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useState } from "react";
import Chat from "./Chat";
import ChatList from "./ChatList";

export default function ChatSessionForStudent() {
  const [showChat, setShowChat] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  return (
    <div>
      <div className={`${showChat ? "scale-100" : "scale-0"} fixed bottom-20 right-8 z-10 transition-all origin-bottom-right`}>
        <div
          className={` w-[880px] h-[500px] bg-slate-200   rounded-md p-4 flex gap-3`}
        >
          <div className="w-[240px] text-sm">
            <div className="font-medium text-base mb-4">Đoạn chat </div>
              <ChatList onChatSelect={(chat) => setSelectedChat(chat)}></ChatList>
          </div>
          <div className="flex-1 rounded-md overflow-hidden">
            <Chat selectedChat={selectedChat}></Chat>
          </div>
        </div>
      </div>
      <PrimaryButton
        className="text-xl float-end fixed bottom-8 right-8"
        onClick={() => setShowChat(!showChat)}
      >
        <IoChatbubblesSharp />
      </PrimaryButton>
    </div>
  );
}
