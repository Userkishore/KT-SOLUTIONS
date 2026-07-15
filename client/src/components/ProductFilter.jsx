const categories = [
  "All",
  "Laptop",
  "Desktop",
  "Keyboard",
  "Mouse",
  "Printer",
  "Networking",
  "CCTV",
];

const ProductFilter = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">

      {categories.map((category, index) => (
        <button
          key={index}
          className="bg-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition duration-300"
        >
          {category}
        </button>
      ))}

    </div>
  );
};

export default ProductFilter;