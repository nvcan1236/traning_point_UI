/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../../contexts/authContext";
import useFirestore from "../../hooks/useFirestore";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../configs/firebaseConfig";
import Avatar from "../Images/Avatar";

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
      fieldName: "members",
      operator: "array-contains",
      compareValue: user.id,
    };
  }, [user.id]);
  const [rooms, setRooms] = useState([]);

  /**
   * chast {
   * members,
   * lastCreatedAt,
   * lastMessage
   * }
   */

  const chatRooms = useFirestore("chats", roomCondition, "lastCreatedAt");

  const fetchMemberData = async (room) => {
    const otherMemberId = room.members.find((id) => id !== user.id);
    const otherMemberDoc = await getDoc(doc(db, "users", otherMemberId));
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
  };

  useEffect(() => {
    fetchUpdate();
  }, [chatRooms]);

  return (
    <div className="chat-list">
      <ul>
        {rooms.map((room) => (
          <li
            key={room.id}
            onClick={() => onChatSelect(room)}
            className="flex items-center py-2 px-4 hover:bg-slate-200 transition-all rounded-sm cursor-pointer"
          >
            <Avatar
              src={room.otherMember?.avatar || ""}
              alt={
                room.otherMember?.firstName + room.otherMember?.lastName || ""
              }
              radius={40}
            />
            <div className="px-3">
                <span className="font-medium text-slate-800">
                  {`${room.otherMember?.firstName} ${room.otherMember?.lastName}` ||
                    "Loading..."}
                </span>
              <p className="line-clamp-1">{room.lastMessage}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
