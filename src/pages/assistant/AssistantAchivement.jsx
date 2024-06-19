/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import Input from "../../components/formControls/Input";
import Heading from "../../components/layout/Heading";
import { useNavigate } from "react-router-dom";
import { IoSaveSharp } from "react-icons/io5";
import BackButton from "../../components/Buttons/BackButton";
import { useReadOnly } from "slate-react";
import {
  fetchGeneratePdf,
  fetchGetMissingReportByUserId,
  fetchGetResultByUserId,
  fetchGetStudentByStudentId,
} from "../../hooks/useFetch";
import ToastMessage from "../../components/layout/ToastMessage";
import { tranformPdfMisssingtData, tranformPdfResultData } from "../../utils/tranformPdfData";

export default function AssistantAchivement() {
  const [student, setStudent] = useState();
  const [tab, setTab] = useState("activity");
  const [result, setResult] = useState();
  const [missings, setMissings] = useState();
  const studentId = useRef();

  const handleGetData = async () => {
    const studentData = await fetchGetStudentByStudentId(
      studentId.current.value
    );
    if (studentData) {
      setStudent(studentData);
    } else {
      setShowToast(Math.random());
      setToastMessage("Không tìm thấy sinh viên!!");
    }
  };

  const generatePdf = async () => {
    if (tab === "activity") {
      if (!result || !student) {
        setShowToast(Math.random());
        setToastMessage("Không có dữ liệu sinh viên");
        return;
      }
      const data = await fetchGeneratePdf(
        tranformPdfResultData(
          result,
          student.user.lastName + " " + student.user.firstName,
          student.studentId
        )
      );
      const blob = new Blob([data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      window.open(url, "_blank");
    } else {
      if (!missings || !student) {
        setShowToast(Math.random());
        setToastMessage("Không có dữ liệu sinh viên");
        return;
      }
      const data = await fetchGeneratePdf(
        tranformPdfMisssingtData(
          missings,
          student.user.lastName + " " + student.user.firstName,
          student.studentId
        )
      );
      const blob = new Blob([data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      window.open(url, "_blank");
    }
  };

  const getResult = async () => {
    if (student && student.user) {
      const studentMissing = await fetchGetMissingReportByUserId(
        student.user.id,
        1
      );
      const studentActivity = await fetchGetResultByUserId(student.user.id);
      setResult(studentActivity);
      setMissings(studentMissing);
    }
  };

  useEffect(() => {
    getResult();
  }, [student?.user?.id]);

  const [showToast, setShowToast] = useState(0);
  const [toastMessage, setToastMessage] = useState();

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
              <SecondaryButton className="rounded-sm" onClick={handleGetData}>
                Tìm kiếm
              </SecondaryButton>
            </div>
            <SecondaryButton
              className="flex items-center gap-2 rounded-sm px-4"
              onClick={generatePdf}
            >
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
                      {result &&
                        result.map((data) => (
                          <ActivityRow key={data.id} data={data} />
                        ))}
                    </table>
                  )}

                  {tab == "missing" && (
                    <table className="w-full ">
                      <thead>
                        <tr className="p-3 px-4 hover:bg-slate-100 text-center font-medium text-mainBlue bg-blue-50">
                          <td className="px-6 w-1/4 text-left">Nhiệm vụ</td>
                          <td className="py-3 px-6 w-1/4">Điểm</td>
                          <td className="py-3 px-6 w-1/4">Tình trạng</td>
                          <td className="py-3 px-6 w-1/4">Chi tiết</td>
                        </tr>
                      </thead>
                      <tbody>
                        {missings &&
                          missings.map((missing, index) => (
                            <MissingRow key={missing.id} missing={missing} />
                          ))}
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

const MissingRow = ({ missing }) => {
  const navigate = useNavigate();
  return (
    <>
      <tr className="border-y transition-all ">
        <td className=" text-slate-600" colSpan={4}>
          {missing.activityName}
        </td>
      </tr>

      <tr className="hover:bg-slate-100 transition-all text-center ">
        <td className="text-slate-600 pl-8 w-1/4 text-left">
          {missing.missionName}
        </td>
        <td className="py-3 px-6 w-1/4">{missing.missionPoint}</td>
        <td className="py-3 px-6 w-1/4">{missing.status}</td>
        <td className="py-3 px-6 w-1/4">
          <SecondaryButton onClick={() => navigate(`/missing/${missing.id}`)}>
            Chi tiết
          </SecondaryButton>
        </td>
      </tr>
    </>
  );
};

const ActivityRow = ({ data }) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <>
      <tr
        className="bg-slate-100 border-y cursor-pointer"
        onClick={() => setShowDetail(!showDetail)}
      >
        <td className="p-4 px-6">
          <span className="font-medium text-mainBlue">
            Hoạt động {data.name}:
          </span>
        </td>
        <td className="py-3 px-6">{data?.listActivity?.length} hoạt động</td>
      </tr>
      {showDetail &&
        data?.listActivity.map((activity) => (
          <React.Fragment key={activity.activityId}>
            <tr className="hover:bg-slate-100 transition-all">
              <td className="py-4 pl-4" colSpan={2}>
                <span className="font-medium text-mainBlue">
                  {activity.activityName}
                </span>
              </td>
            </tr>
            {activity.missionResultDTOList &&
              activity.missionResultDTOList.map((mission) => (
                <tr
                  key={mission.missionId}
                  className="hover:bg-slate-100 transition-all text-sm"
                >
                  <td className="py-2 pl-10">
                    <span className="font-medium">{mission.missionName}</span>
                  </td>
                  <td className="py-2 px-6">+{mission.point} đ</td>
                </tr>
              ))}
          </React.Fragment>
        ))}
    </>
  );
};
