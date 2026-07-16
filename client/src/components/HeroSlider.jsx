import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    image: "/banners/banner1.png",
    title: "Build Your Dream PC",
    subtitle: "Gaming PCs • Office PCs • Workstations",
  },
  {
    image: "/banners/banner2.png",
    title: "Latest Laptop Collection",
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
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[500px] overflow-hidden">

      {/* Banner */}
      <img
        src={slides[current].image}
        alt={slides[current].title}
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center">

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

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full"
      >
        <FaChevronLeft />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full"
      >
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full ${
              current === index ? "bg-yellow-400" : "bg-white"
            }`}
          />
        ))}

      </div>

    </section>
  );
};

export default HeroSlider;