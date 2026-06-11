import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 90;
      const y = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Structured the links so we can cleanly display "Contact Us" 
  // while linking to the "contact" ID.
  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <nav 
      className="navbar navbar-expand-lg sticky-top py-3 transition-all" 
      style={{ 
        backgroundColor: "rgba(255, 255, 255, 0.85)", // Semi-transparent white
        backdropFilter: "blur(12px)",                 // The Glassmorphism blur
        WebkitBackdropFilter: "blur(12px)",           // Safari support for the blur
        borderBottom: "1px solid rgba(255, 255, 255, 0.4)", // Subtle glass edge
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05)"   // Very soft, diffuse shadow
      }}
    >
      <div className="container">
        
        {/* Typographic Logo Reconstructed */}
        <a 
          className="navbar-brand d-flex align-items-center text-decoration-none" 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <div className="d-flex align-items-center">
            <span 
              style={{ 
                color: "#0072ce", // Primary Blue 
                fontSize: "42px", 
                fontWeight: "900", 
                lineHeight: "1", 
                marginRight: "8px", 
                letterSpacing: "-1.5px",
                fontFamily: "Arial, sans-serif"
              }}
            >
              ASR
            </span>
            <div className="d-flex flex-column justify-content-center" style={{ lineHeight: "1.1" }}>
              <span style={{ color: "#b4d333", fontSize: "16px", fontWeight: "800", letterSpacing: "0.5px", fontFamily: "Arial, sans-serif" }}>
                DOCTOR
              </span>
              <span style={{ color: "#b4d333", fontSize: "16px", fontWeight: "800", letterSpacing: "0.5px", fontFamily: "Arial, sans-serif" }}>
                CLINIC
              </span>
            </div>
          </div>
        </a>

        {/* Toggler for Mobile */}
        <button 
          className="navbar-toggler border-0 shadow-none" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center gap-3 gap-lg-4 fw-semibold mt-3 mt-lg-0">
            
            <li className="nav-item">
              <a 
                className="nav-link px-0 transition-hover" 
                style={{ color: "#003366" }}
                href="#" 
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              >
                Home
              </a>
            </li>

            {/* Mapped Navigation Links including Contact Us */}
            {navLinks.map((item) => (
              <li className="nav-item" key={item.id}>
                <a 
                  className="nav-link px-0 transition-hover" 
                  style={{ color: "#003366" }}
                  href={`#${item.id}`} 
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            
            {/* CTA Button */}
            <li className="nav-item ms-lg-4 mt-3 mt-lg-0 mb-2 mb-lg-0">
              <button 
                className="btn rounded-pill px-4 py-2 d-flex align-items-center gap-2 text-white border-0 shadow-sm" 
                style={{ 
                  backgroundColor: "#0072ce", 
                  fontWeight: "600", 
                  transition: "all 0.3s ease" 
                }} 
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#b4d333";
                  e.currentTarget.style.color = "#003366";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#0072ce";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                onClick={() => scrollToSection("contact")}
              >
                Book Appointment <FaArrowRight fontSize="14px" />
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;