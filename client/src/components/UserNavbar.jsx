import { NavLink } from "react-router-dom";
import { Hand } from "lucide-react";

function UserNavbar() {
  return (
    <nav className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
          <Hand size={20} />
        </div>

        <h1 className="text-xl font-bold">
          SignSense <span className="text-blue-600">AI</span>
        </h1>
      </div>

    <div className="hidden md:flex items-center gap-16 text-[13px] font-medium">

        <NavLink
          to="/user/home"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-slate-700 hover:text-blue-600"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/user/recognize"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-slate-700 hover:text-blue-600"
          }
        >
          Recognize
        </NavLink>

        <NavLink
          to="/user/learn"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-slate-700 hover:text-blue-600"
          }
        >
          Learn
        </NavLink>

        <NavLink
          to="/user/history"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-slate-700 hover:text-blue-600"
          }
        >
          History
        </NavLink>

        <NavLink
          to="/user/profile"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-slate-700 hover:text-blue-600"
          }
        >
          Profile
        </NavLink>

      </div>

    </nav>
  );
}

export default UserNavbar;