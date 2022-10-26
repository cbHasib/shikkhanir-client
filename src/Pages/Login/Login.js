import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/UserContext";
import useScrollToTop from "../../hooks/useScrollToTop";
import useTitle from "../../hooks/useTitle";
import ForgetPassword from "../User/ForgetPassword/ForgetPassword";

const Login = () => {
  useScrollToTop();
  useTitle("Login");

  const { user, signIn, setLoading, loginWithGoogle, loginWithGitHub } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    if (user && user.uid) {
      navigate(from, { replace: true });
    }
  }, [from, user, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        form.reset();
        navigate(from, { replace: true });
        toast.success("Successfully Login!");
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        toast.success(`Welcome back ${result.user.displayName}!`);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  const handleGitHubLogin = () => {
    loginWithGitHub()
      .then((result) => {
        toast.success(`Welcome back ${result.user.displayName}!`);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <section className="bg-base-200">
      <div className="px-5 py-12 mx-auto max-w-7xl sm:px-4">
        <div className="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 bg-base-100 shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6 rounded-lg">
          <h1 className="mb-6 text-2xl text-center font-semibold">
            Log in to your account
          </h1>
          <form onSubmit={handleLogin} className="mb-8 space-y-4">
            <label className="block">
              <span className="block mb-1 text-xs font-medium">Your Email</span>
              <input
                className="input input-bordered w-full"
                type="email"
                name="email"
                placeholder="Ex. james@bond.com"
                inputMode="email"
                required
              />
            </label>
            <label className="block">
              <span className="block mb-1 text-xs font-medium">
                Your Password
              </span>
              <input
                className="input input-bordered w-full"
                type="password"
                name="password"
                placeholder="••••••••"
                required
              />
            </label>
            <input
              type="submit"
              className="w-full py-3 mt-1 btn btn-primary"
              value="Login"
            />
          </form>
          <div className="space-y-8">
            <div
              className="text-center border-b border-gray-200 line"
              style={{ lineHeight: "0px" }}
            >
              <span
                className="p-2 text-xs font-semibold tracking-wide text-gray-600 uppercase bg-white"
                style={{ lineHeight: "0px" }}
              >
                Or
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleGoogleLogin}
                className="py-3 btn gap-2 btn-accent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-1"
                >
                  <path d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z" />
                </svg>
                <span className="sr-only">Continue with</span> Google
              </button>
              <button onClick={handleGitHubLogin} className="py-3 btn gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="mr-1"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                </svg>
                <span className="sr-only">Continue with</span> GitHub
              </button>
            </div>
          </div>
        </div>
        <div className="mb-4 text-xs text-center text-base-content flex justify-center gap-4 items-center">
          <Link to="/register" className="">
            Create an account
          </Link>
          |{" "}
          <label htmlFor="forgetPassword-modal" className="cursor-pointer">
            Forgot password
          </label>
        </div>
      </div>
      <ForgetPassword />
    </section>
  );
};

export default Login;
