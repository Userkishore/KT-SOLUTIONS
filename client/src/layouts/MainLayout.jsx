import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AIChatButton from "../components/AIChatButton";

const MainLayout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Header />
      <Navigation />

      <main>{children}</main>

      <Footer />
      <AIChatButton />
    </>
  );
};

export default MainLayout;