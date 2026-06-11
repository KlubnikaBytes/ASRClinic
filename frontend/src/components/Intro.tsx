import { FaCalendarCheck, FaHospital, FaUserMd } from "react-icons/fa";

const Intro = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
      <div className="container py-lg-5">
        <div className="row align-items-center gy-5">
          
          {/* Left Content */}
          <div className="col-lg-6 pe-lg-5">
            <h2 
              className="display-5 fw-bold mb-4" 
              style={{ color: "#003366", letterSpacing: "-1px" }}
            >
              Welcome to ASR Clinic
            </h2>

            <p 
              className="lead text-muted mb-4" 
              style={{ lineHeight: "1.8" }}
            >
              Currently, ASR Clinic is a progressive clinic in Newtown. Every day, more than 150 patients discuss their various problems with our skilled doctors.
            </p>

            <button 
              className="btn text-white rounded-pill px-4 py-3 mb-5 shadow-sm d-inline-flex align-items-center border-0"
              style={{ 
                backgroundColor: "#0072ce", 
                fontWeight: "600", 
                transition: "all 0.3s ease" 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#b4d333";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#0072ce";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FaCalendarCheck className="me-2" fontSize="1.1rem" />
              Book An Appointment
            </button>

            {/* Features List */}
            <div className="d-flex flex-column gap-4">
              
              {/* Feature 1 */}
              <div className="d-flex align-items-start">
                <div 
                  className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle" 
                  style={{ 
                    width: "60px", 
                    height: "60px", 
                    backgroundColor: "rgba(0, 114, 206, 0.1)", // Light Blue bg
                    color: "#0072ce" 
                  }}
                >
                  <FaHospital size={24} />
                </div>
                <div className="ms-4">
                  <h4 className="fw-bold mb-2" style={{ color: "#003366", fontSize: "1.25rem" }}>
                    Friendly Clinic Near You
                  </h4>
                  <p className="text-muted mb-0" style={{ lineHeight: "1.7" }}>
                    Our clinic, which you can call a family clinic, is always ready to help you with any of your physical problems.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="d-flex align-items-start">
                <div 
                  className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle" 
                  style={{ 
                    width: "60px", 
                    height: "60px", 
                    backgroundColor: "rgba(180, 211, 51, 0.2)", // Light Green bg
                    color: "#8a9e1e" 
                  }}
                >
                  <FaUserMd size={24} />
                </div>
                <div className="ms-4">
                  <h4 className="fw-bold mb-2" style={{ color: "#003366", fontSize: "1.25rem" }}>
                    Experienced Doctors
                  </h4>
                  <p className="text-muted mb-0" style={{ lineHeight: "1.7" }}>
                    All the doctors who regularly visit our clinic are experienced and skilled, so don't hesitate to discuss any of your physical problems.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Content - Images */}
          <div className="col-lg-6 position-relative mt-5 mt-lg-0 text-center text-lg-end">
            
            {/* Main Image (Replaced broken link with high-quality placeholder) */}
            <img
              src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80&w=800"
              alt="Friendly Doctor"
              className="img-fluid rounded-4 shadow-lg"
              style={{ 
                width: "90%", 
                height: "500px", 
                objectFit: "cover",
                border: "8px solid #f8f9fa" 
              }}
            />

            {/* Overlapping Circle Image (Replaced broken link) */}
            <div
              className="position-absolute bg-white p-2 rounded-circle shadow-lg d-none d-sm-block"
              style={{
                bottom: "-40px",
                left: "10%", // Switched from fixed pixels to % so it scales nicely on mobile
                width: "240px",
                height: "240px",
                zIndex: 2
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=400"
                alt="Modern Clinic"
                className="rounded-circle w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;