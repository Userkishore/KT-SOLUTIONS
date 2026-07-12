import testimonials from "../data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Customer Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
            >
              <p className="text-yellow-500 text-xl">
                ⭐⭐⭐⭐⭐
              </p>

              <p className="mt-4 text-gray-600 italic">
                "{item.comment}"
              </p>

              <h3 className="mt-6 text-xl font-bold">
                {item.name}
              </h3>

              <p className="text-gray-500">
                {item.location}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;