import { IoCreateOutline, IoReaderSharp } from "react-icons/io5";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import Heading from "../../components/layout/Heading";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";

export default function AssistantDetailActivity() {
  const navigate = useNavigate()
  return (
    <div className="px-6 mt-6">
      <div className="flex justify-between items-end">
        <div className="flex-1">
          <Heading className="text-2xl mb-3">
            Hoạt động Hiến máu nhân đạo{" "}
          </Heading>
          <p>Khoa Công nghệ thông tin</p>
          <p>Kì 1 năm học 2023-2024</p>
          <p>
            Hoạt động{" "}
            <span className="font-semibold text-lg text-mainBlue">điều 1</span>
          </p>
        </div>
        <div className="flex gap-2">
          <PrimaryButton className={"rounded-sm flex gap-2 items-center"}>
            <IoReaderSharp /> Nạp DS điểm danh
          </PrimaryButton>
          <SecondaryButton className={"rounded-sm flex gap-2 items-center"} onClick={()=>navigate('/activities/edit/1')}>
            <IoCreateOutline /> Chỉnh sửa
          </SecondaryButton>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-5">
        <div className="px-6 py-4 border border-tintBlue rounded-sm flex justify-between items-center">
          <div className="w-1/2">
            <h3>Nhiệm vụ 1</h3>
            <div className="font-medium text-lg text-slate-700">
              Tham gia hỗ trợ
            </div>
            <p className="text-sm text-slate-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              explicabo quo voluptates sequi, animi tempora est reprehenderit
              repellat aut exercitationem dicta totam quidem delectus quam
              voluptatum natus esse, possimus sapiente.
            </p>
          </div>
          <p className="w-1/4 text-center">Số điểm: 7</p>
          <span className="font-medium text-mainBlue w-1/4 text-end">
            20/4/2024 - 30/4/2024
          </span>
        </div>

        <div className="px-6 py-4 border border-tintBlue rounded-sm flex justify-between items-center">
          <div className="w-1/2">
            <h3>Nhiệm vụ 1</h3>
            <div className="font-medium text-lg text-slate-700">
              Tham gia hỗ trợ
            </div>
            <p className="text-sm text-slate-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              explicabo quo voluptates sequi, animi tempora 
            </p>
          </div>
          <p className="w-1/4 text-center">Số điểm: 7</p>
          <span className="font-medium text-mainBlue w-1/4 text-end">
            20/4/2024 - 30/4/2024
          </span>
        </div>
        <div className="px-6 py-4 border border-tintBlue rounded-sm flex justify-between items-center">
          <div className="w-1/2">
            <h3>Nhiệm vụ 1</h3>
            <div className="font-medium text-lg text-slate-700">
              Tham gia hỗ trợ
            </div>
            <p className="text-sm text-slate-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              explicabo quo voluptates sequi, animi tempora est reprehenderit
              repellat aut exercitationem dicta totam quidem del
            </p>
          </div>
          <p className="w-1/4 text-center">Số điểm: 7</p>
          <span className="font-medium text-mainBlue w-1/4 text-end">
            20/4/2024 - 30/4/2024
          </span>
        </div>
      </div>
    </div>
  );
}
