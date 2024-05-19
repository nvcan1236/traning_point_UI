/* eslint-disable react/prop-types */
import { IoCreateOutline } from "react-icons/io5";
import TransparentButton from "../Buttons/TransparentButton";
import { useNavigate } from "react-router-dom";

export default function AssistantActivity({ id }) {
  const navigate = useNavigate();

  return (
    <div
      className="py-3 px-6 rounded-sm border-tintBlue border flex justify-between items-center cursor-pointer hover:bg-slate-100 transition-all"
      onClick={()=>navigate(`./detail/${id}`)}
    >
      <div>Hoạt động Hiến máu nhân đạo</div>
      <TransparentButton className={"text-mainBlue text-lg font-bold "}>
        <IoCreateOutline />
      </TransparentButton>
    </div>
  );
}
