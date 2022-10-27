import React from "react";
import { FcApproval } from "react-icons/fc";

const CourseFeatures = ({ feature }) => {
  return (
    <p className="flex items-center gap-2 leading-5 my-2">
      <span>
        <FcApproval className="w-5 h-5" />{" "}
      </span>
      {feature}
    </p>
  );
};

export default CourseFeatures;
