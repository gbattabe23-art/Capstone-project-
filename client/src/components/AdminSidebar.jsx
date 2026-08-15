import {
  LayoutDashboard,
  Users,
  Hand,
  ScanLine,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

function AdminSidebar() {
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin/dashboard",
    },
    {
      name: "Users",
      icon: Users,
      path: "/admin/users",
    },
    {
      name: "Feedback",
      icon: MessageSquare,
      path: "/admin/feedback",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/admin/settings",
    },
  ];

  return (
    <aside className="w-72 bg-slate-950 text-white flex flex-col justify-between min-h-screen">

      {/* Logo */}
      <div>

        <div className="px-8 py-8 border-b border-slate-800">

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
              <Hand size={22} />
            </div>

            <div>
              <h1 className="text-xl font-bold">
                SignSense AI
              </h1>

              <p className="text-sm text-slate-400">
                Admin Console
              </p>
            </div>

          </div>

        </div>

        {/* Menu */}

        <div className="mt-10">

          <p className="px-8 mb-5 text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
            Main Menu
          </p>

          <div className="space-y-2 px-4">

            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-4 rounded-2xl px-4 py-4 transition ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-slate-400 hover:bg-slate-900 hover:text-white"
                    }`
                  }
                >
                  <Icon size={20} />
                  <span className="font-medium">
                    {item.name}
                  </span>
                </NavLink>
              );
            })}

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="p-5">

        <div className="rounded-2xl bg-slate-900 p-4">

          <h3 className="font-semibold">
            Admin
          </h3>

        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-5 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-red-600 hover:text-white"
        >
          <LogOut size={20} />

          Sign Out
        </button>

      </div>

    </aside>
  );
}

export default AdminSidebar;