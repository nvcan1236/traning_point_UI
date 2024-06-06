/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export default function NavbarItem({ to, icon, text, expand, ...props }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({
          isActive,
        }) => `flex gap-2 py-2 px-4 items-center rounded-sm overflow-hidden
      ${isActive ? "bg-mainBlue text-white" : ""} `}
      
        {...props}
      >
        <span className={!expand && "text-lg flex-1 justify-center flex"}>
          {icon}
        </span>
        <span
          className={`${!expand && "opacity-0"} transition-all text-nowrap`}
        >
          {text}
        </span>
      </NavLink>
    </li>
  );
}
