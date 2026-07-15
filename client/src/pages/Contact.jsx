import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-4">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mb-12">
          We'd love to hear from you. Get in touch with KT SOLUTIONS.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Form */}

          <div className="bg-white p-8 rounded-xl shadow-lg">

            <h2 className="text-2xl font-bold mb-6">
              Send Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg p-3"
              />

              <textarea
                rows="5"
                placeholder="Message"
                className="w-full border rounded-lg p-3"
              ></textarea>

              <button
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Details */}

          <div className="bg-white p-8 rounded-xl shadow-lg">

            <h2 className="text-2xl font-bold mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-blue-600 text-2xl" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p>9381079606</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-600 text-2xl" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p>ktsolutions2026@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p>
                    Bus Stand Opposite,
                    <br />
                    Below SVR Degree College,
                    <br />
                    Macherla
                  </p>
                </div>
              </div>

            </div>

            {/* Google Map */}

            <div className="mt-8 rounded-xl overflow-hidden">

              <iframe
                title="KT Solutions"
                src="https://www.google.com/maps?q=Macherla&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;