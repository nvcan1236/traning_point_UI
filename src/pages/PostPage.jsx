// import React from 'react'

import Post from "../components/Post/Post";



export default function PostPage() {
  return (
    <div className="flex justify-between">
      <ul className=" flex flex-col gap-2 pr-10 fixed mt-5" >
        <li className="bg-tintBlue border border-mainBlue rounded-sm px-8 py-3">
          Tất cả
        </li>
        <li className=" px-8 py-3">Hoạt động mới</li>
        <li className=" px-8 py-3">Hoạt động tuần này</li>
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
