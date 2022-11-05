import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiUser, FiUserPlus, FiLogOut } from "react-icons/fi";
import { IconContext } from "react-icons";
import avatar from "../../../assets/images/user.png";
import { AuthContext } from "../../../Contexts/UserContext";
import SideBarCategory from "./SideBarCategory";

const SideBar = ({ setCat_id, cat_id }) => {
  const { user, logout } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path, { state: { from: location } });
  };

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_serverURL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data.data));
  }, []);

  return (
    <div className="h-full p-3 space-y-2 w-full bg-white dark:bg-base-300 dark:text-gray-100 ">
      <div className="sticky top-20">
        {user && (
          <div className="flex items-center p-2 space-x-4 border border-base-300 shadow rounded-md bg-base-200 dark:bg-base-100">
            <img
              src={user?.photoURL ? user?.photoURL : avatar}
              alt={user?.displayName ? user?.displayName : "User Photo"}
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-full dark:bg-gray-500"
            />
            <div>
              <h2 className="text-lg font-semibold">
                {user?.displayName ? user?.displayName : "username"}
              </h2>
              <span className="flex items-center space-x-1">
                <Link
                  to="/profile"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  View profile
                </Link>
              </span>
            </div>
          </div>
        )}
        <h2 className="mt-5 text-lg font-medium text-purple-600">
          Course Category
        </h2>
        <div className="divide-y dark:divide-gray-700">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {categories.map((category) => (
              <SideBarCategory
                key={category._id}
                category={category}
                setCat_id={setCat_id}
                cat_id={cat_id}
              />
            ))}
          </ul>

          {user ? (
            <>
              <ul className="pt-4 pb-2 space-y-1 text-sm">
                <li>
                  <Link
                    rel="noopener noreferrer"
                    to="/profile"
                    className="flex items-center p-2 space-x-3 rounded-md  hover:bg-success hover:text-white duration-300 bg-base-100  my-1"
                  >
                    <IconContext.Provider value={{ size: "1.25rem" }}>
                      <div>
                        <FiUser />
                      </div>
                    </IconContext.Provider>
                    <span>Profile</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={handleLogout}
                    rel="noopener noreferrer"
                    to="/courses"
                    className="flex items-center p-2 space-x-3 rounded-md  hover:bg-success hover:text-white duration-300 bg-base-100  my-1"
                  >
                    <IconContext.Provider value={{ size: "1.25rem" }}>
                      <div>
                        <FiLogOut />
                      </div>
                    </IconContext.Provider>
                    <span>Logout</span>
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="pt-4 pb-2 space-y-1 text-sm">
                <li>
                  <button
                    rel="noopener noreferrer"
                    onClick={() => handleNavigate("/login")}
                    className="w-full flex items-center p-2 space-x-3 rounded-md  hover:bg-success hover:text-white duration-300 bg-base-100  my-1"
                  >
                    <IconContext.Provider value={{ size: "1.25rem" }}>
                      <div>
                        <FiUser />
                      </div>
                    </IconContext.Provider>
                    <span>Login</span>
                  </button>
                </li>
                <li>
                  <button
                    rel="noopener noreferrer"
                    onClick={() => handleNavigate("/register")}
                    className="w-full flex items-center p-2 space-x-3 rounded-md  hover:bg-success hover:text-white duration-300 bg-base-100  my-1"
                  >
                    <IconContext.Provider value={{ size: "1.25rem" }}>
                      <div>
                        <FiUserPlus />
                      </div>
                    </IconContext.Provider>

                    <span>Register</span>
                  </button>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
