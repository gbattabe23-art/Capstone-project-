import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

function FeedbackFAQ() {
  const faqs = [
    {
      question: "How is my feedback used?",
      answer:
        "Submitted feedback is reviewed by the system administrators and development team to identify recognition errors, improve datasets, and train future versions of the recognition model.",
    },
    {
      question: "Will my personal information be stored?",
      answer:
        "No. Your feedback focuses only on recognition results. Personal information is not included with your feedback unless you explicitly provide it.",
    },
    {
      question: "Can I submit feedback multiple times?",
      answer:
        "Yes. You can submit feedback whenever you notice an incorrect recognition. Multiple submissions help improve different scenarios and recognition cases.",
    },
    {
      question: "Can I report feedback for both letters and words?",
      answer:
        "Yes. Feedback can be submitted for individual letters, numbers, or complete words recognized by the Smart ISL Glove.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="mt-16">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-3 rounded-full bg-blue-100 px-5 py-2 text-blue-700">
          <FaQuestionCircle />
          <span className="font-semibold">Frequently Asked Questions</span>
        </div>

        <h2 className="mt-5 text-3xl font-bold text-slate-900">
          Feedback FAQs
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-slate-600 leading-7">
          Find answers to the most common questions about submitting feedback
          and how your contributions help improve the Smart ISL Glove.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-slate-50"
            >
              <span className="pr-5 text-lg font-semibold text-slate-800">
                {faq.question}
              </span>

              <span className="text-blue-600">
                {activeIndex === index ? (
                  <FaChevronUp size={18} />
                ) : (
                  <FaChevronDown size={18} />
                )}
              </span>
            </button>

            {activeIndex === index && (
              <div className="border-t border-slate-200 bg-slate-50 px-6 py-5">
                <p className="leading-7 text-slate-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeedbackFAQ;
