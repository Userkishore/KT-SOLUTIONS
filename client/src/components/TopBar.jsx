import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-blue-950 text-white text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-2">

        {/* Left Side */}
        <div className="flex flex-wrap items-center gap-5">

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-yellow-400" />
            <span>
              Bus Stand Opposite, Below SVR Degree College, Macherla
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-yellow-400" />
            <span>ktsolutions2026@gmail.com</span>
          </div>

          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-yellow-400" />
            <span>9381079606</span>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 mt-2 md:mt-0">

          <a href="#" className="hover:text-yellow-400 transition">
            <FaFacebookF />
          </a>

          <a href="#" className="hover:text-pink-400 transition">
            <FaInstagram />
          </a>

          <a href="#" className="hover:text-green-400 transition">
            <FaWhatsapp />
          </a>

        </div>

      </div>
    </div>
  );
};

export default TopBar;