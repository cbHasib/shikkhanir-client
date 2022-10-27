import React from "react";
import { IconContext } from "react-icons";
import { FiVideo } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const SideBarCategory = ({ category }) => {
  const { cat_id, cat_name, cat_slug } = category;
  return (
    <li>
      <NavLink
        rel="noopener noreferrer"
        to={`/courses/${cat_id}/${cat_slug}`}
        className={({ isActive }) =>
          isActive
            ? "flex items-center p-2 space-x-3 my-1 rounded-md shadow-md bg-primary text-white"
            : "flex items-center p-2 space-x-3 rounded-md  hover:bg-primary hover:text-white duration-300 bg-base-100  my-1"
        }
      >
        <IconContext.Provider value={{ size: "1.4rem" }}>
          <div>
            <FiVideo />
          </div>
        </IconContext.Provider>

        <span>{cat_name}</span>
      </NavLink>
    </li>
  );
};

export default SideBarCategory;
