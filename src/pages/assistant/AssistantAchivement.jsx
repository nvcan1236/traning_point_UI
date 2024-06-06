/* eslint-disable no-unused-vars */
import { useState } from "react";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import Input from "../../components/formControls/Input";
import Heading from "../../components/layout/Heading";
import { useNavigate } from "react-router-dom";
import { IoSaveSharp } from "react-icons/io5";
import BackButton from "../../components/Buttons/BackButton";

export default function AssistantAchivement() {
  const [student, setStudent] = useState({});
  const [tab, setTab] = useState("activity");

  return (
    <div className="p-6">
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
              <Input type="text" placeholder="MSSV" />{" "}
              <SecondaryButton className="rounded-sm">Tìm kiếm</SecondaryButton>
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
                  src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-1/244997846_1228668870941952_6805849585898205605_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHhry3pXuywMpgr4NMyb_RmAjzMkkmawnwCPMySSZrCfJ1m3VkgcAO5w1dsWqyH6nft1GQ_YY-gkrtPRFpTNz1v&_nc_ohc=F-NcWMdIuKQQ7kNvgGEBc03&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYDq21xmr7N9myLCaZK0uwvy59oXuiFkfIG_i7k8wN1UJg&oe=664E5E15"
                  alt=""
                  className="w-[120px] my-4"
                />
                <div className="flex flex-col gap-1">
                  <p>
                    <span className="font-medium text-mainBlue">Họ tên</span>:
                    Nguyễn Văn Cảnh
                  </p>
                  <p>
                    <span className="font-medium text-mainBlue">MSSV</span>:
                    2151053005
                  </p>
                  <p>
                    <span className="font-medium text-mainBlue">Khoa</span>:
                    Công nghệ thông tin
                  </p>
                  <p>
                    <span className="font-medium text-mainBlue">Lớp</span>:
                    DH21IT01
                  </p>
                  <p>
                    <span className="font-medium text-mainBlue">Email</span>:
                    2151052005canh@gmail.com
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
