import { Link } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-blue-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <img
            src="/logo.png"
            alt="KT SOLUTIONS"
            className="h-20 w-20 rounded-full object-cover border-2 border-white"
          />

          <div>
            <h1 className="text-3xl font-bold text-white">
              KT SOLUTIONS
            </h1>

            <p className="text-sm text-blue-100">
              Computers • Laptops • CCTV
            </p>
          </div>

        </Link>

        {/* Search Section */}

        <div className="hidden lg:flex flex-1 max-w-3xl rounded-lg overflow-hidden shadow-xl">

          <input
            type="text"
            placeholder="Search products, brands and more..."
            className="
              flex-1
              px-5
              py-3
              bg-white
              text-gray-800
              placeholder-gray-500
              border-2
              border-gray-300
              outline-none
              focus:border-yellow-400
              focus:ring-2
              focus:ring-yellow-300
              transition-all
            "
          />

          <select
            className="
              px-4
              bg-white
              text-gray-700
              border-y-2
              border-gray-300
              outline-none
              cursor-pointer
            "
          >
            <option>All Categories</option>
            <option>Laptop</option>
            <option>Desktop</option>
            <option>Keyboard</option>
            <option>Mouse</option>
            <option>CCTV</option>
            <option>Networking</option>
            <option>Printer</option>
          </select>

          <button
            className="
              bg-yellow-400
              px-6
              border-2
              border-yellow-400
              hover:bg-yellow-500
              transition-all
            "
          >
            <FaSearch className="text-blue-900 text-xl" />
          </button>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-8 text-white">

          <Link
            to="/login"
            className="flex flex-col items-center hover:text-yellow-300 transition"
          >
            <FaUser className="text-2xl" />
            <span className="text-xs">Login</span>
          </Link>

          <Link
            to="/wishlist"
            className="flex flex-col items-center hover:text-yellow-300 transition"
          >
            <FaHeart className="text-2xl" />
            <span className="text-xs">Wishlist</span>
          </Link>

          <Link
            to="/cart"
            className="relative flex flex-col items-center hover:text-yellow-300 transition"
          >
            <FaShoppingCart className="text-2xl" />

            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] rounded-full px-1">
              0
            </span>

            <span className="text-xs">Cart</span>
          </Link>

        </div>

      </div>
    </header>
  );
};

export default Header;