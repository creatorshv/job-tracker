import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">Job Tracker</div>

          {/* Links */}
          <ul className="hidden md:flex space-x-6">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/add-job"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
              }
            >
              Add Job
            </NavLink>

            <NavLink
              to="/applications"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
              }
            >
              Applications
            </NavLink>

            <NavLink
              to="/saved-jobs"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
              }
            >
              Saved Jobs
            </NavLink>

            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
              }
            >
              Analytics
            </NavLink>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
              }
            >
              Profile
            </NavLink>
          </ul>

          {/* Logout Button */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Logout
            </button>
          </div>

          {/* Mobile Menu (Optional) */}
          <div className="md:hidden text-gray-700 cursor-pointer">
            {/* You can add a hamburger menu icon here */}☰
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
