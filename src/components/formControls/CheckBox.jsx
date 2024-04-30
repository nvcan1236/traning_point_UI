/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoCheckmark } from "react-icons/io5";

export default function CheckBox({ label, check = false, onClick, ...props }) {
  const [checked, setChecked] = useState(check);
  return (
    <div
      className="flex gap-2 items-center"
      onClick={() => {
        onClick && onClick()
        setChecked(!checked);
      }}
      {...props}
    >
      <span
        className={`inline-block w-[18px] h-[18px] rounded-[4px] border border-mainBlue ${
          checked && "bg-tintBlue"
        }`}
      >
        {checked && <IoCheckmark className="text-mainBlue" />}
      </span>
      <label className="select-none">{label}</label>
    </div>
  );
}
