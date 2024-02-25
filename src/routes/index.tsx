import { Suspense, lazy, FunctionComponent, ComponentProps } from "react";
import { Navigate, useRoutes } from "react-router-dom";
// import { isUserLoggedIn } from "../utils/isUserLoggedIn";

// layouts
import DashboardLayout from "../pages/Dashboard/Dashboard";

const Loadable =
  (Component: FunctionComponent) =>
  (props: ComponentProps<FunctionComponent>) => {
    return (
      <Suspense fallback={"Loading..."}>
        <Component {...props} />
      </Suspense>
    );
  };

const Home = Loadable(lazy(() => import("../pages/Home/Home")));
const ClubListing = Loadable(
  lazy(() => import("../pages/ClubsListing/ClubsListing"))
);
const Page404 = Loadable(lazy(() => import("../pages/404/Error404")));
const Scout = Loadable(lazy(() => import("../pages/Scout/Scout")));
// const Login = Loadable(lazy(() => import("../pages/Login/Login")));
// const Signup = Loadable(lazy(() => import("../pages/SignUp/SignUp")));

export default function Router() {
  // const isLoggedIn = isUserLoggedIn();
  return useRoutes([
    // isLoggedIn
    //   ?
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "*", element: <Navigate to="/" replace /> },
        { path: "home", element: <Home /> },
        { path: "clubs", element: <ClubListing /> },
        { path: "scout", element: <Scout /> },
      ],
    },
    // : {
    //     path: "/",
    //     children: [
    //       { path: "login", element: <Login /> },
    //       { path: "signup", element: <Signup /> },
    //       { path: "*", element: <Navigate to="/login" replace /> },
    //     ],
    //   },
    {
      path: "*",
      element: <Page404 />,
    },
  ]);
}
