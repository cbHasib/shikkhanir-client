import React from "react";
import useScrollToTop from "../../../hooks/useScrollToTop";
import useTitle from "../../../hooks/useTitle";

const Instructor = () => {
  useScrollToTop();
  useTitle("Instructor");
  return (
    <div>
      <h2>Instructor Page</h2>
    </div>
  );
};

export default Instructor;
