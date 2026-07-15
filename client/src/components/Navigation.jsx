import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Navigation = () => {
  const [shopOpen, setShopOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto">

        <ul className="flex justify-center items-center gap-10 py-4 font-medium">

          {/* Home */}
          <li>
            <Link to="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>

          {/* Shop */}
          <li
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button className="flex items-center gap-2 hover:text-yellow-400">
              Shop
              <FaChevronDown className="text-xs" />
            </button>

            {shopOpen && (
              <div className="absolute top-10 left-0 bg-white text-black rounded-lg shadow-xl w-60 z-50">

                <Link
                  to="/products"
                  className="block px-5 py-3 hover:bg-blue-100"
                >
                  Laptops
                </Link>

                <Link
                  to="/products"
                  className="block px-5 py-3 hover:bg-blue-100"
                >
                  Desktop PCs
                </Link>

                <Link
                  to="/products"
                  className="block px-5 py-3 hover:bg-blue-100"
                >
                  Gaming PCs
                </Link>

                <Link
                  to="/products"
                  className="block px-5 py-3 hover:bg-blue-100"
                >
                  Printers
                </Link>

                <Link
                  to="/products"
                  className="block px-5 py-3 hover:bg-blue-100"
                >
                  CCTV Cameras
                </Link>

                <Link
                  to="/products"
                  className="block px-5 py-3 hover:bg-blue-100"
                >
                  Routers & Switches
                </Link>

                <Link
                  to="/products"
                  className="block px-5 py-3 hover:bg-blue-100"
                >
                  SSD & NVMe
                </Link>

              </div>
            )}
          </li>

          {/* Services */}
          <li
            className="relative"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >
            <button className="flex items-center gap-2 hover:text-yellow-400">
              Services
              <FaChevronDown className="text-xs" />
            </button>

            {serviceOpen && (
              <div className="absolute top-10 left-0 bg-white text-black rounded-lg shadow-xl w-64 z-50">

                <Link
                  to="/services"
                  className="block px-5 py-3 hover:bg-blue-100"
                >
                  Laptop Repair
                </Link>

                <Link
                  to="/services"
                  className="block px-5 py-3 hover:bg-blue-100"
                >
                  Desktop Repair
                </Link>

                <Link
                  to="/services"
                  className="block px-5 py-3 hover:bg-blue-100"
                >
                  Windows Installation
                </Link>

                <Link
                  to="/services"
                  className="block px-5 py-3 hover:bg-blue-100"
                >
                  CCTV Installation
                </Link>

                <Link
                  to="/services"
                  className="block px-5 py-3 hover:bg-blue-100"
                >
                  Networking
                </Link>

                <Link
                  to="/services"
                  className="block px-5 py-3 hover:bg-blue-100"
                >
                  Printer Service
                </Link>

              </div>
            )}
          </li>

          {/* Build PC */}
          <li>
            <Link to="/build-pc" className="hover:text-yellow-400">
              Build Your PC
            </Link>
          </li>

          {/* CCTV */}
          <li>
            <Link to="/products" className="hover:text-yellow-400">
              CCTV
            </Link>
          </li>

          {/* Networking */}
          <li>
            <Link to="/products" className="hover:text-yellow-400">
              Networking
            </Link>
          </li>

          {/* Contact */}
          <li>
            <Link to="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </li>

          {/* Track Order */}
          <li>
            <Link to="/track-order" className="hover:text-yellow-400">
              Track Order
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
};

export default Navigation;