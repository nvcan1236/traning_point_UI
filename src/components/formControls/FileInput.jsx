/* eslint-disable react/prop-types */
export default function FileInput({ name, id, className, value, onChange, ...props }) {
  const handleChange = (event) => {
    const file = event.currentTarget.files[0];
    onChange(name, file);
  };
  return (
    <input
      className={
        "border px-4 py-2 rounded-sm border-slate-300 outline-none text-shadeBlue " +
        className
      }
      type='file'
      name={name}
      id={id}
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
}
