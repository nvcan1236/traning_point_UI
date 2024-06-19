import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../../contexts/authContext"
import useFirestore from "../../hooks/useFirestore"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../configs/firebaseConfig";


/**
 * chatRoom
 * {
 * members,
 * lastMessage:
 * lastCreateAt
 * }
 */
export default function ChatList({ onChatSelect }) {
    const { user } = useAuth();
    const roomCondition = useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: user.id
        }
    }, [user.id])
    const [rooms, setRooms] = useState([]);

    /**
     * chast {
     * members,
     * lastCreatedAt,
     * lastMessage
     * }
     */

    const chatRooms = useFirestore('chats', roomCondition, "lastCreatedAt");
    
    const fetchMemberData = async (room) => {
        const otherMemberId = room.members.find(id => id !== user.id);
        const otherMemberDoc = await getDoc(doc(db, 'users', otherMemberId));
        return otherMemberDoc.data();
    };

    const fetchUpdate = async () => {
        const customedRooms = await Promise.all(    
            chatRooms.map(async (room) => {
                const otherMemberData = await fetchMemberData(room);
                return { ...room, otherMember: otherMemberData };
            })
        );
        setRooms(customedRooms);
    }

    useEffect(() => {
        fetchUpdate();
    }, [chatRooms]);


    return (
        <div className="chat-list">
            <h2>Your Chats</h2>
            <ul>
                {rooms.map(room => (
                    <li key={room.id} onClick={() => onChatSelect(room)} className="flex items-center p-2 hover:bg-gray-200 cursor-pointer">
                        <img src={room.otherMember?.avatar || ''} alt={room.otherMember?.firstName + room.otherMember?.lastName || ''} className="w-10 h-10 rounded-full" />
                        <div className="ml-2">
                            <span className="font-bold">{room.otherMember?.firstName + room.otherMember?.lastName || 'Loading...'}</span>
                            <p>{room.lastMessage}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};