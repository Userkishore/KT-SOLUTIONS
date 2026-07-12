const brands = [
  "Dell",
  "HP",
  "Lenovo",
  "Asus",
  "Acer",
  "Logitech",
];

const Brands = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Trusted Brands
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {brands.map((brand) => (
            <div
              key={brand}
              className="bg-gray-100 rounded-xl shadow-md p-8 text-center text-xl font-bold hover:bg-blue-600 hover:text-white transition"
            >
              {brand}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Brands;