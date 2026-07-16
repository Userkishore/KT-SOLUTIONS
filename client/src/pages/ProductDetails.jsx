import { FaShoppingCart, FaBolt } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const ProductDetails = () => {
    const { addToCart } = useContext(CartContext);
    const product = {
  id: 1,
  name: "Dell Inspiron 15",
  price: 59999,
  image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900",
};

const handleAddToCart = () => {
  addToCart(product);
  console.log(product);
  alert("Product Added Successfully!");
};
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <div className="grid lg:grid-cols-2 gap-12">

        {/* Product Image */}

        <div>

          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900"
            alt="Laptop"
            className="w-full rounded-xl shadow-xl"
          />

        </div>

        {/* Product Information */}

        <div>

          <h1 className="text-4xl font-bold">
            Dell Inspiron 15
          </h1>

          <p className="text-gray-500 mt-2">
            High Performance Laptop for Students & Professionals
          </p>

          <h2 className="text-4xl text-blue-700 font-bold mt-6">
            ₹59,999
          </h2>

          <div className="mt-8">

            <h3 className="text-2xl font-semibold mb-3">
              Specifications
            </h3>

            <ul className="space-y-2 text-gray-700">

              <li>✔ Intel Core i5 13th Gen</li>

              <li>✔ 16GB DDR5 RAM</li>

              <li>✔ 512GB NVMe SSD</li>

              <li>✔ Intel Iris Graphics</li>

              <li>✔ Windows 11</li>

              <li>✔ Full HD Display</li>

            </ul>

          </div>

          <div className="flex gap-5 mt-10">

           <button
  onClick={handleAddToCart}
  className="flex items-center gap-3 bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition"
>
  <FaShoppingCart />
  Add To Cart
</button>

            <button  onClick={handleAddToCart}className="flex items-center gap-3 bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition">

              <FaBolt />

              Buy Now

            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProductDetails;