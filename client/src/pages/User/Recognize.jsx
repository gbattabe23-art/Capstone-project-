import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaPlay,
  FaStop,
  FaTrash,
  FaHandPaper,
  FaCommentDots,
  FaCheckCircle,
  FaClock,
  FaCircle,
} from "react-icons/fa";

import UserNavbar from "../../components/UserNavbar";

function Recognize() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <UserNavbar />

      <main className="min-h-screen bg-slate-100 py-8">
        <div className="mx-auto max-w-5xl origin-top scale-[0.94] px-5">
          {/* Hero Section */}

          <div className="mb-8 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div>
              <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Live Recognition
              </span>

              <h1 className="mt-4 text-3xl font-bold text-slate-900">
                Real-Time Sign Recognition
              </h1>

              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Connect your Smart ISL Glove and start recognizing letters,
                numbers and words instantly using our AI-powered recognition
                model.
              </p>
            </div>

            <div className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
              <div className="flex items-center gap-2 text-slate-700">
                <FaCircle className="text-[10px] text-green-500" />
                <span className="font-semibold">Idle</span>
              </div>
            </div>
          </div>

          {/* Recognition Panel */}

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Live Recognition
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  CNN Model • Real-Time Inference
                </p>
              </div>

              <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
                Idle
              </div>
            </div>

            {/* Recognition Area */}

            <div className="flex h-72 flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50">
              <div className="rounded-3xl bg-white p-7 shadow">
                <FaHandPaper size={48} className="text-blue-500" />
              </div>

              <h3 className="mt-7 text-2xl font-semibold text-slate-700">
                Press Start Recognition
              </h3>

              <p className="mt-3 text-sm text-slate-500">
                Waiting for recognition to begin...
              </p>
            </div>
            {/* Status Chips */}

            <div className="mt-7 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
                <FaCheckCircle />
                Device Connected
              </div>

              <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 font-semibold text-slate-700">
                <FaClock />
                Recognition Ready
              </div>

              <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 font-semibold text-slate-700">
                <FaClock />
                Awaiting Input
              </div>
            </div>

            {/* Controls */}

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <button className="flex items-center justify-center gap-3 rounded-2xl bg-blue-600 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700">
                <FaPlay />
                Start
              </button>

              <button className="flex items-center justify-center gap-3 rounded-2xl border border-red-200 bg-red-50 py-4 text-lg font-semibold text-red-500 transition-all duration-300 hover:bg-red-100">
                <FaStop />
                Stop
              </button>

              <button className="flex items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-slate-100 py-4 text-lg font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-200">
                <FaTrash />
                Clear
              </button>
            </div>

            {/* Recognition Result */}

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <h3 className="text-lg font-bold text-slate-900">
                  Recognition Result
                </h3>

                <div className="mt-6 flex h-40 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-white">
                  <span className="text-6xl font-bold tracking-wider text-blue-600">
                    —
                  </span>
                </div>

                <p className="mt-4 text-center text-sm text-slate-500">
                  The recognized letter, digit or word will appear here.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">
                  Recognition Details
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                    <span className="font-medium text-slate-600">
                      Confidence
                    </span>

                    <span className="font-bold text-blue-600">-- %</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                    <span className="font-medium text-slate-600">Model</span>

                    <span className="font-semibold text-slate-800">CNN</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                    <span className="font-medium text-slate-600">Status</span>

                    <span className="font-semibold text-green-600">
                      Connected
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                    <span className="font-medium text-slate-600">
                      Last Updated
                    </span>

                    <span className="font-semibold text-slate-800">
                      --:--:--
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feedback Button */}

            <div className="mt-10">
              <Link
                to="/user/feedback"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-green-600 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
              >
                <FaCommentDots />
                Give Feedback
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Recognize;
