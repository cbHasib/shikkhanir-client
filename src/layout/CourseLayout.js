import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Common/Footer";
import Header from "../Pages/Common/Header";
import SideBar from "../Pages/Courses/SideBar";

const CourseLayout = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-4 lg:grid-cols-5">
        <div className="hidden lg:block">
          <SideBar />
        </div>
        <div className="col-span-4">
          <Outlet />
        </div>
        <div className="lg:hidden col-span-4 px-5 py-3">
          <SideBar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseLayout;
