import {
  Hand,
  Plug,
  ScanLine,
  History,
  BookOpen,
  MessageSquare,
  House,
  User,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import UserNavbar from "../../components/UserNavbar";
function UserDashboard() {
  const navigate = useNavigate();

  return (
    <>
     {/* Navbar */}
      <UserNavbar />
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Welcome Card */}

        <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 px-10 py-14 text-white shadow-lg">
          <h2 className="text-4xl font-bold">
  Welcome Back 👋
</h2>

<p className="mt-4 text-blue-100 text-lg">
  Ready to begin your Indian Sign Language recognition journey.
</p>

        </div>

        {/* Smart Glove */}

        <div className="mt-8 bg-white rounded-3xl shadow-md p-8 flex flex-col md:flex-row justify-between items-center">

          <div>

            <div className="flex items-center gap-3">

              <div className="bg-blue-100 p-3 rounded-full">
                <Plug className="text-blue-600" />
              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  Smart Glove
                </h2>

                <p className="text-slate-500">
                  Status: Not Connected
                </p>

              </div>

            </div>

          </div>

          <button className="mt-6 md:mt-0 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">

            Connect Glove

          </button>

        </div>

        {/* Quick Actions */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

          <div
            onClick={() => navigate("/user/recognize")}
            className="cursor-pointer bg-white rounded-3xl shadow-md p-8 hover:-translate-y-1 transition"
          >

            <ScanLine className="text-blue-600 mb-5" size={38} />

            <h3 className="text-xl font-bold">
              Recognize Sign
            </h3>

            <p className="text-slate-500 mt-2">
              Start gesture recognition.
            </p>

          </div>

          <div
            onClick={() => navigate("/user/history")}
            className="cursor-pointer bg-white rounded-3xl shadow-md p-8 hover:-translate-y-1 transition"
          >

            <History className="text-green-600 mb-5" size={38} />

            <h3 className="text-xl font-bold">
              History
            </h3>

            <p className="text-slate-500 mt-2">
              View previous recognitions.
            </p>

          </div>

          <div
            onClick={() => navigate("/user/learn")}
            className="cursor-pointer bg-white rounded-3xl shadow-md p-8 hover:-translate-y-1 transition"
          >

            <BookOpen className="text-orange-500 mb-5" size={38} />

            <h3 className="text-xl font-bold">
              Learn ISL
            </h3>

            <p className="text-slate-500 mt-2">
              Practice Indian Sign Language.
            </p>

          </div>

          <div
            onClick={() => navigate("/user/feedback")}
            className="cursor-pointer bg-white rounded-3xl shadow-md p-8 hover:-translate-y-1 transition"
          >

            <MessageSquare className="text-purple-600 mb-5" size={38} />

            <h3 className="text-xl font-bold">
              Feedback
            </h3>

            <p className="text-slate-500 mt-2">
              Share your experience.
            </p>

          </div>

        </div>

        {/* Recent Activity */}

        <div className="mt-8 bg-white rounded-3xl shadow-md p-8">

          <h2 className="text-2xl font-bold">
            Recent Activity
          </h2>

          <div className="mt-6 text-center py-12 text-slate-400">

            No recognition history available yet.

          </div>

        </div>

      </div>

      {/* Bottom Navigation */}

      <Footer />
    </div>
    </>
  );
}

export default UserDashboard;