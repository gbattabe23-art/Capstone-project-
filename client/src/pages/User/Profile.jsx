import { useState } from "react";
import Footer from "../../components/Footer";
import {
  User,
  Moon,
  Bell,
  Globe,
  CircleHelp,
  MessageSquare,
  Lock,
  LogOut,
  ChevronRight,
} from "lucide-react";
import UserNavbar from "../../components/UserNavbar";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to sign out?"
    );

    if (confirmLogout) {
         window.scrollTo({
      top: 0,
      behavior: "smooth", // Use "auto" if you don't want the animation
    });
      navigate("/");
    }
  };
  return (
    <>
      <UserNavbar />
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Profile Card */}
<div className="bg-white rounded-3xl shadow-md p-8">

  <div className="flex items-center gap-6">

    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg">
      <User className="text-white" size={46} />
    </div>

    <div>

      <h1 className="text-4xl font-bold">
        Welcome 👋
      </h1>

      <p className="mt-2 text-lg text-slate-600">
        Manage your SignSense AI profile and preferences.
      </p>

      <p className="text-slate-400 mt-1">
        User information will appear here after login.
      </p>

    </div>

  </div>

  {/* Statistics */}

  <div className="grid grid-cols-3 gap-6 mt-10">

    <div className="bg-slate-50 rounded-2xl p-6 text-center">

      <h2 className="text-3xl font-bold text-blue-600">
        --
      </h2>

      <p className="mt-2 text-slate-500">
        Recognitions
      </p>

    </div>

    <div className="bg-slate-50 rounded-2xl p-6 text-center">

      <h2 className="text-3xl font-bold text-green-600">
        --
      </h2>

      <p className="mt-2 text-slate-500">
        Gestures
      </p>

    </div>

    <div className="bg-slate-50 rounded-2xl p-6 text-center">

      <h2 className="text-3xl font-bold text-purple-600">
        --
      </h2>

      <p className="mt-2 text-slate-500">
        Accuracy
      </p>

    </div>

  </div>

</div>

        {/* Preferences */}

        <div className="bg-white rounded-3xl shadow-md mt-8">

          <h2 className="text-2xl font-bold p-6">
            Preferences
          </h2>

          {/* Dark Mode */}

          <div className="flex items-center justify-between px-6 py-5 hover:bg-slate-50 transition">

            <div className="flex items-center gap-4">

              <Moon className="text-blue-600" />

              <div>

                <h3 className="font-semibold">
                  Dark Mode
                </h3>

                <p className="text-sm text-slate-500">
                  Switch interface theme
                </p>

              </div>

            </div>

            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />

          </div>

          {/* Notifications */}

          <div className="flex items-center justify-between px-6 py-5 border-t border-slate-100">

            <div className="flex items-center gap-4">

              <Bell className="text-blue-600" />

              <div>

                <h3 className="font-semibold">
                  Notifications
                </h3>

                <p className="text-sm text-slate-500">
                  Recognition alerts
                </p>

              </div>

            </div>

            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />

          </div>

          {/* Language */}

          <div className="flex items-center justify-between px-6 py-5 border-t border-slate-100 cursor-pointer hover:bg-slate-50">

            <div className="flex items-center gap-4">

              <Globe className="text-blue-600" />

              <div>

                <h3 className="font-semibold">
                  Language
                </h3>

                <p className="text-sm text-slate-500">
                  Interface language
                </p>

              </div>

            </div>

            <div className="flex items-center gap-2">

              English

              <ChevronRight size={18} />

            </div>

          </div>

          {/* Help */}

          <div className="flex items-center justify-between px-6 py-5 border-t border-slate-100 cursor-pointer hover:bg-slate-50">

            <div className="flex items-center gap-4">

              <CircleHelp className="text-blue-600" />

              <div>

                <h3 className="font-semibold">
                  Help & Support
                </h3>

                <p className="text-sm text-slate-500">
                  Get assistance
                </p>

              </div>

            </div>

            <ChevronRight size={18} />
</div>
          </div>
        {/* About */}

        <div className="bg-white rounded-3xl shadow-md mt-8 p-8">

          <h2 className="text-2xl font-bold">
            About SignSense AI
          </h2>

          <p className="text-slate-600 mt-4 leading-7">
            SignSense AI is a Smart ISL Glove Recognition System
            developed to bridge the communication gap between
            the deaf and hearing communities using Artificial
            Intelligence and wearable technology.
          </p>

          <p className="mt-6 text-slate-500">
            Version 1.0.0
          </p>

        </div>

        {/* Sign Out */}
<button
  onClick={handleLogout}
  className="w-full mt-8 bg-red-50 border border-red-200 rounded-2xl py-4 text-red-600 font-semibold flex justify-center items-center gap-3 hover:bg-red-100 transition"
>
  <LogOut size={22} />
  Sign Out
</button>

      </div>

      <Footer />

    </div>
    </>
  );
}

export default Profile;