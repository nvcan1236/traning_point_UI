/* eslint-disable react/prop-types */
import '../../style/loading.css'
export default function Loading({ radius = 24, className }) {
  return (
    <div
    style={{
      width: radius,
      height: radius
    }}
      className={`dashed-loading h-full ${className}`}
      
    ></div>
  );
}
