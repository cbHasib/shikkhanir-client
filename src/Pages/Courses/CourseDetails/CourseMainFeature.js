import React from "react";
import { FcApproval } from "react-icons/fc";

const CourseMainFeature = ({ feature }) => {
  return (
    <span className="flex items-center gap-2 text-lg justify-start">
      <FcApproval className="w-5 h-5" /> {feature}
    </span>
  );
};

export default CourseMainFeature;
