/* eslint-disable react/prop-types */
export default function TextArea({ name, id, className, placeholder, value, ...props }) {
  return (
    <textarea
      className={
        "border px-4 py-2 rounded-sm border-slate-300 outline-none text-shadeBlue " +
        className
      }
      placeholder={placeholder}
      name={name}
      id={id}
      value={value}
      {...props}
    />
  );
}