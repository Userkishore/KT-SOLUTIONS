import {
  FaTruck,
  FaTools,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaTruck />,
    title: "Home Delivery",
    desc: "Fast Delivery within 20 KM",
  },
  {
    icon: <FaTools />,
    title: "Expert Service",
    desc: "Professional Laptop & PC Repair",
  },
  {
    icon: <FaShieldAlt />,
    title: "Genuine Products",
    desc: "100% Original Products with Warranty",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Friendly Customer & Technical Support",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose KT SOLUTIONS?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl text-blue-600 mb-5 flex justify-center">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;