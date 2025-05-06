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
import StaffManagement from "../pages/StaffManagement";
import Feature from "../pages/Feature";
import Category from "../pages/Category";
import Faq from "../pages/Faq";
import TeamMembers from "../pages/TeamMembers";
import Mission from "../pages/Mission";
import Vission from "../pages/Vission";
import AboutUs from "../pages/AboutUs";
import Partners from "../pages/Partners";
import WhyChooseUs from "../pages/WhyChooseUs";
import ContactUs from "../pages/ContactUs";
import Land from "../pages/Land";
import Flat from "../pages/Flat";
import Rent from "../pages/Rent";
import Amenities from "../pages/Amenities";

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
      { path: "/staff-management", element: <StaffManagement /> },
      { path: "/feature", element: <Feature /> },
      { path: "/category", element: <Category /> },
      { path: "/faq", element: <Faq /> },
      { path: "/team_members", element: <TeamMembers /> },
      { path: "/mission", element: <Mission /> },
      { path: "/vision", element: <Vission /> },
      { path: "/about_us", element: <AboutUs /> },
      { path: "/partners", element: <Partners /> },
      { path: "/why_choose_us", element: <WhyChooseUs /> },
      { path: "/contact_us", element: <ContactUs /> },
      { path: "/land", element: <Land /> },
      { path: "/flat", element: <Flat /> },
      { path: "/rent", element: <Rent /> },
      { path: "/amenities", element: <Amenities /> },
    ],
  },
]);

export default Routes;
