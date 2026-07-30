import AdminSidebar from "../../components/AdminSidebar";
import AdminTopbar from "../../components/AdminTopbar";
import {
  Users,
  ScanLine,
  MessageSquare,
  BookOpen,
} from "lucide-react";

function Dashboard() {
  const stats = [
    {
      title: "Registered Users",
      value: "--",
      subtitle: "No users available",
      icon: Users,
      color: "bg-blue-600",
    },
    {
      title: "Total Recognitions",
      value: "--",
      subtitle: "No recognition data",
      icon: ScanLine,
      color: "bg-purple-600",
    },
    {
      title: "Feedback Received",
      value: "--",
      subtitle: "No feedback yet",
      icon: MessageSquare,
      color: "bg-orange-500",
    },
    {
      title: "Learning Modules",
      value: "--",
      subtitle: "No modules available",
      icon: BookOpen,
      color: "bg-emerald-600",
    },
  ];

  return (
    <div className="flex bg-slate-100 min-h-screen">

      <AdminSidebar />

      <div className="flex-1">

       <AdminTopbar title="Dashboard" />

        <div className="p-8">

          {/* Stats */}

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {stats.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="rounded-3xl bg-white p-6 shadow-md hover:shadow-lg transition"
                >

                  <div className="flex justify-between items-center">

                    <div>

                      <p className="text-mt text-slate-500">
                        {card.title}
                      </p>

                      <h2 className="mt-3 text-2xl font-bold">
                        {card.value}
                      </h2>

                      <p className="mt-3 text-sm text-slate-400">
                        {card.subtitle}
                      </p>

                    </div>

                    <div
                      className={`w-14 h-14 rounded-xl ${card.color} flex items-center justify-center text-white`}
                    >
                      <Icon size={26} />
                    </div>

                  </div>

                </div>
              );
            })}

          </div>

          {/* Recent Recognition Activity */}

          <div className="mt-8 rounded-3xl bg-white p-8 shadow-md">

            <h2 className="text-mt font-semibold">
              Recent Recognition Activity
            </h2>

            <div className="mt-10 text-center text-slate-400">

              No recognition records available.

            </div>

          </div>

          {/* Bottom Grid */}

          <div className="mt-8 grid gap-6 lg:grid-cols-2">

            <div className="rounded-3xl bg-white p-8 shadow-md">

              <h2 className="text-mt font-semibold">
                Recent Users
              </h2>

              <div className="mt-10 text-center text-slate-400">

                No users registered yet.

              </div>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-md">

              <h2 className="text-lg font-semibold">
                Latest Feedback
              </h2>

              <div className="mt-10 text-center text-slate-400">

                No feedback received yet.

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;