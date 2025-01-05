import { AiFillBell } from "react-icons/ai";
import { Link } from "react-router-dom";
import Notification from "../Notification";

const Layout = ({ children, sidebarTabs }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav
        className="shadow-md px-6 py-4 flex items-center justify-between text-right"
        style={{
          background:
            "linear-gradient(to right, rgba(194, 144, 98, 1), rgba(0, 0, 1, 1))",
        }}
      >
        <div className="flex items-center gap-4">
          {/* User Avatar */}
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          <button className="relative">
            <span className="material-icons text-white">شركة عقاركم</span>
          </button>
          <div className="flex items-center gap-4">
            <Notification
              label={<AiFillBell />}
            />
          </div>
        </div>

        {/* Search Bar in the middle */}
        <div className="flex-1 flex justify-center">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-full px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
        <div className="flex items-center gap-4">
          {/* Dashboard Name */}
          <div className="text-lg font-bold text-white">Dashboard</div>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg p-6" dir="rtl">
          <h2 className="text-xl font-bold text-gray-700 mb-4 text-center">
            قـيـم - QAIM
          </h2>
          <ul className="space-y-4">
            {sidebarTabs.map((tab) => (
              <li key={tab.label}>
                <Link
                  to={tab.link}
                  className="flex justify-start items-center gap-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md"
                >
                  <div className="text-[rgba(194,144,98,1)] text-xl">
                    {tab.icon}
                  </div>
                  <div className="text-right hover:text-[rgba(194,144,98,1)]">
                    {tab.label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
