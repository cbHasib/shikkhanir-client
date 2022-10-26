import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";
import Footer from "../Pages/Common/Footer";
import Header from "../Pages/Common/Header";
import LoadingSpinner from "../Pages/Common/LoadingSpinner";

const Main = () => {
  const { loading } = useContext(AuthContext);
  return (
    <>
      <Header />
      {loading ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
};

export default Main;
