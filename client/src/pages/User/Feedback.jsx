import { useEffect } from "react";
import { FaClipboardList, FaInfoCircle } from "react-icons/fa";
import UserNavbar from "../../components/UserNavbar";
import FeedbackFAQ from "../../components/FeedbackFAQ";

function Feedback() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <>
      <UserNavbar />

      <main className="min-h-screen bg-slate-100 py-7">
        <div className="mx-auto max-w-[900px] origin-top scale-[0.95] px-5">
          {/* Hero Section */}

          <div className="mb-8 text-center">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Recognition Feedback
            </span>

            <h1 className="mt-5 text-3xl font-bold text-slate-900">
              Help Us Improve Recognition Accuracy
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600">
              Found an incorrect prediction? Your feedback helps improve the
              Smart ISL Glove's recognition accuracy and enhances the experience
              for every user.
            </p>
          </div>

          {/* Information Card */}

          <div className="mb-8 rounded-3xl border border-blue-200 bg-blue-50 p-7 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-blue-600 p-3 text-white shadow-md">
                <FaInfoCircle size={22} />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Every Feedback Matters
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Please submit feedback for only one letter, digit or word at a
                  time. Accurate feedback helps us identify recognition errors
                  and continuously improve the AI model.
                </p>
              </div>
            </div>
          </div>

          {/* Feedback Form */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-blue-600 p-3 text-white shadow-md">
                <FaClipboardList size={22} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Submit Feedback
                </h2>

                <p className="text-slate-500">
                  Help us understand incorrect recognitions.
                </p>
              </div>
            </div>

            <form className="space-y-7">
              {/* Original Sign */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Original Letter / Digit / Word *
                </label>

                <input
                  type="text"
                  placeholder="Example: A or Hello"
                  maxLength={25}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 transition duration-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                />

                <p className="mt-2 text-sm text-slate-500">
                  Submit one letter, digit or word only.
                </p>
              </div>

              {/* Predicted Sign */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Predicted Letter / Digit / Word *
                </label>

                <input
                  type="text"
                  placeholder="Example: D or Help"
                  maxLength={25}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 transition duration-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                />

                <p className="mt-2 text-sm text-slate-500">
                  Enter exactly what the system predicted.
                </p>
              </div>

              {/* Additional Comments */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Additional Comments (Optional)
                </label>

                <textarea
                  rows={5}
                  placeholder="Describe anything that might have affected the recognition (lighting, glove position, hand movement, etc.)"
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 transition duration-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                ></textarea>

                <p className="mt-2 text-sm text-slate-500">
                  Provide any additional information that may help us understand
                  the issue.
                </p>
              </div>

              {/* Submit Button */}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
              >
                <FaClipboardList size={18} />
                <span>Submit Feedback</span>
              </button>
            </form>
          </div>

          {/* FAQ Section */}

          <section className="mt-12">
            <FeedbackFAQ />
          </section>
        </div>
      </main>
    </>
  );
}

export default Feedback;
