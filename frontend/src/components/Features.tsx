import { FaHandshake, FaStethoscope, FaLaptopMedical, FaUserCheck, FaCheckCircle } from "react-icons/fa";

const Features = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
      <div className="container py-4">
        <div className="row g-4">
          
          {/* Card 1: Partner Services */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 transition-hover text-center" style={{ backgroundColor: "#f8f9fa" }}>
              <div className="mb-4 mx-auto d-flex align-items-center justify-content-center rounded-circle" style={{ width: "60px", height: "60px", backgroundColor: "rgba(0, 114, 206, 0.1)", color: "#0072ce" }}>
                <FaHandshake size={28} />
              </div>
              <h4 className="fw-bold mb-4" style={{ color: "#003366", fontSize: "1.2rem" }}>Partner Services</h4>
              <ul className="list-unstyled text-start mx-auto d-inline-block" style={{ color: "#6c757d", fontSize: "0.95rem", lineHeight: "2" }}>
                {['Digital X-ray', 'ECG - 12 Channel', 'Holter Monitoring', 'PFT', 'EEG Study', 'NVC Study'].map((item, i) => (
                  <li key={i}><FaCheckCircle className="me-2" style={{ color: "#b4d333" }}/> {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: Specialized Doctors */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 transition-hover text-center" style={{ backgroundColor: "#f8f9fa" }}>
              <div className="mb-4 mx-auto d-flex align-items-center justify-content-center rounded-circle" style={{ width: "60px", height: "60px", backgroundColor: "rgba(0, 114, 206, 0.1)", color: "#0072ce" }}>
                <FaStethoscope size={28} />
              </div>
              <h4 className="fw-bold mb-4" style={{ color: "#003366", fontSize: "1.2rem" }}>Specialize Doctors</h4>
              <ul className="list-unstyled text-start mx-auto d-inline-block" style={{ color: "#6c757d", fontSize: "0.95rem", lineHeight: "2" }}>
                {['Neuro Surgery', 'Gastroenterology', 'Nephrology', 'Surgical Oncology', 'Neurology', 'Endocrinologist'].map((item, i) => (
                  <li key={i}><FaCheckCircle className="me-2" style={{ color: "#b4d333" }}/> {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 3: Advanced Treatment */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 transition-hover text-center" style={{ backgroundColor: "#f8f9fa" }}>
              <div className="mb-4 mx-auto d-flex align-items-center justify-content-center rounded-circle" style={{ width: "60px", height: "60px", backgroundColor: "rgba(0, 114, 206, 0.1)", color: "#0072ce" }}>
                <FaLaptopMedical size={28} />
              </div>
              <h4 className="fw-bold mb-3" style={{ color: "#003366", fontSize: "1.2rem" }}>Advance Treatment</h4>
              <p className="text-muted" style={{ lineHeight: "1.8", fontSize: "0.95rem" }}>
                All the doctors we have here are associated with various renowned institutions in Kolkata, providing access to top-tier medical technology and care.
              </p>
            </div>
          </div>

          {/* Card 4: Experienced Doctors */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 transition-hover text-center" style={{ backgroundColor: "#f8f9fa" }}>
              <div className="mb-4 mx-auto d-flex align-items-center justify-content-center rounded-circle" style={{ width: "60px", height: "60px", backgroundColor: "rgba(0, 114, 206, 0.1)", color: "#0072ce" }}>
                <FaUserCheck size={28} />
              </div>
              <h4 className="fw-bold mb-3" style={{ color: "#003366", fontSize: "1.2rem" }}>Experienced Doctors</h4>
              <p className="text-muted" style={{ lineHeight: "1.8", fontSize: "0.95rem" }}>
                All the doctors who sit for consultations at our clinic are highly experienced and skilled, ensuring you receive the best possible medical advice.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;