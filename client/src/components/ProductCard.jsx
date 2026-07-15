import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <h3 className="text-xl font-bold">
          {product.name}
        </h3>

        <p className="text-gray-500 mt-1">
          {product.category}
        </p>

        <h2 className="text-2xl text-blue-600 font-bold mt-3">
          {product.price}
        </h2>

        <div className="flex text-yellow-400 mt-2">
          {[...Array(product.rating)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>

        <div className="flex gap-3 mt-6">

          <button
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View Details
          </button>

          <button
            className="bg-green-600 text-white px-4 rounded-lg hover:bg-green-700 transition"
          >
            <FaShoppingCart />
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;