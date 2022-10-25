import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Common/Footer";
import Header from "../Pages/Common/Header";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
