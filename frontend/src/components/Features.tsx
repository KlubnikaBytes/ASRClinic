

import {
  FaHandshake,
  FaHospital,
  FaMeh,
  FaIdBadge,
  FaDotCircle,
} from "react-icons/fa";

const Features = () => {
  return (
    <section
      style={{
        background: "#edf2ed",
        padding: "60px 0",
      }}
    >
      <div className="container">
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-lg-3 col-md-6">
            <div
              style={{
                background: "#fff",
                borderRadius: "8px",
                padding: "35px 25px",
                textAlign: "center",
                height: "100%",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-25px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "75px",
                  height: "75px",
                  borderRadius: "50%",
                  background: "#e8f7ef",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaHandshake size={38} color="#0ea5d7" />
              </div>

              <h3
                style={{
                  color: "#081126",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  marginTop: "15px",
                  marginBottom: "25px",
                  lineHeight: "1.4",
                }}
              >
                Partner Services
              </h3>

              <div className="text-start">
                {[
                  "Digital X-ray",
                  "ECG - 12 Channel",
                  "Holter Monitoring",
                  "PFT",
                  "EEG Study",
                  "NVC Study",
                  "ABPM",
                ].map((item, i) => (
                  <div key={i} className="d-flex align-items-center mb-2">
                    <FaDotCircle
                      size={12}
                      style={{ marginRight: "10px" }}
                    />
                    <span style={{ fontSize: "15px" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-3 col-md-6">
            <div
              style={{
                background: "#fff",
                borderRadius: "8px",
                padding: "35px 25px",
                textAlign: "center",
                height: "100%",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-25px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "75px",
                  height: "75px",
                  borderRadius: "50%",
                  background: "#e8f7ef",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaHospital size={38} color="#0ea5d7" />
              </div>

              <h3
                style={{
                  color: "#081126",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  marginTop: "15px",
                  marginBottom: "25px",
                  lineHeight: "1.4",
                }}
              >
                Specialize Doctors
              </h3>

              <div className="text-start">
                {[
                  "Neuro Surgery",
                  "Gastroenterology",
                  "Nephrology",
                  "Surgical Oncology",
                  "Neurology",
                  "Endocrinologist",
                  "Psychiatry",
                ].map((item, i) => (
                  <div key={i} className="d-flex align-items-center mb-2">
                    <FaDotCircle
                      size={12}
                      style={{ marginRight: "10px" }}
                    />
                    <span style={{ fontSize: "15px" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-3 col-md-6">
            <div
              style={{
                background: "#fff",
                borderRadius: "8px",
                padding: "35px 25px",
                textAlign: "center",
                height: "100%",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-25px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "75px",
                  height: "75px",
                  borderRadius: "50%",
                  background: "#e8f7ef",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaMeh size={38} color="#0ea5d7" />
              </div>

              <h3
                style={{
                  color: "#081126",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  marginTop: "15px",
                  marginBottom: "25px",
                  lineHeight: "1.4",
                }}
              >
                Advance Treatment
              </h3>

              <p
                style={{
                  fontSize: "15px",
                  color: "#444",
                  lineHeight: "2.1",
                  marginBottom: 0,
                }}
              >
                All the doctors we have here are associated with various
                renowned institutions in Kolkata.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-lg-3 col-md-6">
            <div
              style={{
                background: "#fff",
                borderRadius: "8px",
                padding: "35px 25px",
                textAlign: "center",
                height: "100%",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-25px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "75px",
                  height: "75px",
                  borderRadius: "50%",
                  background: "#e8f7ef",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaIdBadge size={38} color="#0ea5d7" />
              </div>

              <h3
                style={{
                  color: "#081126",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  marginTop: "15px",
                  marginBottom: "25px",
                  lineHeight: "1.4",
                }}
              >
                Experienced Doctors
              </h3>

              <p
                style={{
                  fontSize: "15px",
                  color: "#444",
                  lineHeight: "2.1",
                  marginBottom: 0,
                }}
              >
                All the doctors who sit for consultations at our clinic are
                experienced and skilled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;