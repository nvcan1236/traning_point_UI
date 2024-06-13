import Heading from "../../components/layout/Heading";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import TextArea from "../../components/formControls/TextArea";
import {
  fetchGetDetailMissingReport,
  fetchUpdateStatusMissingReport,
} from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ToastMessage from "../../components/layout/ToastMessage";

export default function AssistantDetailMissing() {
  const { missingReportId } = useParams();
  const [missingReport, setMissingReport] = useState();
  
  const [toast, setToast] = useState({
    show: false,
    message: "",
  });
  const statusClassName = {
    WAITING: "bg-yellow-100 text-yellow-600",
    DENY: "bg-red-100 text-red-500",
    ACCEPT: "bg-green-200 text-green-600",
  };
  const getDetailMissingReport = async () => {
    const data = await fetchGetDetailMissingReport(missingReportId);
    setMissingReport(data);
  };
  const updateStatusMissingReport = async (status) => {
    const data = await fetchUpdateStatusMissingReport(missingReportId, {
      status,
    });
    setMissingReport(data);
    
    setToast((prev) => ({
      ...prev,
      show: Math.random(),
      message: "Cập nhật thành công",
    }));
  };
  useEffect(() => {
    getDetailMissingReport();
  }, [missingReportId]);

  

  return (
    <div className=" p-6">
      <ToastMessage show={toast.show} message={toast.message}></ToastMessage>
      <Heading className="text-lg">Chi tiết báo thiếu</Heading>
      <div className="flex mt-4 ">
        <div className="w-3/5">
          <section>
            <h3 className="font-medium text-slate-500">Sinh viên</h3>
            <div className="mt-2 pl-3">
              <div className="flex flex-col gap-2">
                <p>
                  <span className="font-medium text-mainBlue">Họ tên</span>:
                  {`${missingReport?.student.user.lastName} ${missingReport?.student.user.firstName}`}
                </p>
                <p>
                  <span className="font-medium text-mainBlue">MSSV</span>:
                  {missingReport?.student.studentId}
                </p>
                <p>
                  <span className="font-medium text-mainBlue">Khoa</span>:{" "}
                  {missingReport?.student.user.faculty.name}
                </p>
                <p>
                  <span className="font-medium text-mainBlue">Lớp</span>:
                  {missingReport?.student.className}
                </p>
                <p>
                  <span className="font-medium text-mainBlue">Email</span>:
                  {missingReport?.student.user.emaal}
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="font-medium text-slate-500">Báo thiếu</h3>
            <div className="mt-2 pl-3">
              <div className="flex flex-col gap-2">
                <p>
                  <span className="font-medium text-mainBlue">
                    Ngày yêu cầu
                  </span>
                  :{" "}
                  {new Date(missingReport?.registerDate).toLocaleDateString(
                    "vi-VN"
                  )}
                </p>
                <p>
                  <span className="font-medium text-mainBlue">Nội dung</span>
                  <TextArea
                    defaultValue={missingReport?.description}
                    className={"block mt-2 w-[500px]"}
                    readOnly
                  ></TextArea>
                </p>
                <p className="flex gap-2 items-center mt-4">
                  <span className="font-medium text-mainBlue ">Trạng thái</span>
                  <div
                    className={`text-center px-3 py-1 rounded-md w-[120px] ${
                      statusClassName[missingReport?.status]
                    }`}
                  >
                    {missingReport?.status == "WAITING"
                      ? "Chờ duyệt"
                      : missingReport?.status == "DENY"
                      ? "Từ chối"
                      : "Chấp nhận"}
                  </div>
                </p>
                <div>
                  <span className="font-medium text-mainBlue">Minh chứng</span>
                  <div className="mt-3 w-[500px] text-white ">
                    <Swiper
                      slidesPerView="auto"
                      pagination={{
                        type: "fraction",
                      }}
                      style={{
                        alignSelf: "start",
                      }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                    >
                      {missingReport &&
                        missingReport.images.length > 0 &&
                        missingReport.images.map((image) => (
                          <SwiperSlide key={image.id}>
                            <img
                              src={image.url}
                              alt="Minh chứng"
                              className="select-none max-h-[200px] mx-auto object-contain"
                            />
                          </SwiperSlide>
                        ))}
                    </Swiper>
                    {missingReport && missingReport.images.length == 0 && (
                      <p className="py-10 text-slate-500 text-center">
                        Không có minh chứng
                      </p>
                    )}
                  </div>

                  <div className="mt-6 flex items-stretch gap-4">
                    <SecondaryButton
                      className="bg-red-500 w-[120px] text-white border-none rounded-sm"
                      onClick={() => updateStatusMissingReport("DENY")}
                    >
                      Từ chối
                    </SecondaryButton>
                    <PrimaryButton
                      className="!bg-green-500 border-none rounded-sm"
                      onClick={() => updateStatusMissingReport("ACCEPT")}
                    >
                      Chấp nhận
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="flex-1">
          <div className="border border-dashed border-tintBlue rounded-sm mt-4 py-6 px-8">
            <div>
              <h3 className="font-medium text-slate-500">Hoạt động</h3>
              <h3 className="text-lg mt-2 font-medium">
                {missingReport?.mission.activity.name}
              </h3>
              <p>Khoa Công nghệ thông tin</p>
              <p>Kì 1 năm học 2023-2024</p>
              <p>
                Hoạt động{" "}
                <span className="font-semibold text-lg text-mainBlue">
                  điều {missingReport?.mission.activity.pointGroup}
                </span>
              </p>
            </div>
            <div className="mt-8">
              <h3 className="font-medium text-slate-500">Nhiệm vụ</h3>
              <h3 className="text-lg mt-2 font-medium">
                {missingReport?.mission.name}
              </h3>
              <p>+{missingReport?.mission.point} điểm</p>
              <p>Nội dung: {missingReport?.mission.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
