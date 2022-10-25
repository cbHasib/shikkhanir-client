import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Common/Footer";
import Header from "../Pages/Common/Header";
import SideBar from "../Pages/Courses/SideBar";

const CourseLayout = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-5">
        <div className="">
          <SideBar />
        </div>
        <div className="col-span-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseLayout;
