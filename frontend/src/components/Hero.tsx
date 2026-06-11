import { FaCloudDownloadAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section 
      className="position-relative d-flex align-items-center justify-content-center text-center text-white min-vh-100 overflow-hidden"
      style={{
        textRendering: "optimizeLegibility",
        WebkitFontSmoothing: "antialiased",
        backgroundColor: "#001e28" // Fallback color
      }}
    >
      {/* 1. Animated Background Image (Ken Burns Effect) 
          Using the newly fetched professional clinical image.
      */}
      <div 
        className="position-absolute w-100 h-100 start-0 top-0"
        style={{ zIndex: 0, overflow: "hidden" }}
      >
        <div 
          style={{
            width: "100%", 
            height: "100%",
            backgroundImage: "url('')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            // 30-second smooth animated zoom for a premium feel
            animation: "kenBurnsZoom 30s infinite alternate ease-in-out" 
          }}
        ></div>
      </div>

      {/* 2. Refined Multi-Stop Gradient Overlay
          Sits on top of the moving image (z-index: 1) to ensure the white text is always readable against the background.
      */}
      <div 
        className="position-absolute w-100 h-100 top-0 start-0" 
        style={{ 
          background: "linear-gradient(135deg, rgba(0, 51, 102, 0.85) 0%, rgba(0, 114, 206, 0.6) 50%, rgba(0, 30, 40, 0.95) 100%)",
          zIndex: 1
        }}
      ></div>

      {/* 3. Main Content (z-index: 2) */}
      <div className="position-relative container px-4 py-5 z-2">
        <h1 
          className="display-3 fw-bold mb-4"
          style={{ 
            lineHeight: "1.2", 
            letterSpacing: "-1.5px",
            textShadow: "0px 4px 12px rgba(0,0,0,0.4)" 
          }}
        >
          A Better Life Starts with a<br className="d-none d-md-block"/> Beautiful Smile
        </h1>
        <p 
          className="lead mx-auto mb-5 text-white" 
          style={{ 
            maxWidth: "800px", 
            lineHeight: "1.8",
            letterSpacing: "0.2px",
            textShadow: "0px 2px 8px rgba(0,0,0,0.3)"
          }}
        >
          You Can Book An Appointment With The Doctor Of Your Choice By Clicking The Button Below.
        </p>
        
        {/* Professional Blue Button */}
        <button 
          className="btn btn-lg text-white rounded-pill px-5 py-3 shadow-lg border-0 transition-hover" 
          style={{ 
            backgroundColor: "#0072ce", 
            fontWeight: "700",
            fontSize: "1.1rem",
            letterSpacing: "0.5px",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#b4d333"; // Brand Lime Green
            e.currentTarget.style.color = "#003366"; // Navy text on hover
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(180, 211, 51, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#0072ce";
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.15)";
          }}
        >
          <FaCloudDownloadAlt className="me-3" fontSize="1.3rem" /> 
          Download Doctor List
        </button>
      </div>

      {/* 4. Decorative Bottom Curve (z-index: 2) */}
      <div 
        className="position-absolute bottom-0 start-0 w-100" 
        style={{ 
          height: "60px", 
          backgroundColor: "#ffffff", 
          borderTopLeftRadius: "50%", 
          borderTopRightRadius: "50%",
          boxShadow: "0 -5px 15px rgba(0,0,0,0.05)",
          zIndex: 2
        }}
      ></div>

      {/* Embedded CSS Keyframes */}
      <style>{`
        @keyframes kenBurnsZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.15);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;