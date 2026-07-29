import { Moon } from "lucide-react";

function AdminTopbar() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">

      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h1>
      </div>

      <button
        className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition"
      >
        <Moon size={20} className="text-slate-600" />
      </button>

    </header>
  );
}

export default AdminTopbar;