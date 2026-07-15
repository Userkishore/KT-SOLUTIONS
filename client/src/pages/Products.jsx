import ProductSearch from "../components/ProductSearch";
import ProductFilter from "../components/ProductFilter";
import ProductGrid from "../components/ProductGrid";

const Products = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-10">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <h1 className="text-4xl font-bold text-center mb-3">
          Our Products
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Explore our latest Computers, Laptops, CCTV, Networking &
          Accessories.
        </p>

        {/* Search */}

        <ProductSearch />

        {/* Category Filter */}

        <ProductFilter />

        {/* Products */}

        <ProductGrid />

      </div>

    </section>
  );
};

export default Products;