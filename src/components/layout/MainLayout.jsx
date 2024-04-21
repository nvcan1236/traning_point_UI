/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Header />
      <div className="w-5/6 mx-auto p-8 min-h-[480px] pt-[100px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
