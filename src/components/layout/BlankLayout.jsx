import { Outlet } from "react-router-dom";

export default function BlankLayout() {
  return (
    <div className="w-full min-h-screen flex gap-24 items-center justify-center bg-blue-50 pl-20 pr-24">
        <div className="w-2/3 flex flex-col justify-center items-center ">
          <img
            src="https://cdn.haitrieu.com/wp-content/uploads/2021/09/Logo-DH-Mo-TPHCM-OU.png"
            alt=""
            className="h-[260px] opacity-90 "
          />
          <h3 className="text-center mt-12 text-lg font-semibold">
            HỆ THỐNG QUẢN LÝ ĐIỂM RÈN LUYỆN SINH VIÊN <br /> ĐẠI HỌC MỞ THÀNH
            PHỐ HỒ CHÍ MINH
          </h3>
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
    </div>
  );
}
