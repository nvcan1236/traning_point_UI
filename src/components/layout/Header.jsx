// import React from 'react'

import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";

export default function Header() {
  const { user, setUser } = useAuth();

  const logout = () => {
    setUser({});
    localStorage.removeItem("USER_TOKEN");
  };

  return (
    <div className="flex justify-between items-center gap-4 py-2 px-16 bg-tintBlue fixed left-0 right-0 z-10">
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
            to="/post"
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
          <NavLink
            className={({ isActive }) => {
              return isActive ? "font-semibold text-mainBlue" : "";
            }}
            to="/result"
          >
            Kết quả rèn luyện{" "}
          </NavLink>
        </li>
        {user.username ? (
          <>
            <li className="flex gap-2 items-center px-3">
              <img
                src={user.avatar}
                alt=""
                className="w-[36px] h-[36px] rounded-full object-cover p-[1px] border-2 border-mainBlue"
              />
              <span className="text-base font-medium text-mainBlue">
                {user.username}
              </span>
            </li>
            <li>
              <SecondaryButton onClick={logout}>Đăng xuất</SecondaryButton>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/login">
              <PrimaryButton>Đăng nhập</PrimaryButton>
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}
