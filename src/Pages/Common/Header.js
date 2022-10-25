import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import HeaderUserProfile from "./HeaderUserProfile";

const Header = () => {
  const [dark, setDark] = useState(false);

  const darkHandler = (darkSwitch) => {
    setDark(darkSwitch);
    localStorage.setItem("dark-mode", darkSwitch);
  };

  useEffect(() => {
    const localDark = JSON.parse(localStorage.getItem("dark-mode"));
    setDark(localDark);
    localDark &&
      document.getElementById("darkSwitch").setAttribute("checked", true);
  }, []);

  useEffect(() => {
    if (dark) {
      document.querySelector("html").setAttribute("class", "dark");
      document.querySelector("html").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("html").removeAttribute("data-theme");
      document.querySelector("html").removeAttribute("class");
    }
  }, [dark]);

  const navHandler = () => {
    document.getElementById("toggle_nav").checked = false;
  };

  return (
    <header className="shadow-lg bg-base-200 text-base-content sticky top-0 z-10">
      <nav className="w-full sticky">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:gap-0 relative">
            <input
              aria-hidden="true"
              type="checkbox"
              name="toggle_nav"
              id="toggle_nav"
              className="hidden peer"
            />
            <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0 items-center">
              <div className="relative flex items-center lg:hidden max-h-10">
                <label
                  role="button"
                  htmlFor="toggle_nav"
                  aria-label="humburger"
                  id="hamburger"
                  className="relative -mr6 "
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-5 rounded transition duration-300 bg-primary"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-5 rounded transition duration-300 bg-primary"
                  ></div>
                </label>
              </div>

              <Link
                to={"/"}
                aria-label="logo"
                className="flex space-x-2 items-center"
              >
                <div aria-hidden="true" className="flex space-x-1">
                  <img src={logo} alt="" className="h-8 w-8" />
                </div>
                <span className="text-2xl font-bold">
                  Shikkha<span className="text-primary">Nir</span>
                </span>
              </Link>

              <div
                className="tooltip tooltip-primary tooltip-right lg:hidden"
                data-tip="Hasibul Hasan"
              >
                <HeaderUserProfile />
              </div>
            </div>

            <div
              aria-hidden="true"
              className="fixed z-10 inset-0 h-screen w-screen  backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden "
            ></div>

            <div
              className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-base-300 bg-base-200 text-base-content shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                            lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                            peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none"
            >
              <div className="lg:pr-4 lg:w-auto w-full lg:pt-0">
                <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                  <li>
                    <NavLink
                      to={"/home"}
                      onClick={navHandler}
                      className={({ isActive }) =>
                        isActive
                          ? "block md:px-4 transition text-primary"
                          : "block md:px-4 transition hover:text-primary text-base-content"
                      }
                    >
                      <span>Home</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={navHandler}
                      to={"/login"}
                      className={({ isActive }) =>
                        isActive
                          ? "block md:px-4 transition text-primary"
                          : "block md:px-4 transition hover:text-primary text-base-content"
                      }
                    >
                      <span>Login</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={navHandler}
                      to={"/register"}
                      className={({ isActive }) =>
                        isActive
                          ? "block md:px-4 transition text-primary"
                          : "block md:px-4 transition hover:text-primary text-base-content"
                      }
                    >
                      <span>Register</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={navHandler}
                      to={"/courses"}
                      className={({ isActive }) =>
                        isActive
                          ? "block md:px-4 transition text-primary"
                          : "block md:px-4 transition hover:text-primary text-base-content"
                      }
                    >
                      <span>Courses</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={navHandler}
                      to={"/faq"}
                      className={({ isActive }) =>
                        isActive
                          ? "block md:px-4 transition text-primary"
                          : "block md:px-4 transition hover:text-primary text-base-content"
                      }
                    >
                      <span>FAQs</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={navHandler}
                      to={"/blog"}
                      className={({ isActive }) =>
                        isActive
                          ? "block md:px-4 transition text-primary"
                          : "block md:px-4 transition hover:text-primary text-base-content"
                      }
                    >
                      <span>Blog</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={navHandler}
                      to={"/about"}
                      className={({ isActive }) =>
                        isActive
                          ? "block md:px-4 transition text-primary"
                          : "block md:px-4 transition hover:text-primary text-base-content"
                      }
                    >
                      <span>About</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={navHandler}
                      to={"/contact"}
                      className={({ isActive }) =>
                        isActive
                          ? "block md:px-4 transition text-primary"
                          : "block md:px-4 transition hover:text-primary text-base-content"
                      }
                    >
                      <span>Contact</span>
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center items-center">
                <label className="swap swap-rotate text-primary">
                  <input
                    id="darkSwitch"
                    type="checkbox"
                    onClick={() => darkHandler(!dark)}
                  />

                  <svg
                    className="swap-on fill-current w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  <svg
                    className="swap-off fill-current w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>

              <div
                className="tooltip tooltip-primary tooltip-right hidden lg:block ml-6"
                data-tip="Hasibul Hasan"
              >
                <HeaderUserProfile />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
