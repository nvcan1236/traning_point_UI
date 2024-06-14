/* eslint-disable react/prop-types */
import { IoWarningOutline } from "react-icons/io5";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";

export default function WarningModal({
  message = "message",
  label = "Thông báo",
  cancelText = "Huỷ",
  submitText = "Xác nhận",
  show = false,
  onCancel,
  onSubmit,
}) {
  return show ? (
    <div className="fixed inset-0 z-20 flex items-center bg-slate-500 bg-opacity-20 justify-center shadow-sm">
      <div className="w-[500px] px-10 py-6 bg-white border rounded-md scale-1">
        <div className="text-mainBlue font-semibold text-lg">{label}</div>
        <div className="bg-yellow-100 text-yellow-400 rounded-full h-[120px] w-[120px] mx-auto flex items-center justify-center text-5xl my-6">
          <IoWarningOutline />
        </div>
        <p className="text-center my-4">{message}</p>
        <div className="flex gap-3 items-center justify-end mt-10">
          <SecondaryButton className={"px-4"} onClick={onCancel}>
            {cancelText}
          </SecondaryButton>
          <PrimaryButton className={"!py-1"} onClick={onSubmit}>
            {submitText}
          </PrimaryButton>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
