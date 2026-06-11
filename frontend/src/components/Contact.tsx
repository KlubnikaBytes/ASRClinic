import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaMap, FaPaperPlane, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="position-relative py-5" style={{ backgroundColor: "#f8f9fa" }}>
      
      {/* WhatsApp Floating Action Button */}
      <a 
        href="https://wa.me/917980367584" 
        target="_blank" 
        rel="noreferrer"
        className="position-fixed d-flex align-items-center justify-content-center rounded-circle shadow-lg"
        style={{
          bottom: "30px",
          right: "30px",
          width: "60px",
          height: "60px",
          backgroundColor: "#25D366", // Official WhatsApp Green
          color: "#ffffff",
          zIndex: 1000,
          textDecoration: "none",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
      >
        <FaWhatsapp size={32} />
      </a>

      <div className="container py-lg-4">
        
        {/* Header Section */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: "#003366", letterSpacing: "-1px" }}>
            How to Find Us
          </h2>
          <p className="text-muted fs-5 mx-auto mb-4" style={{ maxWidth: "600px", lineHeight: "1.6" }}>
            Fill up the form and ask your queries. Our team will get back to you promptly.
          </p>
          <a 
            href="https://maps.google.com/?q=New+Town+Kolkata" 
            target="_blank" 
            rel="noreferrer"
            className="btn text-white rounded-pill px-4 py-2 shadow-sm border-0 d-inline-flex align-items-center"
            style={{ backgroundColor: "#0072ce", fontWeight: "600", transition: "all 0.3s ease" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#b4d333";
              e.currentTarget.style.color = "#003366";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#0072ce";
              e.currentTarget.style.color = "#ffffff";
            }}
          >
            <FaMap className="me-2" /> View On Google Map
          </a>
        </div>

        {/* Main Contact Card */}
        <div className="card shadow-lg border-0 rounded-4 overflow-hidden bg-white">
          
          {/* Top Info Bar (Premium Blue) */}
          <div className="row g-0 text-white" style={{ backgroundColor: "#0072ce" }}>
            
            {/* Address */}
            <div className="col-md-4 p-4 p-lg-5 d-flex align-items-start gap-3 border-end border-light border-opacity-25">
              <div className="mt-1 flex-shrink-0"><FaMapMarkerAlt size={24} /></div>
              <div>
                <h5 className="fw-bold mb-2">Address</h5>
                <p className="mb-0 opacity-75" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  DLF Heights Plaza, 1st Floor, Shop No - 117<br />New Town, Kolkata - 700135.
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="col-md-4 p-4 p-lg-5 d-flex align-items-start gap-3 border-end border-light border-opacity-25">
              <div className="mt-1 flex-shrink-0"><FaPhoneAlt size={22} /></div>
              <div>
                <h5 className="fw-bold mb-2">Phone</h5>
                <p className="mb-0 opacity-75" style={{ fontSize: "0.95rem" }}>
                  +91 79803 67584
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="col-md-4 p-4 p-lg-5 d-flex align-items-start gap-3">
              <div className="mt-1 flex-shrink-0"><FaEnvelope size={22} /></div>
              <div>
                <h5 className="fw-bold mb-2">Email</h5>
                <p className="mb-0 opacity-75" style={{ fontSize: "0.95rem" }}>
                  asr.clinic@gmail.com
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Split Section: Form & Map */}
          <div className="row g-0">
            
            {/* Left: Form */}
            <div className="col-lg-6 p-4 p-md-5">
              <h4 className="fw-bold mb-4" style={{ color: "#003366" }}>Book Your Appointment</h4>
              
              <form>
                <div className="mb-3">
                  <label className="form-label text-muted fw-semibold" style={{ fontSize: "0.9rem" }}>Name</label>
                  <input type="text" className="form-control px-3 py-2 bg-light border-0 shadow-none" placeholder="Your full name" style={{ borderRadius: "8px" }} />
                </div>
                
                <div className="mb-3">
                  <label className="form-label text-muted fw-semibold" style={{ fontSize: "0.9rem" }}>Contact Number</label>
                  <input type="tel" className="form-control px-3 py-2 bg-light border-0 shadow-none" placeholder="+91 XXXXX XXXXX" style={{ borderRadius: "8px" }} />
                </div>
                
                <div className="mb-3">
                  <label className="form-label text-muted fw-semibold" style={{ fontSize: "0.9rem" }}>Email</label>
                  <input type="email" className="form-control px-3 py-2 bg-light border-0 shadow-none" placeholder="yourname@email.com" style={{ borderRadius: "8px" }} />
                </div>
                
                <div className="mb-4">
                  <label className="form-label text-muted fw-semibold" style={{ fontSize: "0.9rem" }}>Message</label>
                  <textarea className="form-control px-3 py-2 bg-light border-0 shadow-none" rows={4} placeholder="How can we help you?" style={{ borderRadius: "8px", resize: "none" }}></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn w-100 text-white py-3 border-0 d-flex justify-content-center align-items-center gap-2 transition-hover"
                  style={{ backgroundColor: "#0072ce", borderRadius: "8px", fontWeight: "600", fontSize: "1.05rem" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#b4d333";
                    e.currentTarget.style.color = "#003366";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#0072ce";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                >
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            </div>

            {/* Right: Google Map Embed */}
            <div className="col-lg-6" style={{ minHeight: "400px" }}>
              <iframe 
                title="ASR Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.33439927718!2d88.34735275!3d22.53542735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b020703c0d%3A0xece6f8e0fc2e1613!2sNew%20Town%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;