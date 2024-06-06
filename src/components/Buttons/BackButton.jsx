
import { IoChevronBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <span className="text-shadeBlue font-semibold inline-flex items-center cursor-pointer hover:underline" onClick={() => navigate(-1)}>
      <IoChevronBackSharp /> Trở lại
    </span>
  );
}
