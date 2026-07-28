function Stats() {
  const stats = [
    {
      number: "95%",
      title: "Recognition Accuracy",
    },
    {
      number: "500+",
      title: "Supported Gestures",
    },
    {
      number: "<1s",
      title: "Translation Speed",
    },
    {
      number: "24/7",
      title: "Availability",
    },
  ];

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-3xl font-extrabold text-blue-600">
                {item.number}
              </h2>

              <p className="mt-2 text-sm font-medium text-slate-600">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
