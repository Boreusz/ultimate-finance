import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "@views/Dashboard";
import NewEntry from "@/views/NewEntry";
import Accounts from "@views/Accounts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/new-entry",
    element: <NewEntry />,
  },
  {
    path: "/accounts",
    element: <Accounts />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
