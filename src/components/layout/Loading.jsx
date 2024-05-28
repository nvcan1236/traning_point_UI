/* eslint-disable react/prop-types */
export default function Loading({ radius = 24, className }) {
  return (
    <div
    style={{
      width: radius,
      height: radius
    }}
      className={`border-2  border-t-0 rounded-full border-tintBlue animate-spin mx-auto ${className}`}
    ></div>
  );
}
