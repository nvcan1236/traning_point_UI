/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useSearchParams } from "react-router-dom";
import Profile from "../../pages/Profile";
import ChatSessionForStudent from "../Chat/ChatSessionForStudent";

export default function MainLayout() {

  return (
    <>
      <Header />
      <div className="flex gap-10 pt-[100px]">
        <div className={` lg:w-5/6 w-full  mx-auto px-8 min-h-[480px] `}>
          <Outlet />
        </div>
        <ChatSessionForStudent />
      </div>
      <Footer />
      
    </>
  );
}
