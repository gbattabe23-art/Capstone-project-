import {
  Bell,
  Globe,
  Save,
  Download,
  ChevronRight,
  Info,
  LogOut,
  ScanLine,
} from "lucide-react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import AdminTopbar from "../../components/AdminTopbar";

function Settings() {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(true);

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to sign out?"
    );

    if (confirmLogout) {
      navigate("/");
    }
  };

  return (
    <div className="flex bg-slate-100 min-h-screen">

      <AdminSidebar />

      <div className="flex-1">

        <AdminTopbar title="Settings" />

        <div className="max-w-5xl mx-auto px-8 py-8">

          {/* Preferences */}

          <div className="bg-white rounded-3xl shadow-md">

            <h2 className="text-2xl font-bold p-6">
              Appearance & Preferences
            </h2>

            {/* Notifications */}

            <div className="flex items-center justify-between px-6 py-5 hover:bg-slate-50 transition">

              <div className="flex items-center gap-4">

                <Bell className="text-blue-600" />

                <div>

                  <h3 className="font-semibold">
                    Notifications
                  </h3>

                  <p className="text-sm text-slate-500">
                    Recognition event alerts
                  </p>

                </div>

              </div>

              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />

            </div>

            {/* Auto Save */}

            <div className="flex items-center justify-between px-6 py-5 border-t border-slate-100">

              <div className="flex items-center gap-4">

                <Save className="text-blue-600" />

                <div>

                  <h3 className="font-semibold">
                    Auto Save
                  </h3>

                  <p className="text-sm text-slate-500">
                    Automatically save recognition history
                  </p>

                </div>

              </div>

              <input
                type="checkbox"
                checked={autoSave}
                onChange={() => setAutoSave(!autoSave)}
              />

            </div>

            {/* Language */}

            <div className="flex items-center justify-between px-6 py-5 border-t border-slate-100 hover:bg-slate-50 cursor-pointer">

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

          </div>

          {/* System */}

          <div className="bg-white rounded-3xl shadow-md mt-8">

            <h2 className="text-2xl font-bold p-6">
              System
            </h2>

            <div className="flex items-center justify-between px-6 py-5">

              <div className="flex items-center gap-4">

                <ScanLine className="text-blue-600" />

                <div>

                  <h3 className="font-semibold">
                    Recognition Threshold
                  </h3>

                  <p className="text-sm text-slate-500">
                    Minimum confidence for recognition
                  </p>

                </div>

              </div>

              <span className="font-semibold text-slate-400">
                --
              </span>

            </div>

            <div className="flex items-center justify-between px-6 py-5 border-t border-slate-100 hover:bg-slate-50 cursor-pointer">

              <div className="flex items-center gap-4">

                <Download className="text-blue-600" />

                <div>

                  <h3 className="font-semibold">
                    Export Recognition Logs
                  </h3>

                  <p className="text-sm text-slate-500">
                    Download recognition history
                  </p>

                </div>

              </div>

              <ChevronRight size={18} />

            </div>

          </div>

          {/* About */}

          <div className="bg-white rounded-3xl shadow-md mt-8 p-8">

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center">

                <Info className="text-white" size={30} />

              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  SignSense AI
                </h2>

                <p className="text-slate-500 mt-1">
                  Version 1.0.0
                </p>

              </div>

            </div>

            <p className="mt-6 text-slate-600 leading-8">

              Smart Indian Sign Language Recognition System
              developed as a Final Year Capstone Project to
              bridge communication between the deaf and hearing
              communities using Artificial Intelligence and a
              wearable Smart Glove.

            </p>

          </div>

          {/* Logout */}

        </div>

      </div>

    </div>
  );
}

export default Settings;