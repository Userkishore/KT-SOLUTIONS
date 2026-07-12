import { FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-3xl font-bold">
          KT SOLUTIONS
        </h1>

        <input
          type="text"
          placeholder="Search Products..."
          className="w-96 p-2 rounded-lg text-black"
        />

        <div className="flex gap-8 text-2xl">

          <FaUser className="cursor-pointer hover:text-yellow-300"/>

          <FaShoppingCart className="cursor-pointer hover:text-yellow-300"/>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;