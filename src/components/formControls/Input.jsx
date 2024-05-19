/* eslint-disable react/prop-types */

export default function Input({ type, name, id, className, placeholder, value, ...props }) {
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
      {...props}
    />
  );
}
