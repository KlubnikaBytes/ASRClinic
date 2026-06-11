import { 
  FaFacebookF, 
  FaTwitter, 
  FaWhatsapp, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt 
} from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 100;
      const y = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer style={{ backgroundColor: "#003366", color: "#e0e6ed" }}>
      {/* Main Footer */}
      <div className="container py-5">
        <div className="row gy-5 align-items-start">
          
          {/* Left Section: Brand & About */}
          <div className="col-lg-4 pe-lg-4">
            
            {/* Typographic Logo for Dark Background */}
            <a 
              href="#" 
              className="text-decoration-none d-inline-block mb-4"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            >
              <div className="d-flex align-items-center">
                <span 
                  style={{ color: "#ffffff", fontSize: "38px", fontWeight: "900", lineHeight: "1", marginRight: "8px", letterSpacing: "-1px" }}
                >
                  ASR
                </span>
                <div className="d-flex flex-column justify-content-center" style={{ lineHeight: "1.1" }}>
                  <span style={{ color: "#b4d333", fontSize: "14px", fontWeight: "800", letterSpacing: "0.5px" }}>DOCTOR</span>
                  <span style={{ color: "#b4d333", fontSize: "14px", fontWeight: "800", letterSpacing: "0.5px" }}>CLINIC</span>
                </div>
              </div>
            </a>

            <p style={{ fontSize: "0.95rem", lineHeight: "1.8", color: "#aab7c4", marginBottom: "25px" }}>
              Currently, ASR Clinic is a progressive medical facility in Newtown. Every day, more than 150 patients trust our skilled doctors with their healthcare needs.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3">
              {[FaFacebookF, FaTwitter, FaWhatsapp].map((Icon, idx) => (
                <div 
                  key={idx}
                  className="d-flex align-items-center justify-content-center rounded-circle transition-hover"
                  style={{ 
                    width: "40px", 
                    height: "40px", 
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    cursor: "pointer",
                    color: "#ffffff",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#b4d333";
                    e.currentTarget.style.color = "#003366";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Center Section: Quick Links */}
          <div className="col-lg-2 offset-lg-1">
            <h4 style={{ color: "#ffffff", fontSize: "1.2rem", fontWeight: "700", marginBottom: "25px" }}>
              Quick Links
            </h4>
            <ul className="list-unstyled d-flex flex-column gap-3 mb-0" style={{ fontSize: "0.95rem" }}>
              {['Home', 'About', 'Services', 'Reviews', 'Contact Us'].map((link, idx) => {
                const sectionId = link === 'Home' ? '' : link.toLowerCase().replace(' us', '');
                return (
                  <li key={idx}>
                    <a 
                      href={link === 'Home' ? '#' : `#${sectionId}`}
                      className="text-decoration-none transition-hover"
                      style={{ color: "#aab7c4", transition: "color 0.2s ease" }}
                      onClick={(e) => {
                        e.preventDefault();
                        link === 'Home' ? window.scrollTo({ top: 0, behavior: "smooth" }) : scrollToSection(sectionId);
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "#b4d333"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "#aab7c4"}
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Section: Contact Info */}
          <div className="col-lg-3">
            <h4 style={{ color: "#ffffff", fontSize: "1.2rem", fontWeight: "700", marginBottom: "25px" }}>
              Get In Touch
            </h4>
            
            <div className="d-flex flex-column gap-3" style={{ color: "#aab7c4", fontSize: "0.95rem" }}>
              <div className="d-flex align-items-start gap-3">
                <FaEnvelope className="mt-1 flex-shrink-0" style={{ color: "#0072ce" }} />
                <span>asr.clinic@gmail.com</span>
              </div>
              
              <div className="d-flex align-items-start gap-3">
                <FaPhoneAlt className="mt-1 flex-shrink-0" style={{ color: "#0072ce" }} />
                <span>+91 79803-67584</span>
              </div>

              <div className="d-flex align-items-start gap-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" style={{ color: "#0072ce" }} />
                <span style={{ lineHeight: "1.6" }}>
                  Dlf Heights Plaza, 1st Floor, Shop - 117, New Town, Kolkata - 700135
                </span>
              </div>
            </div>
          </div>

          {/* Right Section: Map */}
          <div className="col-lg-2 text-lg-end mt-4 mt-lg-0">
            <div className="rounded-3 overflow-hidden shadow-sm" style={{ border: "2px solid rgba(255,255,255,0.1)" }}>
              {/* Added a working embedded map for Newtown, Kolkata */}
              <iframe
                title="ASR Clinic Location Map"
                width="100%"
                height="180"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.3343992771!2d88.38486165!3d22.5835848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027535fa3716d1%3A0xcb156fb150f15c13!2sNew%20Town%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div 
        style={{ 
          backgroundColor: "#002244", // Even darker navy for depth
          color: "#8a9bac", 
          textAlign: "center", 
          padding: "20px 15px", 
          fontSize: "0.9rem", 
          fontWeight: "500" 
        }}
      >
        © {new Date().getFullYear()} ASR Doctor Clinic. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;