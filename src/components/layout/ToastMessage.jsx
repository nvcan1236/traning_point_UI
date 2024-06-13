/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import {
  IoCheckmarkCircleSharp,
  IoCloseCircleSharp,
  IoCloseSharp,
  IoInformationCircleSharp,
  IoWarningSharp,
} from "react-icons/io5";

export default function ToastMessage({
  message,
  duration = 3000,
  show,
  type = "success",
}) {
  const [display, setDisplay] = useState(show);
  const [toastType, setToastType] = useState(type);
  const typeData = {
    success: {
      label: "Thành công",
      icon: <IoCheckmarkCircleSharp />,
      typeClassName: "bg-green-50 text-green-600 border-green-500 shadow-green-200",
    },
    info: {
      label: "Thông tin",
      icon: <IoInformationCircleSharp />,
      typeClassName: "bg-blue-100 text-blue-600 border-blue-500 shadow-blue-200",
    },
    warning: {
      label: "Cảnh báo",
      icon: <IoWarningSharp />,
      typeClassName: "bg-yellow-50 text-yellow-600 border-yellow-500 shadow-yellow-200",
    },
    error: {
      label: "Lỗi",
      icon: <IoCloseCircleSharp />,
      typeClassName: "bg-red-50 text-red-600 border-red-500 shadow-red-200",
    },
  };

  useEffect(() => {
    show && setDisplay(true);
    setToastType(type);
    setTimeout(() => setDisplay(false), duration);
  }, [show]);

  
  return (
    <div
      className={`fixed transition-all shadow-md duration-1000 flex gap-4 items-center w-[320px] rounded-sm border px-4 py-3 ${
        typeData[toastType]?.typeClassName
      } ${display ? "right-8 opacity-100" : "-right-full ml-[40px] opacity-0"}`}
    >
      <span className="text-2xl">{typeData[toastType]?.icon}</span>
      <div className="flex-1">
        <p className="font-medium text-sm"> {typeData[toastType]?.label} </p>{" "}
        <p className="text-xs">{message || "Toast Message"}</p>
      </div>
      <span className="text-slate-500" onClick={() => setDisplay(false)}>
        <IoCloseSharp />
      </span>
    </div>
  );
}
