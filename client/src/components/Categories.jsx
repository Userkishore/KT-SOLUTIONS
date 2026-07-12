import {
  FaLaptop,
  FaDesktop,
  FaKeyboard,
  FaMouse,
  FaVideo,
  FaNetworkWired,
  FaTools,
  FaPrint,
} from "react-icons/fa";

const categories = [
  { name: "Laptops", icon: <FaLaptop size={35} /> },
  { name: "Desktop PCs", icon: <FaDesktop size={35} /> },
  { name: "Keyboards", icon: <FaKeyboard size={35} /> },
  { name: "Mouse", icon: <FaMouse size={35} /> },
  { name: "CCTV", icon: <FaVideo size={35} /> },
  { name: "Networking", icon: <FaNetworkWired size={35} /> },
  { name: "Printers", icon: <FaPrint size={35} /> },
  { name: "Services", icon: <FaTools size={35} /> },
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              <div className="text-blue-600 flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg">
                {item.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Categories;