import { createBrowserRouter } from "react-router-dom";
import CourseLayout from "../layout/CourseLayout";
import Main from "../layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import SingleBlog from "../Pages/Blog/SingleBlog";
import Contact from "../Pages/Contact/Contact";
import Checkout from "../Pages/Courses/Checkout/Checkout";
import CourseDetails from "../Pages/Courses/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import Instructor from "../Pages/Courses/Instructor/Instructor";
import Error from "../Pages/Error/Error";
import FAQs from "../Pages/FAQs/FAQs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import EditProfile from "../Pages/User/EditProfile/EditProfile";
import UserProfile from "../Pages/User/UserProfile/UserProfile";
import PrivateRouter from "./PrivateRouter";

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
        path: "/profile",
        element: (
          <PrivateRouter>
            <UserProfile />
          </PrivateRouter>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRouter>
            <EditProfile />
          </PrivateRouter>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/post/:slug",
        element: <SingleBlog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <FAQs />,
      },
      {
        path: "/course/:slug",
        loader: () => fetch("/test.json"),
        element: <CourseDetails />,
      },
      {
        path: "/instructor/:slug",
        element: <Instructor />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRouter>
            <Checkout />
          </PrivateRouter>
        ),
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
