import {
  FaLaptop,
  FaDesktop,
  FaTools,
  FaPrint,
  FaShieldAlt,
  FaWifi,
  FaDownload,
  FaMicrochip,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptop />,
    title: "Laptop Repair",
    desc: "Hardware & Software troubleshooting for all laptop brands.",
  },
  {
    icon: <FaDesktop />,
    title: "Custom PC Build",
    desc: "Gaming, Office and Professional desktop computer builds.",
  },
  {
    icon: <FaTools />,
    title: "Computer Service",
    desc: "Complete desktop servicing, cleaning and upgrades.",
  },
  {
    icon: <FaPrint />,
    title: "Printer Installation",
    desc: "Printer setup, driver installation and maintenance.",
  },
  {
    icon: <FaShieldAlt />,
    title: "CCTV Installation",
    desc: "Home and office CCTV installation with mobile viewing.",
  },
  {
    icon: <FaWifi />,
    title: "Networking",
    desc: "WiFi Router, Switch and LAN configuration.",
  },
  {
    icon: <FaDownload />,
    title: "OS Installation",
    desc: "Windows installation, drivers and software setup.",
  },
  {
    icon: <FaMicrochip />,
    title: "Hardware Upgrade",
    desc: "SSD, RAM, NVMe and Graphics Card upgrades.",
  },
];

const ServicesPage = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center">
          Our Services
        </h1>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Professional Computer & Laptop Services at Affordable Prices
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              <div className="text-blue-600 text-5xl mb-5 flex justify-center">
                {service.icon}
              </div>

              <h2 className="text-xl font-bold mb-3">
                {service.title}
              </h2>

              <p className="text-gray-600">
                {service.desc}
              </p>

              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
                Book Service
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ServicesPage;