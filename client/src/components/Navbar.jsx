import { FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <h1 className="text-3xl font-bold">
          KT SOLUTIONS
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li className="cursor-pointer hover:text-yellow-300">Home</li>
          <li className="cursor-pointer hover:text-yellow-300">Products</li>
          <li className="cursor-pointer hover:text-yellow-300">Services</li>
          <li className="cursor-pointer hover:text-yellow-300">Build PC</li>
          <li className="cursor-pointer hover:text-yellow-300">Contact</li>
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