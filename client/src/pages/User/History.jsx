import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";

import UserNavbar from "../../components/UserNavbar";

function History() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <UserNavbar />

      <main className="min-h-screen bg-slate-100 py-7">
        <div className="mx-auto max-w-[1100px] origin-top scale-[0.95] px-5">
          {/* Search Bar */}

          <div className="rounded-3xl bg-white p-3 shadow-md">
            <div className="flex items-center gap-4">
              <FaSearch className="ml-3 text-base text-slate-400" />

              <input
                type="text"
                placeholder="Search recognition history..."
                className="w-full bg-transparent py-2 text-base text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* History Log */}

          <div className="mt-8 rounded-3xl bg-white p-7 shadow-md min-h-[550px]">
            {/* Date-wise recognition history will appear here */}
          </div>
        </div>
      </main>
    </>
  );
}

export default History;
