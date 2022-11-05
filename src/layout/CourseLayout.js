import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";
import Footer from "../Pages/Common/Footer";
import Header from "../Pages/Common/Header";
import LoadingSpinner from "../Pages/Common/LoadingSpinner";
import SideBar from "../Pages/Courses/SideBar/SideBar";

const CourseLayout = () => {
  const { loading } = useContext(AuthContext);
  const [cat_id, setCat_id] = useState(0);

  return (
    <div>
      <Header />
      <div className="grid grid-cols-4 lg:grid-cols-5">
        <div className="hidden lg:block">
          <SideBar setCat_id={setCat_id} cat_id={cat_id} />
        </div>
        <div className="col-span-4 bg-base-200">
          {loading ? <LoadingSpinner /> : <Outlet context={[cat_id]} />}
        </div>
        <div className="lg:hidden col-span-4 px-5 py-3">
          <SideBar setCat_id={setCat_id} cat_id={cat_id} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseLayout;
