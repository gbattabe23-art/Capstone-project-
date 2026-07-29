import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

function FeedbackFAQ() {
  const faqs = [
    {
      question: "Why should I submit feedback?",
      answer:
        "Your feedback helps improve the Smart ISL Glove by identifying incorrect recognitions. This allows developers to enhance the AI model and increase recognition accuracy over time.",
    },
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
      question: "What if I accidentally submit incorrect feedback?",
      answer:
        "Don't worry. Administrators review submitted feedback before using it for future improvements. Occasional mistakes will not negatively affect the system.",
    },
    {
      question: "Can I report feedback for both letters and words?",
      answer:
        "Yes. Feedback can be submitted for individual letters, numbers, or complete words recognized by the Smart ISL Glove.",
    },
    {
      question: "How does feedback improve the system?",
      answer:
        "Collected feedback helps identify patterns of incorrect predictions. These insights are used to refine the machine learning model, resulting in better recognition accuracy for future users.",
    },
    {
      question: "Does submitting feedback immediately change the AI model?",
      answer:
        "No. Feedback is first reviewed and validated before being used to improve future versions of the recognition model.",
    },
    {
      question: "Should I submit feedback for every incorrect prediction?",
      answer:
        "Yes. Every genuine incorrect prediction provides valuable information that helps improve the reliability and performance of the recognition system.",
    },
    {
      question: "How many letters or words should I submit at once?",
      answer:
        "Please submit feedback for only one letter, one number, or one word per submission. This keeps the feedback clear and easier to analyze.",
    },
    {
      question:
        "Can feedback help improve recognition in different environments?",
      answer:
        "Yes. Feedback collected under different lighting conditions, hand positions, and glove orientations helps improve the robustness of the recognition model.",
    },
    {
      question: "Who reviews the submitted feedback?",
      answer:
        "Only authorized administrators and developers responsible for maintaining the Smart ISL Glove system review feedback for quality improvement purposes.",
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
