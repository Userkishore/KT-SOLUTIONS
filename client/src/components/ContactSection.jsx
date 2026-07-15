import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Contact KT SOLUTIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-blue-700 rounded-xl p-6 text-center">
            <FaPhoneAlt className="text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p>9381079606</p>
          </div>

          <div className="bg-blue-700 rounded-xl p-6 text-center">
            <FaEnvelope className="text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p>ktsolutions2026@gmail.com</p>
          </div>

          <div className="bg-blue-700 rounded-xl p-6 text-center">
            <FaMapMarkerAlt className="text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p>
              Bus Stand Opposite
              <br />
              Below SVR Degree College
              <br />
              Macherla
            </p>
          </div>

          <div className="bg-blue-700 rounded-xl p-6 text-center">
            <FaClock className="text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Working Hours</h3>
            <p>
              Monday - Sunday
              <br />
              9:00 AM - 9:00 PM
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;