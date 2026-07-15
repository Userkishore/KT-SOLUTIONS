import { FaLaptop, FaTools, FaShieldAlt, FaTruck } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-gray-100 py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-6">
          About KT SOLUTIONS
        </h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg">
          KT SOLUTIONS is your trusted destination for Computers, Laptops,
          CCTV Systems, Networking Products, Printers and Professional Repair
          Services. We provide genuine products, affordable pricing and expert
          technical support.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-14">

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-8">
              Our mission is to provide high-quality computer products,
              reliable repair services and the best customer support to
              individuals, students, businesses and organizations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Why Choose Us?
            </h2>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <FaLaptop className="text-blue-600 text-3xl" />
                <span>Latest Computers & Laptops</span>
              </div>

              <div className="flex items-center gap-4">
                <FaTools className="text-blue-600 text-3xl" />
                <span>Professional Laptop & Desktop Repair</span>
              </div>

              <div className="flex items-center gap-4">
                <FaShieldAlt className="text-blue-600 text-3xl" />
                <span>100% Genuine Products</span>
              </div>

              <div className="flex items-center gap-4">
                <FaTruck className="text-blue-600 text-3xl" />
                <span>Fast Home Delivery</span>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;