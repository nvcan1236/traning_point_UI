/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import Input from "../../components/formControls/Input";
import Heading from "../../components/layout/Heading";
import { useNavigate } from "react-router-dom";
import { IoSaveSharp } from "react-icons/io5";
import BackButton from "../../components/Buttons/BackButton";
import { useReadOnly } from "slate-react";
import { fetchGetStudentByStudentId } from "../../hooks/useFetch";
import ToastMessage from "../../components/layout/ToastMessage";

export default function AssistantAchivement() {
  const [student, setStudent] = useState();
  const [tab, setTab] = useState("activity");

  const studentId = useRef()
  const handleGetData = async () => {
    const studentData = await fetchGetStudentByStudentId(studentId.current.value)
    if(studentData) {
      setStudent(studentData)

    }
    else {
      setShowToast(Math.random())
      setToastMessage("Không tìm thấy sinh viên!!")
    }
  }

  const [showToast, setShowToast] = useState(0);
  const [toastMessage, setToastMessage] = useState("");

  return (
    <div className="p-6">
      <ToastMessage
        message={toastMessage}
        type="error"
        show={showToast}
        duration={5000}
      />
      <div className="flex flex-col min-h-[600px]">
        <div>
          <div className="flex items-end gap-6">
            <BackButton /> <Heading>Hoạt động của sinh viên</Heading>
          </div>
          <p className="text-sm text-slate-500 mt-2">
            Tra cứu các hoạt động của sinh viên (các hoạt động đã tham gia, các
            hoạt động báo thiếu, ...)
          </p>
          <div className="flex mt-4 justify-between">
            <div className="flex">
              <Input type="text" placeholder="MSSV" ref={studentId} />
              <SecondaryButton className="rounded-sm" onClick={handleGetData}>Tìm kiếm</SecondaryButton>
            </div>
            <SecondaryButton className="flex items-center gap-2 rounded-sm px-4">
              <IoSaveSharp /> Lưu báo cáo
            </SecondaryButton>
          </div>
        </div>

        {!student ? (
          <div className="flex-1 flex items-center justify-center text-slate-500 font-light text-lg">
            ( Không có thông tin để hiển thị )
          </div>
        ) : (
          <div className="flex gap-4 mt-4">
            <div className="w-[35%]">
              <Heading className="font-medium text-slate-500 text-lg">
                Thông tin sinh viên
              </Heading>
              <div className="mt-6 px-6">
                <img
                  src={student.user.avatar}
                  alt=""
                  className="w-[120px] my-4"
                />
                <div className="flex flex-col gap-1">
                  <p>
                    <span className="font-medium text-mainBlue">Họ tên: </span>
                    {`${student.user.lastName} ${student.user.firstName}`}
                  </p>
                  <p>
                    <span className="font-medium text-mainBlue">MSSV: </span>
                    {student.studentId}
                  </p>
                  <p>
                    <span className="font-medium text-mainBlue">Khoa</span>:
                    {student.user.faculty.name}
                  </p>
                  <p>
                    <span className="font-medium text-mainBlue">Lớp</span>:
                    {student.className}
                  </p>
                  <p>
                    <span className="font-medium text-mainBlue">Email</span>:
                    {student.user.email}
                  </p>

                  <div className="pt-3 border-t mt-3">
                    <p>
                      <span className="font-medium text-mainBlue">
                        Tồng điểm
                      </span>
                      : 85
                    </p>
                    <p>
                      <span className="font-medium text-mainBlue">
                        Xếp loại
                      </span>
                      : Giỏi
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <ul className="flex list-none no-underline border w-fit relative rounded-sm overflow-hidden mt-6">
                <li
                  onClick={() => setTab("activity")}
                  className="w-[200px] py-2 px-4 text-center"
                >
                  Hoạt động
                </li>
                <li
                  onClick={() => setTab("missing")}
                  className="w-[200px] py-2 px-4 text-center"
                >
                  Báo thiếu
                </li>
                <div
                  className={`w-[200px] absolute top-0 bg-tintBlue h-full transition-all -z-10 ${
                    tab === "missing" ? "left-[200px]" : "left-0"
                  }`}
                ></div>
              </ul>
              <div className="mt-8">
                <div className="border rounded-sm border-slate-500 max-h-[340px] overflow-auto">
                  {tab == "activity" && (
                    <table className="w-full ">
                      <ActivityRow />
                      <ActivityRow />
                      <ActivityRow />
                      <ActivityRow />
                    </table>
                  )}

                  {tab == "missing" && (
                    <table className="w-full ">
                      <thead>
                        <tr className="p-3 px-4 hover:bg-slate-100 text-center font-medium text-mainBlue bg-blue-50">
                          <td className="px-6 w-1/2 text-left">Nhiệm vụ</td>
                          <td className="py-3 px-6 w-1/4">Ngày yêu cầu</td>
                          <td className="py-3 px-6 w-1/4">Chi tiết</td>
                        </tr>
                      </thead>
                      <tbody>
                        <MissingRow />
                        <MissingRow />
                        <MissingRow />
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const MissingRow = () => {
  const navigate = useNavigate();
  return (
    <>
      <tr className="border-y transition-all ">
        <td className=" text-slate-600">Hoạt động hiến máu tình nguyện</td>
      </tr>

      <tr className="hover:bg-slate-100 transition-all text-center ">
        <td className="text-slate-600 px-8 w-1/2 text-left">Tham gia</td>
        <td className="py-3 px-6 w-1/4">10 hoạt động</td>
        <td className="py-3 px-6 w-1/4">
          <SecondaryButton onClick={() => navigate("/missing/1")}>
            Chi tiết
          </SecondaryButton>
        </td>
      </tr>
    </>
  );
};

const ActivityRow = () => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <>
      <tr
        className="bg-slate-100 border-y cursor-pointer"
        onClick={() => setShowDetail(!showDetail)}
      >
        <td className="p-4 px-6">
          <span className="font-medium text-mainBlue">Hoạt động điều 1:</span>
        </td>
        <td className="py-3 px-6">10 hoạt động</td>
      </tr>
      {showDetail && (
        <tr className="hover:bg-slate-100 transition-all">
          <td className="py-4 pl-10">
            <span className="font-medium text-mainBlue">
              Hoạt động mùa hè xanh
            </span>
          </td>
          <td className="py-3 px-6">+10 đ</td>
        </tr>
      )}
    </>
  );
};
