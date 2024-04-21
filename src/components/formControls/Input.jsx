/* eslint-disable react/prop-types */

export default function Input({ type, name, id, className, ...props }) {
  return (
    <input
      className={
        "border px-4 py-2 rounded-sm border-mainBlue outline-none text-shadeBlue " +
        className
      }
      type={type}
      name={name}
      id={id}
      {...props}
    />
  );
}
