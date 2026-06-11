import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Doctors from "../components/Doctors";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact"; // <-- Imported the new Contact component
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      {/* Sticky Navigation */}
      <div className="sticky-top shadow-sm z-3">
        <TopBar />
        <Navbar />
      </div>

      {/* Main Content Flow */}
      <main>
        <Hero />
        <div id="about"><Intro /></div>
        <div id="services"><Services /></div>
        
        <div id="doctors"><Doctors /></div>
        <div id="features"><Features /></div>
        
        <div id="reviews"><Testimonials /></div>
        
        {/* Rendered the Contact component here */}
        <div id="contact"><Contact /></div> 
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;