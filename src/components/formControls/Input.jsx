/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { forwardRef } from "react";

const Input = forwardRef( ({ type, name, id, className, placeholder, value, ...props }, ref) => {
  return (
    <input
      className={
        "border px-4 py-2 rounded-sm border-slate-300 outline-none text-shadeBlue " +
        className
      }
      placeholder={placeholder}
      type={type}
      name={name}
      id={id}
      value={value}
      ref={ref}
      {...props}
    />
  )
})

export default Input;
