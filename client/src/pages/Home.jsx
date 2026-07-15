
import HeroSlider from "../components/HeroSlider";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import Brands from "../components/Brands";
import Testimonials from "../components/Testimonials";
import AIChatButton from "../components/AIChatButton";
import ContactSection from "../components/ContactSection";
import GoogleMap from "../components/GoogleMap";
const Home = () => {
  return (
    <>
      <HeroSlider />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Brands />
      <Testimonials />
      <AIChatButton />
      <ContactSection />
      <GoogleMap />
      
    </>
  );
};

export default Home;