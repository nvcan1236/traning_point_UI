/* eslint-disable react/prop-types */
export default function Avatar({ radius, src, className, ...props }) {
  return (
    <img
      src={src}
      {...props}
      style={{
        width: radius,
        height: radius,
      }}
      className={`rounded-full object-cover ${className}`}
    />
  );
}
