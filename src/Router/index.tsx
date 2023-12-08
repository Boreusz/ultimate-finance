import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../Views/Dashboard";
import NewEntryForm from "../Views/NewEntryForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/new-entry",
    element: <NewEntryForm />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
