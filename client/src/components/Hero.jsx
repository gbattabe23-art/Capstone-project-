import { ArrowRight, PlayCircle } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 lg:flex lg:items-center lg:justify-between">
        {/* Left */}
        <div className="max-w-2xl">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            AI Powered Indian Sign Language Recognition
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
            Breaking Communication
            <span className="block text-blue-600">
              Barriers with Smart Gloves
            </span>
          </h1>

          <p className="mt-6 text-base leading-7 text-slate-600 lg:text-lg">
            Our intelligent wearable glove translates Indian Sign Language
            gestures into readable text using sensor technology and Artificial
            Intelligence, enabling smoother communication between deaf and
            hearing communities.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">
              <PlayCircle size={18} />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right */}

        <div className="mt-14 flex justify-center lg:mt-0">
          <div className="flex h-80 w-80 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-2xl lg:h-96 lg:w-96">
            <span className="text-center text-xl font-bold text-white">
              Smart Glove
              <br />
              Illustration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
