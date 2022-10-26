import { updatePassword, updateProfile } from "firebase/auth";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Contexts/UserContext";
import useScrollToTop from "../../../hooks/useScrollToTop";
import useTitle from "../../../hooks/useTitle";
import avatar from "../../../assets/images/user.png";

const EditProfile = () => {
  const { user } = useContext(AuthContext);

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.userPhoto.value;

    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        toast.success("Profile Updated");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handlePasswordChange = () => {
    const newPassword = document
      .getElementById("user-new-password")
      .value.toString();

    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    updatePassword(user, newPassword)
      .then(() => {
        toast.success("Password Updated");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useScrollToTop();
  useTitle("Update Profile");
  return (
    <section className="p-10 bg-base-200">
      <form
        onSubmit={handleUpdateProfile}
        className="container max-w-2xl mx-auto shadow-md md:w-3/4"
      >
        <div className="p-4 bg-base-100 text-base-content border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <a href="/" className="block relative">
                <img
                  alt={user?.displayName ? user?.displayName : "User Photo"}
                  src={user?.photoURL ? user?.photoURL : avatar}
                  referrerPolicy="no-referrer"
                  className="mx-auto object-cover rounded-full h-16 w-16 "
                />
              </a>
              <h1 className="text-xl font-medium">
                {user?.displayName ? user?.displayName : "Username"}
              </h1>
            </div>
          </div>
        </div>
        <div className="space-y-6 bg-base-100 text-base-content">
          <div className="items-center w-full p-4 space-y-4 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3 text-lg">Account</h2>
            <div className="max-w-sm mx-auto md:w-2/3">
              <div className=" relative ">
                <input
                  type="text"
                  id="user-info-email"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 input placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Email"
                  value={user?.email ? user?.email : "you@email.com"}
                  disabled
                  readOnly
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="items-center w-full p-4 space-y-4 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3 text-lg">Personal info</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <div className=" relative ">
                  <input
                    type="text"
                    name="name"
                    id="user-info-name"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 input shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Name"
                    defaultValue={
                      user?.displayName ? user?.displayName : "username"
                    }
                  />
                </div>
              </div>
              <div>
                <div className=" relative ">
                  <input
                    type="url"
                    name="userPhoto"
                    id="user-info-photo"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 input shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Photo URL"
                    defaultValue={user?.photoURL ? user?.photoURL : ""}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="items-center w-full p-8 space-y-4 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-4/12 text-lg">
              Change password
            </h2>
            <div className="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9 md:inline-flex">
              <div className=" relative ">
                <input
                  type="password"
                  id="user-new-password"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 input shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="text-center md:w-3/12 md:pl-6">
              <button
                onClick={handlePasswordChange}
                type="button"
                className="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Change
              </button>
            </div>
          </div>
          <hr />
          <div className="w-full px-4 pb-4 ml-auto md:w-1/3">
            <input
              type="submit"
              value="Save"
              className="cursor-pointer py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default EditProfile;
