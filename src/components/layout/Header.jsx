// import React from 'react'

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <ul>
      <li><NavLink to="/">Trang chủ </NavLink></li>
      <li><NavLink to="/post">Bài đăng </NavLink></li>
      <li><NavLink to="/activities">Hoạt động </NavLink></li>
      <li><NavLink to="/result">Kết quả rèn luyện </NavLink></li>
    </ul>
  )
}
