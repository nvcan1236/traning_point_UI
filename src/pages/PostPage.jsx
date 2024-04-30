// import React from 'react'

import { NavLink } from "react-router-dom";
import Post from "../components/Post/Post";

export default function PostPage() {
  return (
    <div className="flex justify-between">
      <ul className=" flex flex-col gap-2 pr-10 fixed mt-5">
        <NavLink
          to="./all"
          className={({isActive})=> {
            return isActive ? "bg-tintBlue border border-mainBlue rounded-sm px-8 py-3": "px-8 py-3"
          }}
        >
          Tất cả
        </NavLink>
        <NavLink
          to="./new"
          className={({isActive})=> {
            return isActive ? "bg-tintBlue border border-mainBlue rounded-sm px-8 py-3": "px-8 py-3"
          }}
        >
          Hoạt động mới
        </NavLink>
        <NavLink
          to="./this-week"
          className={({isActive})=> {
            return isActive ? "bg-tintBlue border border-mainBlue rounded-sm px-8 py-3": "px-8 py-3"
          }}
        >
          Hoạt động tuần này
        </NavLink>
      </ul>

      <div className="ml-[260px] flex flex-col gap-10">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
