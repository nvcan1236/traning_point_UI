import { useNavigate } from "react-router-dom";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import CheckBox from "../../components/formControls/CheckBox";
import Input from "../../components/formControls/Input";
import Heading from "../../components/layout/Heading";
import BackButton from "../../components/Buttons/BackButton";

export default function AssistantMissing() {
  return (
    <div className="mt-6 px-6">
      <div className="flex items-end gap-6">
        <BackButton /> <Heading>Danh sách báo thiếu</Heading>
      </div>
      <div className="mt-5">
        <div className="flex gap-10">
          <div className="flex items-stretch">
            <Input placeholder="MSSV" />
            <SecondaryButton className="rounded-sm">Tìm kiếm</SecondaryButton>
          </div>
          <CheckBox label="Hoạt động chưa duyệt" />
        </div>
        <ul className=" mt-4 border border-tintBlue rounded-lg">
          <li className="flex py-4 px-3 text-center font-semibold text-mainBlue bg-blue-50 rounded-lg">
            <span className="w-[10%]">MSSV</span>
            <span className="w-[20%]">Họ tên</span>
            <span className="w-[20%]">Hoạt động</span>
            <span className="w-[20%]">Nhiệm vụ</span>
            <span className="w-[20%]">Ngày yêu cầu</span>
            <span className="flex-1">Tình trạng</span>
          </li>
          <MissingItem />
          <MissingItem />
          <MissingItem />
          <MissingItem />
          <MissingItem />
          <MissingItem />
          <MissingItem />
          <MissingItem />
          <MissingItem />
          <MissingItem />
          <MissingItem />
          <MissingItem />
          <MissingItem />
          <MissingItem />
          <MissingItem />
          <MissingItem />
          <MissingItem />
        </ul>
      </div>
    </div>
  );
}

const MissingItem = () => {
  const navigate = useNavigate();
  return (
    <li
      className="flex py-4 px-3 text-center transition-all hover:bg-slate-50 rounded-lg cursor-pointer"
      onClick={() => navigate("./1")}
    >
      <span className="w-[10%]">2151053005</span>
      <span className="w-[20%]">Nguyễn Văn Cảnh</span>
      <span className="w-[20%]">Hiến máu tình nguyện</span>
      <span className="w-[20%]">Tham gia hiến máu</span>
      <span className="w-[20%]">20/05/2024</span>
      <span className="flex-1">
        <span className="px-3 py-1 rounded-md bg-yellow-100 text-yellow-500">
          Chờ duyệt
        </span>
      </span>
    </li>
  );
};
