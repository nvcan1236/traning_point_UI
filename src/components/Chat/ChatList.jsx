/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../../contexts/authContext";
import useFirestore from "../../hooks/useFirestore";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../configs/firebaseConfig";
import Avatar from "../Images/Avatar";
import { fetchGetAssistant } from "../../hooks/useFetch";

/**
 * chatRoom
 * {
 * members,
 * lastMessage:
 * lastCreateAt
 * }
 */
export default function ChatList({ onChatSelect, ...props }) {
  const { user } = useAuth();
  const [assistants, setAssistants] = useState();
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

  const getAllAssistants = async () => {
    const data = await fetchGetAssistant();
    setAssistants(data);
  };

  useEffect(() => {
    getAllAssistants();
  }, []);

  return (
    <div className="chat-list" {...props}>
      <ul>
        {rooms.map((room) => (
          <li
            key={room.id}
            onClick={() => onChatSelect(room)}
            className="flex items-center p-2 hover:bg-slate-200 transition-all rounded-sm cursor-pointer"
          >
            <Avatar
              src={room.otherMember?.avatar || ""}
              alt={
                room.otherMember?.firstName + room.otherMember?.lastName || ""
              }
              radius={32}
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
        
        <h3 className="mt-10 font-semibold text-slate-600 ">Danh sách trợ lý</h3>
        <ul className="flex flex-col gap-4 mt-5">
          {assistants &&
            assistants.map((assistant) => (
              <li key={assistant.id} className="flex gap-3 px-2" >
                <Avatar
                  src={assistant.avatar}
                  alt={
                    assistant.firstName + assistant.lastName || ""
                  }
                  radius={32}
                />
                <div className="px-3">
                  <p className="font-medium text-slate-800">
                    {`${assistant.firstName} ${assistant.lastName}` ||
                      "Loading..."}
                  </p>
                  <p className="text-xs">Trợ lý khoa {assistant.faculty}</p>
                </div>
              </li>
            ))}
        </ul>
      </ul>
    </div>
  );
}
