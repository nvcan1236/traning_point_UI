import {
  IoArrowBackSharp,
  IoArrowForwardSharp,
  IoBarChartSharp,
  IoBarbellSharp,
  IoHomeSharp,
  IoNewspaperSharp,
  IoReaderSharp,
  IoSchoolSharp,
} from "react-icons/io5";
import NavbarItem from "./NavbarItem";
import { useState } from "react";

export default function AssistantNavbar() {
  const [expand, setExpand] = useState(true);

  return (
    <div
      className={` relative transition-all top-0 ${expand ? "w-[280px]" : "w-[80px]"}`}
    >
      <ul className={`bg-tintBlue text-mainBlue flex flex-col gap-2 h-screen px-4 py-8 fixed transition-all ${expand ? "w-[280px]" : "w-[80px]"}`}>
        <li className="mb-10">
          {expand ? (
            <img src="/logo_ngang.png" alt="" className="h-8 px-2" />
          ) : (
            <img src="/logo.png" alt="" className="h-8" />
          )}

          {
            <div
              className={`text-nowrap transition-all ${!expand && "opacity-0"}`}
            >
              <p className="mt-6 text-slate-800 font-semibold pl-5 ">
                Hệ thống điểm rèn luyện
              </p>
              <p className=" text-slate-600 font-light text-sm pl-5">
                Trang dành cho trợ lý Khoa{" "}
              </p>
            </div>
          }
        </li>
        <NavbarItem
          to="/"
          text="Trang chủ"
          icon={<IoHomeSharp />}
          expand={expand}
        />
        <NavbarItem
          to="/activities"
          text="Hoạt động"
          icon={<IoBarbellSharp />}
          expand={expand}
        />
        <NavbarItem
          to="/post"
          text="Bài đăng"
          icon={<IoNewspaperSharp />}
          expand={expand}
        />
        <NavbarItem
          to="/achivement"
          text="Thành tích sinh viên"
          icon={<IoSchoolSharp />}
          expand={expand}
        />
        <NavbarItem
          to="/missing"
          text="Báo thiếu"
          icon={<IoReaderSharp />}
          expand={expand}
        />
        <NavbarItem
          to="/stats"
          text="Thống kê"
          icon={<IoBarChartSharp />}
          expand={expand}
        />
        <span
          className="absolute bottom-6 right-6 border border-mainBlue rounded-sm p-2"
          onClick={() => setExpand(!expand)}
        >
          {expand ? <IoArrowBackSharp /> : <IoArrowForwardSharp />}
        </span>
      </ul>
    </div>
  );
}
