/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../../contexts/authContext";
import useFirestore from "../../hooks/useFirestore";
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
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
    const otherMemberId = room.members.find((id) => id !== user.id.toString());
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

  const createNewChat = async (assistantId) => {
    const q = query(
      collection(db, "chats"),
      where("members", "array-contains", user.id.toString())
    );

    const querySnapshot = await getDocs(q);
    const existingChat = querySnapshot.docs.find((doc) => {
      const members = doc.data().members;
      return members.includes(assistantId.toString());
    });

    if (existingChat) {
      console.log("Chat already exists.");

      return;
    }

    const newChat = {
      members: [user.id.toString(), assistantId.toString()],
      lastMessage: "",
      lastCreatedAt: Timestamp.now(),
    };

    try {
      const docRef = await addDoc(collection(db, "chats"), newChat);
      console.log("New chat created with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  console.info(rooms);

  return (
    <div {...props}>
      <div className="max-h-40 overflow-y-auto">
        <ul className="divide-y divide-gray-200">
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
        </ul>
      </div>
      {user.role === "ROLE_STUDENT" && (
        <>
          <h3 className="mt-10 font-semibold text-slate-600 ">
            Danh sách trợ lý
          </h3>
          <div className="max-h-40 overflow-y-auto">
            <ul className="flex flex-col gap-4 mt-5">
              {assistants &&
                assistants.map((assistant) => (
                  <li key={assistant.id} className="flex gap-3 px-2">
                    <Avatar
                      src={assistant.avatar}
                      alt={assistant.firstName + assistant.lastName || ""}
                      radius={32}
                    />
                    <div className="px-3">
                      <p className="font-medium text-slate-800">
                        {`${assistant.firstName} ${assistant.lastName}` ||
                          "Loading..."}
                      </p>
                      <p className="text-xs">Trợ lý khoa {assistant.faculty}</p>
                      <button
                        onClick={() => createNewChat(assistant.id)}
                        className="text-blue-500 text-xs mt-1"
                      >
                        Tạo cuộc trò chuyện
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
