/* eslint-disable react/prop-types */
// src/components/Chat.js
import { useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { useAuth } from "../../contexts/authContext";
import useFirestore from "../../hooks/useFirestore";
import { db } from "../../configs/firebaseConfig";
import Avatar from "../Images/Avatar";

const Chat = ({ selectedChat }) => {
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const messages = useFirestore(
    `chats/${selectedChat?.id}/messages`,
    null,
    "createdAt"
  );

  const sendMessage = async () => {
    if (message.trim() && selectedChat) {
      await addDoc(collection(db, "chats", selectedChat.id, "messages"), {
        message: message,
        createdAt: serverTimestamp(),
        sender: user.id.toString(),
      });

      await updateDoc(doc(db, "chats", selectedChat.id), {
        lastMessage: message,
        lastCreatedAt: serverTimestamp(),
      });

      setMessage("");
    }
  };

  return (
    <div className="chat-container rounded-sm flex-grow h-full bg-slate-100">
      {selectedChat ? (
        <div className="flex flex-col h-full">
          <h2 className="bg-tintBlue py-4 px-6 text-mainBlue font-medium flex gap-3 items-center ">
            <div className="flex gap-3 ">
              <Avatar src={selectedChat.otherMember?.avatar} radius={32} />
            </div>
            {`${selectedChat.otherMember.firstName} ${selectedChat.otherMember.lastName}`}
          </h2>
          <div className="messages h-64 overflow-auto mb-4 flex-1 p-6 flex flex-col gap-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`message max-w-[500px] w-fit py-2 px-4 rounded-md ${
                  msg.sender === user.id.toString()
                    ? "ml-auto bg-tintBlue text-mainBlue rounded-br-none"
                    : "mr-auto  border border-tintBlue rounded-bl-none"
                }`}
              >
                {msg.message}
              </div>
            ))}
          </div>
          <div className="input-group flex px-6 my-2">
            <input
              className="flex-grow p-2 border rounded-l-md border-mainBlue outline-none focus-within:border-2 h-[40px]"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here"
            />
            <button
              className="bg-mainBlue text-white py-2 px-6 rounded-r-md"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <p className="h-full flex items-center justify-center text-slate-700">Select a chat to start messaging.</p>
      )}
    </div>
  );
};

export default Chat;
