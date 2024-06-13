/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import CheckBox from "../../components/formControls/CheckBox";
import Input from "../../components/formControls/Input";
import Heading from "../../components/layout/Heading";
import BackButton from "../../components/Buttons/BackButton";
import { useEffect, useRef, useState } from "react";
import { fetchGetMissingReportByFaculty } from "../../hooks/useFetch";
import { useAuth } from "../../contexts/authContext";
import Loading from "../../components/layout/Loading";

export default function AssistantMissing() {
  const [missingReport, setMissingReport] = useState();
  const [originalMissingReport, setOriginalMissingReport] = useState();
  const searchRef = useRef();
  const [filter, setFilter] = useState({
    studentId: "",
    notChecked: false,
  });
  const getMissingReportByFaculty = async (facultyId) => {
    const data = await fetchGetMissingReportByFaculty(facultyId);
    setMissingReport(data);
    setOriginalMissingReport(data);
  };
  const { user } = useAuth();

  useEffect(() => {
    getMissingReportByFaculty(user?.faculty.id);
  }, []);

  useEffect(() => {
    (!filter.studentId || !filter.notChecked) &&
      setMissingReport(originalMissingReport);
    filter.studentId &&
      setMissingReport(
        missingReport.filter((missing) =>
          missing.studentId.startsWith(filter.studentId)
        )
      );

    filter.notChecked &&
      setMissingReport((prev) =>
        prev.filter((missing) => missing.status === "WAITING")
      );
  }, [filter.notChecked, filter.studentId]);
  return (
    <div className="mt-6 px-6">
      <div className="flex items-end gap-6">
        <BackButton /> <Heading>Danh sách báo thiếu</Heading>
      </div>
      <div className="mt-5">
        <div className="flex gap-10">
          <div className="flex items-stretch">
            <Input placeholder="MSSV" ref={searchRef} />
            <SecondaryButton
              className="rounded-sm"
              onClick={() =>
                setFilter({ ...filter, studentId: searchRef.current.value })
              }
            >
              Tìm kiếm
            </SecondaryButton>
          </div>
          <CheckBox
            label="Hoạt động chưa duyệt"
            onClick={() =>
              setFilter({ ...filter, notChecked: !filter.notChecked })
            }
            check={filter.notChecked}
          />
        </div>
        <ul className=" mt-4 border border-tintBlue rounded-lg">
          <li className="flex py-4 px-3 pl-2 font-semibold text-mainBlue bg-blue-50 rounded-lg text-left">
            <span className="pl-2 w-[10%]">MSSV</span>
            <span className="pl-2 w-[20%]">Họ tên</span>
            <span className="pl-2 w-[20%]">Hoạt động</span>
            <span className="pl-2 w-[20%]">Nhiệm vụ</span>
            <span className="pl-2 w-[20%]">Ngày yêu cầu</span>
            <span className="text-center flex-1">Tình trạng</span>
          </li>

          {missingReport &&
            missingReport.length > 0 &&
            missingReport.map((missing) => (
              <MissingItem key={missing.id} missing={missing} />
            ))}
          {missingReport && missingReport.length === 0 && (
            <p className="text-slate-500 py-20 text-center">
              Không có báo cáo báo thiếu
            </p>
          )}
          {!missingReport && <Loading radius={40} />}
        </ul>
      </div>
    </div>
  );
}

const MissingItem = ({ missing }) => {
  const navigate = useNavigate();
  const statusClassName = {
    WAITING: "bg-yellow-100 text-yellow-600",
    DENY: "bg-red-100 text-red-500",
    ACCEPT: "bg-green-200 text-green-600",
  };
  return (
    <li
      className="flex py-4 px-3 transition-all hover:bg-slate-50 rounded-lg cursor-pointer text-left"
      onClick={() => navigate(`./${missing.id}`)}
    >
      <span className="w-[10%] line-clamp-1 pl-2">{missing.studentId}</span>
      <span className="w-[20%]  line-clamp-1 pl-2">{`${missing.lastName} ${missing.firstName}`}</span>
      <span className="w-[20%]  line-clamp-1 pl-2">{missing.activityName}</span>
      <span className="w-[20%] line-clamp-1 pl-2">{missing.missionName}</span>
      <span className="w-[20%] line-clamp-1 pl-2">
        {new Date(missing.createdDate).toLocaleDateString("vi-VN")}
      </span>
      <span className="flex-1">
        <div
          className={`text-center px-3 py-1 rounded-md w-[120px] ${
            statusClassName[missing.status]
          }`}
        >
          {missing.status == "WAITING"
            ? "Chờ duyệt"
            : missing.status == "DENY"
            ? "Từ chối"
            : "Chấp nhận"}
        </div>
      </span>
    </li>
  );
};
