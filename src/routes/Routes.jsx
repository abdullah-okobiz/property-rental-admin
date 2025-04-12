import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Protected from "../components/Protected";
import PublicOnly from "../components/PublicOnly";

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
    children: [{ path: "/", element: <Dashboard /> }],
  },
]);

export default Routes;
