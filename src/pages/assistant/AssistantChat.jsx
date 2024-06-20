import { useState } from "react";
import Chat from "../../components/Chat/Chat";
import ChatList from "../../components/Chat/ChatList";
import Heading from "../../components/layout/Heading";
// import BackButton from "../../components/Buttons/BackButton";

const AssistantChat = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  console.log(selectedChat);
  return (
    <div className="h-[600px] bg-slate-100">
      {/* <div className="flex items-end gap-4">
        <BackButton />
      </div> */}
      <div className="flex mt-4 h-full p-3">
        <div className="w-[340px] border-r pr-2 ">
          <Heading className='mb-4 px-4'>Tin nhắn</Heading>
          <ChatList onChatSelect={(chat) => setSelectedChat(chat)} />
        </div>
        <div className="flex-1 ">
          <Chat selectedChat={selectedChat} />
        </div>
      </div>
    </div>
  );
};

export default AssistantChat;
