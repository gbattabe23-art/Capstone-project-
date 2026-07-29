import { useEffect, useState } from "react";
import UserNavbar from "../../components/UserNavbar";

function Learn() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("letters");

  // ===========================
  // LETTERS (A-Z)
  // Replace image: "" with your image URL later
  // ===========================

  const letters = [
    { label: "A", image: "" },
    { label: "B", image: "" },
    { label: "C", image: "" },
    { label: "D", image: "" },
    { label: "E", image: "" },
    { label: "F", image: "" },
    { label: "G", image: "" },
    { label: "H", image: "" },
    { label: "I", image: "" },
    { label: "J", image: "" },
    { label: "K", image: "" },
    { label: "L", image: "" },
    { label: "M", image: "" },
    { label: "N", image: "" },
    { label: "O", image: "" },
    { label: "P", image: "" },
    { label: "Q", image: "" },
    { label: "R", image: "" },
    { label: "S", image: "" },
    { label: "T", image: "" },
    { label: "U", image: "" },
    { label: "V", image: "" },
    { label: "W", image: "" },
    { label: "X", image: "" },
    { label: "Y", image: "" },
    { label: "Z", image: "" },
  ];

  // ===========================
  // DIGITS
  // Replace image: "" later
  // ===========================

  const digits = [
    { label: "0", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-bPO-xS3k6Ree2oRDxQWhSKrjYj_-XSCishOO892fXQ&s=10" },
    { label: "1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkYaz42xpWK1G_jdqzY3o0VV76d-rWRUdivkG0tjfTHuTojpTNDWVP1Y&s=10" },
    { label: "2", image: "" },
    { label: "3", image: "https://media.istockphoto.com/id/1182669389/photo/finger-spelling-number-6-in-asl-on-white-background-american-sign-language-concept.jpg?s=612x612&w=0&k=20&c=mAOEmbRNBUfeYuLRLixXWentnP-Ypyc68bsqXnnMggg=" },
    { label: "4", image: "" },
    { label: "5", image: "" },
    { label: "6", image: "" },
    { label: "7", image: "" },
    { label: "8", image: "" },
    { label: "9", image: "" },
  ];

  // ===========================
  // WORDS
  // Add more later
  // ===========================

  const words = [
    { label: "Hello", image: "" },
    { label: "Thank You", image: "" },
    { label: "Please", image: "" },
    { label: "Help", image: "" },
    { label: "Water", image: "" },
  ];

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
              Browse flashcards to learn letters, digits and commonly used
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

          {/* Flashcards */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {activeTab === "letters" &&
              letters.map((item) => (
                <div
                  key={item.label}
                  className="overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-72 items-center justify-center bg-slate-100">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.label}
                        className="h-full w-full object-contain p-4"
                      />
                    ) : (
                      <span className="text-slate-400">Image Here</span>
                    )}
                  </div>

                  <div className="border-t bg-white py-5 text-center text-2xl font-bold text-slate-800">
                    {item.label}
                  </div>
                </div>
              ))}
            {activeTab === "digits" &&
              digits.map((item) => (
                <div
                  key={item.label}
                  className="overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-72 items-center justify-center bg-slate-100">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.label}
                        className="h-full w-full object-contain p-4"
                      />
                    ) : (
                      <span className="text-slate-400">Image Here</span>
                    )}
                  </div>

                  <div className="border-t bg-white py-5 text-center text-2xl font-bold text-slate-800">
                    {item.label}
                  </div>
                </div>
              ))}

            {activeTab === "words" &&
              words.map((item) => (
                <div
                  key={item.label}
                  className="overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-72 items-center justify-center bg-slate-100">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.label}
                        className="h-full w-full object-contain p-4"
                      />
                    ) : (
                      <span className="text-slate-400">Image Here</span>
                    )}
                  </div>

                  <div className="border-t bg-white py-5 text-center text-xl font-bold text-slate-800">
                    {item.label}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Learn;
