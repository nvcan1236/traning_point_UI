/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";

export default function Hover({
  componentOnHover,
  children,
  position = "top",
  className,
  ...props
}) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div>{children}</div>
      {show && (
        <div className="absolute top-full z-20">
          <div className="h-3 w-full "></div>
          {componentOnHover}
        </div>
      )}
    </div>
  );
}
