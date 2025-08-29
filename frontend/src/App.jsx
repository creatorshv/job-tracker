import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import Applications from "./pages/Applications";
import SavedJobs from "./pages/SavedJobs";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";

const App = () => {
  // Routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          element: <ProtectedRoute isLoggedIn={isLoggedIn} />,
          children: [
            { index: true, element: <Home /> },
            { path: "dashboard", element: <Dashboard /> },
            { path: "add-job", element: <AddJob /> },
            { path: "applications", element: <Applications /> },
            { path: "saved-jobs", element: <SavedJobs /> },
            { path: "analytics", element: <Analytics /> },
            { path: "profile", element: <Profile /> },
          ],
        },
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
        { path: "*", element: <Login /> },
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
