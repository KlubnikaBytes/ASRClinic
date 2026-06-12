import { FaHandHoldingMedical } from "react-icons/fa";

const packages = [
  {
    title: "Ayush 1 (35 Tests)",
    desc: "FBS(1), Thyroid(1), Lipid Profile(8), LFT(11), RFT/KFT(13), EGFR(1)",
  },
  {
    title: "Ayush 2 (56 Tests)",
    desc: "FBS(1), CBC(20), HbA1c(1), Thyroid(1), Lipid Profile(8), LFT(11), RFT/KFT(13), EGFR(1)",
  },
  {
    title: "Ayush 3 (71 Tests)",
    desc: "FBS(1), CBC(20), Thyroid Profile(3), Lipid Profile(8), LFT(11), RFT/KFT(13), Complete Urine Examination(14), EGFR(1)",
  },
  {
    title: "Ayush 4 / Wellness (60 Tests)",
    desc: "FBS(1), CBC(20), HbA1c(1), Thyroid Profile(3), Lipid Profile(8), LFT(11), RFT/KFT(13), Vitamin B12(1), Vitamin D(1), EGFR(1)",
  },
  {
    title: "Vitamin Check Basic",
    desc: "25-hydroxy Vitamin D (D2+D3), Calcium - Serum, Vitamin B12",
  },
  {
    title: "AAROGYAM 1.1 WITH UTSH (63 Tests)",
    desc: "Cardiac Risk Markers, Liver, Toxic Elements, Iron Deficiency, Renal, Lipid, T3 T4 Tsh",
  },
  {
    title: "AAROGYAM 1.2 WITH UTSH (93 Tests)",
    desc: "Diabetes, Liver, Complete Hemogram, Toxic Elements, Iron Deficiency, Renal, Lipid, T3 T4 Tsh",
  },
  {
    title: "AAROGYAM A PLUS PROFILE WITH UTSH",
    desc: "Diabetes, Electrolytes, Complete Urine Analysis, Liver, Iron Deficiency, Renal, Lipid, T3 T4 Tsh",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container py-lg-5">
        
        {/* Header Section */}
        <div className="text-center mb-5">
          <h2 
            className="display-5 fw-bold mb-3" 
            style={{ color: "#003366", letterSpacing: "-1px" }}
          >
            Comprehensive Diagnostic Profiles
          </h2>
          <p 
            className="text-muted fs-5 mx-auto mb-5" 
            style={{ maxWidth: "800px", lineHeight: "1.6" }}
          >
            Below is a description of the comprehensive pathological tests available at our clinic.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="row g-4">
          {packages.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div 
                className="card h-100 border-0 rounded-4 p-4 bg-white"
                style={{ 
                  boxShadow: "0 4px 15px rgba(0,0,0,0.04)",
                  transition: "all 0.3s ease",
                  borderTop: "4px solid transparent",
                  cursor: "pointer" 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 114, 206, 0.1)";
                  e.currentTarget.style.borderTop = "4px solid #0072ce";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.04)";
                  e.currentTarget.style.borderTop = "4px solid transparent";
                }}
              >
                
                <div className="d-flex gap-3 h-100 align-items-start">
                  {/* Icon Container */}
                  <div 
                    className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle" 
                    style={{ 
                      width: "50px", 
                      height: "50px", 
                      backgroundColor: "rgba(0, 114, 206, 0.1)",
                      color: "#0072ce" 
                    }}
                  >
                    <FaHandHoldingMedical size={24} />
                  </div>
                  
                  {/* Title & Desc */}
                  <div>
                    <h5 className="fw-bold mb-2" style={{ color: "#003366", fontSize: "1.15rem" }}>
                      {item.title}
                    </h5>
                    <p className="text-muted mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
                      {item.desc}
                    </p>
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

export default Services;