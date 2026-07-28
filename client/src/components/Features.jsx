import {
  Brain,
  Hand,
  Languages,
  ShieldCheck,
  Activity,
  Smartphone,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: <Hand size={28} />,
      title: "Gesture Recognition",
      description:
        "Accurately captures Indian Sign Language gestures using flex sensors and motion tracking.",
    },
    {
      icon: <Brain size={28} />,
      title: "AI Prediction",
      description:
        "Machine learning instantly predicts the intended gesture with high accuracy.",
    },
    {
      icon: <Languages size={28} />,
      title: "Real-time Translation",
      description:
        "Converts recognized gestures into readable text within a fraction of a second.",
    },
    {
      icon: <Activity size={28} />,
      title: "Live Monitoring",
      description:
        "View glove activity and predictions in real time through the dashboard.",
    },
    {
      icon: <Smartphone size={28} />,
      title: "Responsive Dashboard",
      description:
        "Access recognition history, analytics and profile from any device.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Secure Data",
      description:
        "User information and recognition history remain protected using secure authentication.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Features
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Everything You Need
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Smart hardware meets intelligent software to provide seamless
            communication for Indian Sign Language users.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="leading-7 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
