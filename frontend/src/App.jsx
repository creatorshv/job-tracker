import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import Applications from "./pages/Applications";
import SavedJobs from "./pages/SavedJobs";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/add-job", element: <AddJob /> },
        { path: "/applications", element: <Applications /> },
        { path: "/saved-jobs", element: <SavedJobs /> },
        { path: "/analytics", element: <Analytics /> },
        { path: "/profile", element: <Profile /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
