import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/authContext";
import Avatar from "../../Images/Avatar";

export default function AssistantHeader() {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="flex justify-end items-center py-4 gap-3 ">
      <p className="font-semibold text-mainBlue">
        Xin chào trợ lý khoa Công nghệ thông tin
      </p>
      <div
        className="flex gap-2 items-center"
        onClick={() => navigate("/profile")}
      >
        <Avatar src={user.avatar} radius={32} />
        <span>{user.username}</span>
      </div>
    </div>
  );
}
