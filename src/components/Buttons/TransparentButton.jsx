/* eslint-disable react/prop-types */

export default function TransparentButton({ children, className, type, ...props }) {
  return (
    <button className={`px-4 py-2 cursor-pointer rounded-sm ${className}`} type={type} {...props}>
      {children}
    </button>
  );
}
