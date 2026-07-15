import { useState } from "react";

const BuildPC = () => {
  const [cpu, setCpu] = useState("");
  const [ram, setRam] = useState("");
  const [storage, setStorage] = useState("");
  const [gpu, setGpu] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
PC Configuration

CPU: ${cpu}
RAM: ${ram}
Storage: ${storage}
GPU: ${gpu}
    `);
  };

  return (
    <section className="bg-gray-100 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Build Your Dream PC
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* CPU */}
          <div>
            <label className="block font-semibold mb-2">Processor</label>

            <select
              value={cpu}
              onChange={(e) => setCpu(e.target.value)}
              className="w-full border rounded-lg p-3"
            >
              <option>Select Processor</option>
              <option>Intel Core i5</option>
              <option>Intel Core i7</option>
              <option>Intel Core i9</option>
              <option>AMD Ryzen 5</option>
              <option>AMD Ryzen 7</option>
            </select>
          </div>

          {/* RAM */}
          <div>
            <label className="block font-semibold mb-2">RAM</label>

            <select
              value={ram}
              onChange={(e) => setRam(e.target.value)}
              className="w-full border rounded-lg p-3"
            >
              <option>Select RAM</option>
              <option>8 GB</option>
              <option>16 GB</option>
              <option>32 GB</option>
              <option>64 GB</option>
            </select>
          </div>

          {/* Storage */}
          <div>
            <label className="block font-semibold mb-2">Storage</label>

            <select
              value={storage}
              onChange={(e) => setStorage(e.target.value)}
              className="w-full border rounded-lg p-3"
            >
              <option>Select Storage</option>
              <option>256 GB SSD</option>
              <option>512 GB SSD</option>
              <option>1 TB SSD</option>
              <option>2 TB HDD</option>
            </select>
          </div>

          {/* GPU */}
          <div>
            <label className="block font-semibold mb-2">Graphics Card</label>

            <select
              value={gpu}
              onChange={(e) => setGpu(e.target.value)}
              className="w-full border rounded-lg p-3"
            >
              <option>Select GPU</option>
              <option>NVIDIA RTX 4060</option>
              <option>NVIDIA RTX 4070</option>
              <option>AMD RX 7700 XT</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Build My PC
          </button>

        </form>
      </div>
    </section>
  );
};

export default BuildPC;