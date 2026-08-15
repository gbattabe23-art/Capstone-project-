import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";

import AdminSidebar from "../../components/AdminSidebar";
import AdminTopbar from "../../components/AdminTopbar";

function Feedback() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Admin Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <AdminTopbar title="Feedback" />

        {/* Page Content */}
        <main className="flex-1 px-8 py-8">
          {/* Search Bar */}
          <div className="rounded-3xl bg-white px-6 py-5 shadow-md">
            <div className="flex items-center gap-4">
              <FaSearch className="text-lg text-slate-400" />

              <input
                type="text"
                placeholder="Search feedback..."
                className="w-full bg-transparent text-lg text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Feedback Container */}
          <div className="mt-8 min-h-[560px] rounded-3xl bg-white p-8 shadow-md">
            {/* Real feedback records will appear here
                after the database is connected. */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Feedback;
