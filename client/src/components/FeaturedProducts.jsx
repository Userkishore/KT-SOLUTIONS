import products from "../data/products";

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold">
                  {product.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {product.category}
                </p>

                <p className="text-blue-600 text-2xl font-bold mt-2">
                  {product.price}
                </p>

                <p className="text-yellow-500 mt-2">
                  ⭐⭐⭐⭐⭐
                </p>

                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Add To Cart
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;