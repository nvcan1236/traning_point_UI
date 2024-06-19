import { Fragment, useState } from "react";
import Chat from "../../components/Chat/Chat";
import ChatList from "../../components/Chat/ChatList";

const AssistantChat = () => {
    const [selectedChat, setSelectedChat] = useState(null);
    console.log(selectedChat)
    return (
        <>
            <div className="grid grid-cols-2">
                <div>
                    <ChatList onChatSelect={(chat) => setSelectedChat(chat)}/>
                </div>
                <div>
                    <Chat selectedChat={selectedChat}/>
                </div>
            </div>
        </>
    )
}

export default AssistantChat;