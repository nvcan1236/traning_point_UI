/* eslint-disable react/prop-types */
// import React from 'react'

import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import PrimaryButton from "../Buttons/PrimaryButton";
import SelectBox from "../formControls/SelectBox";
import Hover from "./Hover";
import {
  IoBarChartOutline,
  IoDocumentTextOutline,
  IoExitOutline,
  IoPersonOutline,
} from "react-icons/io5";

export default function Header() {
  const { user, setUser } = useAuth();

  const logout = () => {
    setUser({});
    localStorage.removeItem("USER_TOKEN");
  };

  return (
    <div className="flex justify-between items-center gap-4 py-2 px-16 bg-tintBlue fixed left-0 right-0 z-20">
      <div className="brand flex gap-4 items-center">
        <img
          src="https://cdn.haitrieu.com/wp-content/uploads/2021/09/Logo-DH-Mo-TPHCM-OU.png"
          alt="logo ou"
          className="h-10 object-cover"
        />
        <span className="font-bold text-mainBlue">
          HCMCOU - Traning point manager
        </span>
      </div>

      <ul className="flex justify-end items-center gap-4 py-4 bg-tintBlue">
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "font-semibold text-mainBlue" : "";
            }}
            to="/"
          >
            Trang chủ{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "font-semibold text-mainBlue" : "";
            }}
            to="./post/all"
          >
            Bài đăng{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "font-semibold text-mainBlue" : "";
            }}
            to="/activities"
          >
            Hoạt động{" "}
          </NavLink>
        </li>
        <li>
          <Hover
            componentOnHover={
              <div className="flex flex-col w-[220px] -ml-2 bg-white rounded-md shadow-md p-2">
                <NavLink
                  className="px-4 py-1 hover:bg-slate-100 flex items-center gap-2"
                  to="/result/overall"
                >
                  <IoBarChartOutline /> Kết quả tổng quan
                </NavLink>
                <NavLink
                  className="px-4 py-1 hover:bg-slate-100 flex items-center gap-2"
                  to="/result/detail"
                >
                  <IoDocumentTextOutline /> Kết quả chi tiết
                </NavLink>
              </div>
            }
          >
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? "font-semibold text-mainBlue pointer-events-none"
                  : "pointer-events-none";
              }}
              to="/result"
            >
              Kết quả rèn luyện
            </NavLink>
          </Hover>
        </li>

        {user.username ? (
          <>
            <li>
              <Hover
                componentOnHover={
                  <ul className="bg-white shadow-md w-[160px] rounded-md p-2 flex flex-col gap-px ml-4">
                    <NavLink
                      to="/profile"
                      className="px-4 py-1 cursor-pointer hover:bg-slate-100 transition-all flex items-center gap-2"
                    >
                      <IoPersonOutline /> Hồ sơ
                    </NavLink>
                    <li
                      onClick={logout}
                      className="px-4 py-1 cursor-pointer hover:bg-slate-100 transition-all flex items-center gap-2"
                    >
                      <IoExitOutline />
                      Đăng xuất
                    </li>
                  </ul>
                }
              >
                <NavLink to="/profile" className="flex gap-2 items-center px-2">
                  <img
                    src={user.avatar}
                    alt=""
                    className="w-[36px] h-[36px] rounded-full object-cover p-[1px] border-2 border-mainBlue"
                  />
                  <span className="text-base font-medium text-mainBlue">
                    {user.username}
                  </span>
                </NavLink>
              </Hover>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/login">
              <PrimaryButton>Đăng nhập</PrimaryButton>
            </NavLink>
          </li>
        )}
        <li>
          <SelectBox
            className="rounded-lg py-1 text-sm w-[140px]"
            options={[
              { id: 1, name: "HK1 - 2024" },
              { id: 2, name: "HK2 - 2024" },
            ]}
          />
        </li>
      </ul>
    </div>
  );
}
