import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BuildPC from "./pages/BuildPC";
import ServicesPage from "./pages/ServicesPage";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <MainLayout>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/build-pc" element={<BuildPC />} />
  <Route path="/services" element={<ServicesPage />} />
  <Route path="/wishlist" element={<Wishlist />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/cart" element={<Cart />} />
</Routes>
    </MainLayout>
  );
}

export default App;