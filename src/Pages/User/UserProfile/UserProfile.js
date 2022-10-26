import React, { useContext } from "react";
import userAvatar from "../../../assets/images/user.png";
import { FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useTitle from "../../../hooks/useTitle";
import useScrollToTop from "../../../hooks/useScrollToTop";
import { AuthContext } from "../../../Contexts/UserContext";
import { sendEmailVerification } from "firebase/auth";

const UserProfile = () => {
  useScrollToTop();
  useTitle("Profile");

  const { user } = useContext(AuthContext);

  const handleMailSend = () => {
    sendEmailVerification(user)
      .then(() => {
        toast.success("Email sent successfully. Check you inbox/spam.");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const verified = user?.emailVerified;

  return (
    <>
      <div className="flex justify-center items-center py-20 px-5">
        <div className="shadow-lg max-w-xl relative rounded-2xl w-full bg-white dark:bg-gray-800">
          <img
            alt="profile"
            src="https://placeimg.com/700/300/nature"
            className="rounded-t-lg h-44 object-cover w-full mb-4"
          />
          <div className="flex flex-col items-center justify-center p-4 -mt-20">
            <div className="avatar">
              <div className="block relative w-28 h-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  alt="profile"
                  src={user?.photoURL ? user?.photoURL : userAvatar}
                />
              </div>
            </div>
            <p className="text-gray-800 dark:text-white text-xl font-medium mt-2">
              {user?.displayName ? user?.displayName : "username"}
            </p>

            {verified ? (
              <p className="text-green-500 font-medium text-sm mb-4">
                Verified User
              </p>
            ) : (
              <p className="text-red-500 font-medium text-sm mb-4 relative">
                Unverified User
                <span
                  onClick={handleMailSend}
                  className="text-xs absolute bottom-0 ml-1 w-full link text-blue-500"
                >
                  verify
                </span>
              </p>
            )}

            <div className="space-y-1">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Email address"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                  ></path>
                </svg>
                <span className="dark:text-gray-400">
                  {user?.email || "hasib@shikkhanir.com"}
                </span>
              </span>
            </div>

            <div className="rounded-lg p-2 w-full mt-4">
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-200">
                <p className="flex items-center flex-col">
                  Articles
                  <span className="text-black dark:text-white font-bold">
                    06
                  </span>
                </p>
                <p className="flex items-center flex-col">
                  Followers
                  <span className="text-black dark:text-white font-bold">
                    45
                  </span>
                </p>
                <p></p>
              </div>
            </div>
          </div>

          <Link
            to="/update-profile"
            className="tooltip tooltip-left absolute bottom-3 right-3 "
            data-tip="Update Profile"
          >
            <div className="btn btn-primary text-center py-2 px-4 rounded-full h-14 w-14 inline-flex items-center justify-center duration-300">
              <FiEdit2 className="h-5 w-5" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
