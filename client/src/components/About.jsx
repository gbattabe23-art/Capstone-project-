import { CheckCircle2 } from "lucide-react";

function About() {
  const points = [
    "Designed specifically for Indian Sign Language (ISL).",
    "Bridges the communication gap between deaf and hearing communities.",
    "Combines wearable sensors with Artificial Intelligence.",
    "Provides fast, reliable, and real-time text translation.",
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left Side */}
        <div>
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            About The Project
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Empowering Communication Through Technology
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            The Smart ISL Glove is an assistive technology project developed to
            make communication easier for people who use Indian Sign Language.
            Using wearable sensors, Raspberry Pi, and Artificial Intelligence,
            the glove recognizes hand gestures and instantly converts them into
            readable text.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our vision is to reduce communication barriers and create a more
            inclusive environment where conversations become natural,
            accessible, and effortless for everyone.
          </p>

          <div className="mt-8 space-y-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 size={22} className="mt-1 text-blue-600" />

                <p className="text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="flex h-96 w-full max-w-md items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-400 shadow-2xl">
            <div className="text-center text-white">
              <h3 className="text-3xl font-bold">Smart ISL Glove</h3>

              <p className="mt-4 text-lg opacity-90">
                Illustration / Product Image
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
