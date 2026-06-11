import { FaQuoteLeft, FaStar, FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Verified Patient",
    text: "The service of Shapurji Clinic is superb. They have a collection of well experienced doctors. I have been using their service for years and never faced any issues. The behaviour of their staff is very polite.",
  },
  {
    name: "Verified Patient",
    text: "I have been living in this area for the last 5 years and Shapurji Clinic is the place we go for all our medical needs. Their service is great and the staff is extremely well behaved.",
  },
  {
    name: "Verified Patient",
    text: "I had blood and urine tests multiple times done by them. Their reports appeared clinically accurate and I always got polite behaviour from their staffs.",
  },
  {
    name: "Verified Patient",
    text: "I've been a regular customer of Shapurji Clinic for the past 3 years and have consistently been impressed by their services. The staff is highly skilled and professional.",
  },
  {
    name: "Verified Patient",
    text: "I have been visiting Shapurji Clinic for many years now and can say it is a very trustworthy clinic. Doctors are experienced and hospitality is excellent.",
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-5" style={{ backgroundColor: "#ffffff" }}>
      <div className="container py-lg-5">
        
        {/* Centered Header (Fixes the awkward empty space) */}
        <div className="text-center mb-5">
          <h2 
            className="display-5 fw-bold mb-3" 
            style={{ color: "#003366", letterSpacing: "-1px" }}
          >
            Happy Stories
          </h2>
          <p 
            className="text-muted fs-5 mx-auto" 
            style={{ maxWidth: "600px", lineHeight: "1.6" }}
          >
            Creating Vibrant Smiles for Healthy Lifestyles! Here is what our community has to say about us.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="row g-4 justify-content-center">
          {testimonials.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div 
                className="card h-100 border-0 rounded-4 p-4"
                style={{ 
                  backgroundColor: "#f8f9fa",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
                  transition: "all 0.3s ease",
                  cursor: "pointer" 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 114, 206, 0.08)";
                  e.currentTarget.style.backgroundColor = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.03)";
                  e.currentTarget.style.backgroundColor = "#f8f9fa";
                }}
              >
                
                {/* Quote Icon */}
                <FaQuoteLeft 
                  size={28} 
                  style={{ color: "rgba(0, 114, 206, 0.2)", marginBottom: "20px" }} 
                />

                {/* Review Text */}
                <p 
                  className="text-muted flex-grow-1"
                  style={{ 
                    fontSize: "0.95rem", 
                    lineHeight: "1.8", 
                    fontStyle: "italic",
                    marginBottom: "25px"
                  }}
                >
                  "{item.text}"
                </p>

                {/* Bottom Section: User & Stars */}
                <div className="d-flex justify-content-between align-items-center mt-auto border-top pt-3">
                  
                  {/* User Placeholder */}
                  <div className="d-flex align-items-center gap-2">
                    <FaUserCircle size={24} style={{ color: "#c0c6cc" }} />
                    <span className="fw-bold" style={{ fontSize: "0.85rem", color: "#003366" }}>
                      {item.name}
                    </span>
                  </div>

                  {/* Stars */}
                  <div className="d-flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} color="#FFC107" size={14} /> // Bootstrap Warning Gold
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;