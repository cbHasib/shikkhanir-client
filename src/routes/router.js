import { createBrowserRouter } from "react-router-dom";
import CourseLayout from "../layout/CourseLayout";
import Main from "../layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import SingleBlog from "../Pages/Blog/SingleBlog";
import Contact from "../Pages/Contact/Contact";
import Checkout from "../Pages/Courses/Checkout/Checkout";
import CourseContent from "../Pages/Courses/CourseContent/CourseContent";
import CourseDetails from "../Pages/Courses/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import Instructor from "../Pages/Courses/Instructor/Instructor";
import SuccessEnroll from "../Pages/Courses/SuccessEnroll/SuccessEnroll";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FAQs from "../Pages/FAQs/FAQs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import EditProfile from "../Pages/User/EditProfile/EditProfile";
import UserProfile from "../Pages/User/UserProfile/UserProfile";
import PrivateRouter from "./PrivateRouter";
import OpenApp from "../Pages/OpenApp/OpenApp";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
        path: "/blog/post/:cat_slug/:slug",
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
        path: "/courses/:id/:slug",
        element: <CourseDetails />,
      },
      {
        path: "/courses/content/:courseId/:slug",
        element: <CourseContent />,
      },
      {
        path: "/instructor/:id/:slug",
        element: <Instructor />,
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_serverURL}/course/${params.id}`),
        element: (
          <PrivateRouter>
            <Checkout />
          </PrivateRouter>
        ),
      },
      {
        path: "/success",
        element: (
          <PrivateRouter>
            <SuccessEnroll />
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
        index: true,
        element: <Courses />,
      },
      {
        path: "/courses/:Id/:cat_slug",
        element: <Courses />,
      },
    ],
  },
  {
    path: "/open-app",
    element: <OpenApp />,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
