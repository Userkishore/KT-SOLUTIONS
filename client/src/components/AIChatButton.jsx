import { useState } from "react";
import { FaRobot, FaTimes } from "react-icons/fa";

const AIChatButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition z-50"
      >
        {open ? <FaTimes size={24} /> : <FaRobot size={24} />}
      </button>

      {/* Chat Popup */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-xl shadow-2xl border overflow-hidden z-50">

          <div className="bg-blue-600 text-white p-4 font-bold">
            🤖 KT AI Assistant
          </div>

          <div className="p-4">

            <p className="mb-4">
              Hello 👋 <br />
              Welcome to <b>KT SOLUTIONS</b>
            </p>

            <div className="space-y-3">

              <button className="w-full bg-gray-100 hover:bg-blue-100 rounded-lg p-3 text-left">
                💻 Buy a Laptop
              </button>

              <button className="w-full bg-gray-100 hover:bg-blue-100 rounded-lg p-3 text-left">
                🛠 Book Repair Service
              </button>

              <button className="w-full bg-gray-100 hover:bg-blue-100 rounded-lg p-3 text-left">
                📦 Track Order
              </button>

              <button className="w-full bg-gray-100 hover:bg-blue-100 rounded-lg p-3 text-left">
                📞 Contact Support
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default AIChatButton;