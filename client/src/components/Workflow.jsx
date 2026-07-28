import { Cpu, Database, BrainCircuit, MonitorSmartphone } from "lucide-react";

function Workflow() {
  const steps = [
    {
      icon: <Cpu size={28} />,
      title: "Capture Gesture",
      description:
        "Flex sensors and MPU6050 continuously capture hand movements and finger positions.",
    },
    {
      icon: <Database size={28} />,
      title: "Send Sensor Data",
      description:
        "The Raspberry Pi sends processed sensor values securely to the backend server.",
    },
    {
      icon: <BrainCircuit size={28} />,
      title: "AI Recognition",
      description:
        "The machine learning model predicts the performed Indian Sign Language gesture.",
    },
    {
      icon: <MonitorSmartphone size={28} />,
      title: "Display Result",
      description:
        "Recognized text appears instantly on the web dashboard for smooth communication.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Workflow
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            How It Works
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            From gesture capture to AI prediction, every step happens within
            seconds to provide fast and accurate communication.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                {step.icon}
              </div>

              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                {step.title}
              </h3>

              <p className="leading-7 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Workflow;
