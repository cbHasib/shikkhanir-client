import { createBrowserRouter } from "react-router-dom";
import CourseLayout from "../layout/CourseLayout";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import SingleBlog from "../Pages/Blog/SingleBlog";
import Courses from "../Pages/Courses/Courses";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import EditProfile from "../Pages/User/EditProfile/EditProfile";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/update-profile",
        element: <EditProfile />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/post/:slug",
        element: <SingleBlog />,
      },
    ],
  },
  {
    path: "/courses",
    element: <CourseLayout />,
    children: [
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:Id",
        element: <Courses />,
      },
    ],
  },
]);
