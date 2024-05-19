/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Input from "./Input";

export default function FormGroup({
  id,
  label,
  vertical,
  className,
  message,
  touched,
  ...props
}) {
  return (
    <div className={className}>
      <div
        className={`flex gap-x-4 ${
          vertical ? "flex-col items-start" : "items-center"}`}
      >
        <label htmlFor={id} className="mb-1">
          {label}
        </label>
        {props.children}
      </div>
      <p className="text-red-500 mt-1 pl-2 text-sm">{touched && message}</p>
    </div>
  );
}
