import Contact from "../Pages/Contact";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";

export const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  // { path: "/about", name: "About", Component: About },
  { path: "/contact", name: "Contact", Component: Contact },
  // { path: "/services", name: "Services", Component: Services },
  { path: "/login", name: "Login", Component: Login },
];
