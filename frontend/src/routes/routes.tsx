import Home from "../pages/home/home";
import Service from "../pages/service/service";
import Contact from "../pages/contact/contact";
import Blog from "../pages/blog/blog";

export const routes = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/path",
    element: <Contact />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
];
