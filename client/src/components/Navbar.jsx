import { Link } from "react-router-dom";
import { Hand } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
            <Hand size={22} />
          </div>

          <h1 className="text-2xl font-bold">
            SignSense <span className="text-blue-600">AI</span>
          </h1>
        </div>

        {/* Links */}

        <ul className="hidden md:flex gap-10 font-medium text-slate-600">
          <li>
            <a href="#features" className="hover:text-blue-600 transition">
              Features
            </a>
          </li>

          <li>
            <a href="#workflow" className="hover:text-blue-600 transition">
              How It Works
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
          </li>

          <li>
            <a href="#faq" className="hover:text-blue-600 transition">
              FAQ
            </a>
          </li>
        </ul>

        {/* Login */}

        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Login →
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
