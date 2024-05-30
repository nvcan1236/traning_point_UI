/* eslint-disable react/prop-types */

import { useState } from "react";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import Avatar from "../components/Images/Avatar";
import Input from "../components/formControls/Input";
import Heading from "../components/layout/Heading";
import { useAuth } from "../contexts/authContext";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { IoPencil } from "react-icons/io5";

export default function Profile() {
  const { user } = useAuth();
  const [newAvatar, setNewAvatar] = useState();
  const [editing, setEditting] = useState(false);

  return (
    <div className="flex gap-10 my-12 w-[800px] mx-auto">
      <div className="w-1/3 flex items-center flex-col">
        <Avatar
          radius={150}
          src={newAvatar ? newAvatar : user.avatar}
          className="mt-10 border border-slate-300"
        ></Avatar>
        <input type="text" />
        <Input
          id="avatar"
          name="avatar"
          type="file"
          accept=".png, .jpg"
          className="border-none invisible hidden mt-4 "
          onChange={(e) => {
            if (e.target.files.length > 0) {
              const imageUrl = URL.createObjectURL(e.target.files[0]);
              setNewAvatar(imageUrl);
            }
          }}
        />
        <div className="flex gap-3 items-center mt-4">
          <label htmlFor="avatar" className="">
            <SecondaryButton className="pointer-events-none">
              {" "}
              Thay đổi avatar{" "}
            </SecondaryButton>
          </label>
          {newAvatar && <PrimaryButton className="py-[4px]">Lưu</PrimaryButton>}
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-3 px-24">
        <div className="text-mainBlue flex justify-between items-end ">
          <Heading>{"Thông tin hồ sơ".toUpperCase()}</Heading>
          <div
            className="flex gap-2 bg-tintBlue px-2 rounded-md items-center cursor-pointer select-none"
            onClick={() => setEditting(true)}
          >
            <IoPencil /> Sửa
          </div>
        </div>
        <div>
          Họ tên:{" "}
          <span
            contentEditable={editing}
            className="p-2 outline-1 outline-slate-300"
          >
            {user.lastName} {user.firstName}
          </span>
        </div>
        <div>
          Giới tính :{" "}
          <span
            contentEditable={editing}
            className="p-2 outline-1 outline-slate-300"
          >
            {user.gender}
          </span>
        </div>
        <div>
          Ngày sinh:{" "}
          <span
            contentEditable={editing}
            className="p-2 outline-1 outline-slate-300"
          >
            {user.dob}
          </span>
        </div>
        <div>
          Email:{" "}
          <span
            contentEditable={editing}
            className="p-2 outline-1 outline-slate-300"
          >
            {user.email}
          </span>
        </div>
        <div>
          Số diện thoại:{" "}
          <span
            contentEditable={editing}
            className="p-2 outline-1 outline-slate-300"
          >
            {user.phone}
          </span>
        </div>
        <div>
          Khoa:{" "}
          <span
            className="p-2 outline-1 outline-slate-300"
          >
            CNTT
          </span>
        </div>
        <div>
          Lớp:
          <span
            className="p-2 outline-1 outline-slate-300"
          >
            DH21IT01
          </span>
        </div>
        {
          <div
            className={`flex gap-3 mt-8 transition-all ${!editing && "hidden"}`}
          >
            <SecondaryButton onClick={() => setEditting(false)}>
              Huỷ
            </SecondaryButton>
            <PrimaryButton className="py-[4px] ">Lưu</PrimaryButton>
          </div>
        }
      </div>
    </div>
  );
}
