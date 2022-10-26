import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiUser, FiUserPlus, FiVideo, FiLogOut } from "react-icons/fi";
import { IconContext } from "react-icons";
import { AuthContext } from "../../Contexts/UserContext";

const SideBar = () => {
  const {user} = useContext(AuthContext);

  return (
    <div className="h-full p-3 space-y-2 w-full bg-white dark:bg-base-300 dark:text-gray-100 ">
      <div className="sticky top-20">
        {user && (
          <div className="flex items-center p-2 space-x-4 border border-base-300 shadow rounded-md bg-base-200 dark:bg-base-100">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="w-12 h-12 rounded-full dark:bg-gray-500"
            />
            <div>
              <h2 className="text-lg font-semibold">Hasibul Hasan</h2>
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
            <li>
              <NavLink
                rel="noopener noreferrer"
                to="/courses/1"
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

                <span>SSC Physics</span>
              </NavLink>

              <NavLink
                rel="noopener noreferrer"
                to="/courses/2"
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

                <span>SSC Physics</span>
              </NavLink>

              <NavLink
                rel="noopener noreferrer"
                to="/courses/3"
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

                <span>SSC Physics</span>
              </NavLink>
            </li>
          </ul>

          {user ? (
            <>
              <ul className="pt-4 pb-2 space-y-1 text-sm">
                <li>
                  <NavLink
                    rel="noopener noreferrer"
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? undefined
                        : "flex items-center p-2 space-x-3 rounded-md  hover:bg-success hover:text-white duration-300 bg-base-100  my-1"
                    }
                  >
                    <IconContext.Provider value={{ size: "1.25rem" }}>
                      <div>
                        <FiUser />
                      </div>
                    </IconContext.Provider>
                    <span>Profile</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    rel="noopener noreferrer"
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? undefined
                        : "flex items-center p-2 space-x-3 rounded-md  hover:bg-success hover:text-white duration-300 bg-base-100  my-1"
                    }
                  >
                    <IconContext.Provider value={{ size: "1.25rem" }}>
                      <div>
                        <FiLogOut />
                      </div>
                    </IconContext.Provider>
                    <span>Logout</span>
                  </NavLink>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="pt-4 pb-2 space-y-1 text-sm">
                <li>
                  <NavLink
                    rel="noopener noreferrer"
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? undefined
                        : "flex items-center p-2 space-x-3 rounded-md  hover:bg-success hover:text-white duration-300 bg-base-100  my-1"
                    }
                  >
                    <IconContext.Provider value={{ size: "1.25rem" }}>
                      <div>
                        <FiUser />
                      </div>
                    </IconContext.Provider>
                    <span>Login</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    rel="noopener noreferrer"
                    to="/register"
                    className={({ isActive }) =>
                      isActive
                        ? undefined
                        : "flex items-center p-2 space-x-3 rounded-md  hover:bg-success hover:text-white duration-300 bg-base-100  my-1"
                    }
                  >
                    <IconContext.Provider value={{ size: "1.25rem" }}>
                      <div>
                        <FiUserPlus />
                      </div>
                    </IconContext.Provider>

                    <span>Register</span>
                  </NavLink>
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
