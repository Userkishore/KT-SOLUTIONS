const Hero = () => {
  return (
    <section className="bg-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">

        <div>
          <h1 className="text-5xl font-bold mb-6">
            AI Powered <br />
            Computer Store
          </h1>

          <p className="text-xl mb-6">
            Computers • Laptops • CCTV • Networking • Home Delivery
          </p>

          <div className="flex gap-4">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold">
              Shop Now
            </button>

            <button className="border border-white px-6 py-3 rounded-lg">
              Book Service
            </button>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=700"
          alt="Computer"
          className="w-125 rounded-xl shadow-2xl mt-10 lg:mt-0"
        />

      </div>
    </section>
  );
};

export default Hero;