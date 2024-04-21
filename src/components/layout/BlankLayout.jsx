import { Outlet } from "react-router-dom";

export default function BlankLayout() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-blue-50">
      <div className="flex gap-20 pr-24">
        <div className="w-[800px] flex flex-col justify-center items-center ">
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
        <Outlet />
      </div>
    </div>
  );
}
