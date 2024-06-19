// src/components/Chat.js
import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { useAuth } from '../../contexts/authContext';
import useFirestore from '../../hooks/useFirestore';
import { db } from '../../configs/firebaseConfig';

const Chat = ({ selectedChat }) => {
    const {user} = useAuth();
    const [message, setMessage] = useState('');
    const messages = useFirestore(`chats/${selectedChat?.id}/messages`, null, 'createdAt');


    const sendMessage = async () => {
        if (message.trim() && selectedChat) {
            await addDoc(collection(db, 'chats', selectedChat.id, 'messages'), {
                message: message,
                createdAt: serverTimestamp(),
                sender: user.id.toString()
            });

            await updateDoc(doc(db, 'chats', selectedChat.id), {
                lastMessage: message,
                lastCreatedAt: serverTimestamp()
            });

            setMessage('');
        }
    };


    return (
        <div className="chat-container bg-gray-100 p-4 rounded shadow-lg flex-grow">
            {selectedChat ? (
                <>
                    <h2>Chat with {selectedChat.otherMember.firstName}</h2>
                    <div className="messages h-64 overflow-auto mb-4">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`message w-36 bg-white mb-2 rounded shadow ${msg.sender === user.id.toString() ? "ml-auto" : "mr-auto"}`}>
                                {msg.message}
                            </div>
                        ))}
                    </div>
                    <div className="input-group flex">
                        <input
                            className="flex-grow p-2 border rounded-l"
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type a message"
                        />
                        <button
                            className="bg-blue-500 text-white p-2 rounded-r"
                            onClick={sendMessage}
                        >
                            Send
                        </button>
                    </div>
                </>
            ) : (
                <p>Select a chat to start messaging.</p>
            )}
        </div>
    );
};

export default Chat;
