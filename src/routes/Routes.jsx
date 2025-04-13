import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Protected from "../components/Protected";
import PublicOnly from "../components/PublicOnly";
import Payment from "../pages/Payment";
import GuestManagement from "../pages/GuestManagement";
import HostManagement from "../pages/HostManagement";
import BlogManagement from "../pages/BlogManagement";
import ControllPanel from "../pages/ControllPanel";
import Feature from "../pages/Feature";
import Category from "../pages/Category";
import Faq from "../pages/Faq";
import TeamMembers from "../pages/TeamMembers";
import Mission from "../pages/Mission";

const Routes = createBrowserRouter([
  {
    path: "/login",
    element: (
      <PublicOnly>
        <Login />
      </PublicOnly>
    ),
  },
  {
    path: "/",
    element: (
      <Protected>
        <Main />
      </Protected>
    ),
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/payment", element: <Payment /> },
      { path: "/guest-management", element: <GuestManagement /> },
      { path: "/host-management", element: <HostManagement /> },
      { path: "/blog-management", element: <BlogManagement /> },
      { path: "/control-panel", element: <ControllPanel /> },
      { path: "/feature", element: <Feature /> },
      { path: "/category", element: <Category /> },
      { path: "/faq", element: <Faq /> },
      { path: "/team_members", element: <TeamMembers /> },
      { path: "/mission", element: <Mission /> },
    ],
  },
]);

export default Routes;
