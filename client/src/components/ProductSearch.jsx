import { FaSearch } from "react-icons/fa";

const ProductSearch = () => {
  return (
    <div className="flex justify-center mb-8">

      <div className="relative w-full max-w-2xl">

        <input
          type="text"
          placeholder="Search Products..."
          className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />

      </div>

    </div>
  );
};

export default ProductSearch;