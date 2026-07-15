import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">

  <input
    type="text"
    placeholder="Search products, brands and more..."
    className="w-full px-4 py-3 border border-gray-300 rounded-l-lg outline-none text-gray-700"
  />

  <select
    className="px-4 border-y border-gray-300 text-gray-700 outline-none"
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
    className="bg-blue-700 px-5 text-white rounded-r-lg hover:bg-blue-800"
  >
    🔍
  </button>
  <button
  className="bg-blue-700 px-5 text-white rounded-r-lg hover:bg-blue-800"
>
  <FaSearch />
</button>

</div>
  <img
    src={logo}
    alt="KT SOLUTIONS"
    className="w-14 h-14 object-contain"
  />

  <div>
    <h1 className="text-2xl font-bold">
      KT SOLUTIONS
    </h1>

    <p className="text-xs text-gray-200">
      Computers • Laptops • CCTV
    </p>
  </div>
</div>

        {/* Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
        <li>
  <Link to="/" className="hover:text-yellow-300">
    Home
  </Link>
</li>

<li>
  <Link to="/products" className="hover:text-yellow-300">
    Products
  </Link>
</li>

<li>
  <Link to="/services" className="hover:text-yellow-300">
    Services
  </Link>
</li>

<li>
  <Link to="/build-pc" className="hover:text-yellow-300">
    Build PC
  </Link>
</li>

<li>
  <Link to="/contact" className="hover:text-yellow-300">
    Contact
  </Link>
</li>
</ul>
        {/* Search */}
        <input
          type="text"
          placeholder="Search Products..."
          className="hidden lg:block px-3 py-2 rounded-lg text-black"
        />

        {/* Icons */}
        <div className="flex gap-5 text-xl">
          <FaUser className="cursor-pointer hover:text-yellow-300" />
          <FaShoppingCart className="cursor-pointer hover:text-yellow-300" />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;