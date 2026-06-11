import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="sticky-top shadow-sm z-3">
        <TopBar />
        <Navbar />
      </div>

      <main>
        <Hero />
        <div id="about"><Intro /></div>
        <div id="services"><Services /></div>
        <div id="reviews"><Testimonials /></div>
      </main>
      
      <Footer />
    </>
  );
};

export default Home;