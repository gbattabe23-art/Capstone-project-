import { useEffect, useState } from "react";
import UserNavbar from "../../components/UserNavbar";

function Learn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("letters");

  return (
    <>
      <UserNavbar />

      <main className="min-h-screen bg-slate-100 py-7">
        <div className="mx-auto max-w-[1150px] origin-top scale-[0.95] px-5">
          {/* Heading */}

          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-slate-900">
              Learn Indian Sign Language
            </h1>

            <p className="mt-3 text-base text-slate-600">
              Browse visual guides to learn letters, digits and commonly used
              signs.
            </p>
          </div>

          {/* Tabs */}

          <div className="mb-8 flex justify-center gap-4">
            <button
              onClick={() => setActiveTab("letters")}
              className={`rounded-xl px-6 py-3 font-semibold transition ${
                activeTab === "letters"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-700 shadow"
              }`}
            >
              Alphabets
            </button>

            <button
              onClick={() => setActiveTab("digits")}
              className={`rounded-xl px-6 py-3 font-semibold transition ${
                activeTab === "digits"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-700 shadow"
              }`}
            >
              Digits
            </button>

            <button
              onClick={() => setActiveTab("words")}
              className={`rounded-xl px-6 py-3 font-semibold transition ${
                activeTab === "words"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-700 shadow"
              }`}
            >
              Words
            </button>
          </div>

          {/* ========================= */}
          {/* ALPHABETS */}
          {/* ========================= */}

          {activeTab === "letters" && (
            <div className="rounded-3xl bg-white p-5 shadow-lg">
              <div className="w-full overflow-hidden rounded-2xl bg-slate-50">
                <img
                  src="/images/isl_letters.png"
                  alt="Indian Sign Language Alphabet Chart"
                  className="block h-auto w-full rounded-2xl shadow-2xl"
                />
              </div>

              <div className="border-t bg-white py-5 text-center">
                <h2 className="text-2xl font-bold text-slate-800">
                  Indian Sign Language Alphabets
                </h2>

                <p className="mt-2 text-slate-500">
                  A visual guide to the signs used for letters A to Z.
                </p>
              </div>
            </div>
          )}

          {/* ========================= */}
          {/* DIGITS */}
          {/* ========================= */}

          {activeTab === "digits" && (
            <div className="rounded-3xl bg-white p-5 shadow-lg">
              <div className="w-full overflow-hidden rounded-2xl bg-slate-50">
                <img
                  src="/images/isl_digits.png"
                  alt="Indian Sign Language Digits Chart"
                  className="block h-auto w-full rounded-2xl shadow-2xl"
                />
              </div>

              <div className="border-t bg-white py-5 text-center">
                <h2 className="text-2xl font-bold text-slate-800">
                  Indian Sign Language Digits
                </h2>

                <p className="mt-2 text-slate-500">
                  A visual guide to the signs used for numbers 0 to 9.
                </p>
              </div>
            </div>
          )}

          {/* ========================= */}
          {/* WORDS */}
          {/* ========================= */}

          {activeTab === "words" && (
            <div className="flex min-h-[600px] items-center justify-center rounded-3xl bg-white shadow-md">
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100">
                  <span className="text-3xl font-bold text-blue-600">ISL</span>
                </div>

                <h2 className="mt-6 text-2xl font-bold text-slate-800">
                  Words Coming Soon
                </h2>

                <p className="mt-3 max-w-md text-slate-500">
                  Commonly used Indian Sign Language words will be added here
                  later.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default Learn;
