import { useEffect, useState } from "react";

const slides = [
  {
    image: "/banners/banner1.png",
    title: "Build Your Dream PC",
    subtitle: "High Performance Gaming & Office PCs",
  },
  {
    image: "/banners/banner2.png",
    title: "Latest Laptops",
    subtitle: "Dell • HP • Lenovo • ASUS",
  },
  {
    image: "/banners/banner3.png",
    title: "CCTV & Networking",
    subtitle: "Secure Your Home & Business",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-500px overflow-hidden">

      <img
        src={slides[current].image}
        alt={slides[current].title}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex items-center">

        <div className="max-w-7xl mx-auto px-10 text-white">

          <h1 className="text-5xl font-bold mb-4">
            {slides[current].title}
          </h1>

          <p className="text-xl mb-8">
            {slides[current].subtitle}
          </p>

          <div className="flex gap-4">

            <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500">
              Shop Now
            </button>

            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200">
              Book Service
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSlider;