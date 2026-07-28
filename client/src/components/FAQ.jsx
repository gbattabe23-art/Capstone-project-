import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FAQ() {
  const faqs = [
    {
      question: "What is the Smart ISL Glove?",
      answer:
        "The Smart ISL Glove is a wearable device that recognizes Indian Sign Language gestures and converts them into readable text using AI and sensor technology.",
    },
    {
      question: "Who can use this system?",
      answer:
        "It is designed primarily for deaf and hard-of-hearing individuals, educators, researchers, and anyone interested in improving communication through ISL.",
    },
    {
      question: "Does it work in real time?",
      answer:
        "Yes. Sensor data is processed instantly, allowing gestures to be translated into text within a fraction of a second.",
    },
    {
      question: "What technologies are used?",
      answer:
        "The project uses Flex Sensors, MPU6050, Raspberry Pi, Machine Learning, Express.js, React.js, and MongoDB.",
    },
    {
      question: "Can I view my previous recognitions?",
      answer:
        "Yes. Users can access recognition history and activity through their personal dashboard.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            FAQs
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Find answers to the most common questions about the Smart ISL Glove.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-slate-50"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  size={22}
                />
              </button>

              {activeIndex === index && (
                <div className="border-t border-slate-200 px-6 py-5 text-slate-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
