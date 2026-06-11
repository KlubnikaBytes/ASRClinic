import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      style={{
        background: "#edf3ee",
        paddingTop: "70px",
        paddingBottom: "70px",
        position: "relative",
      }}
    >
      {/* Top Curve */}
      <div
        style={{
          position: "absolute",
          top: "-180px",
          left: 0,
          width: "100%",
          height: "380px",
          background: "#fff",
          borderRadius: "50%",
        }}
      />

      <div
        className="container text-center"
        style={{ position: "relative", zIndex: 2 }}
      >
        {/* Heading */}
        <h2
          style={{
            color: "#a40a53",
            fontSize: "3.5rem",
            fontWeight: "600",
            marginBottom: "15px",
          }}
        >
          How to Find Us
        </h2>

        <p
          style={{
            color: "#09132d",
            fontSize: "1.1rem",
            fontWeight: "500",
            marginBottom: "35px",
          }}
        >
          Fill up the Form and Ask Your Queries
        </p>

        {/* Map Button */}
        <button
          className="border-0"
          style={{
            background: "#0ea5d7",
            color: "#fff",
            padding: "14px 35px",
            fontSize: "1.1rem",
            fontWeight: "600",
            borderRadius: "5px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            marginBottom: "80px",
          }}
        >
          <FaMapMarkerAlt className="me-2" />
          View On Google Map
        </button>

        {/* Contact Info Box */}
        <div
          style={{
            background: "#0ea5d7",
            borderRadius: "8px",
            padding: "40px 30px",
            color: "#fff",
          }}
        >
          <div className="row">
            {/* Address */}
            <div className="col-lg-4 mb-4">
              <div className="d-flex align-items-start">
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.15)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "18px",
                    flexShrink: 0,
                  }}
                >
                  <FaMapMarkerAlt size={24} />
                </div>

                <div className="text-start">
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      marginBottom: "10px",
                    }}
                  >
                    Address
                  </h3>

                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.7",
                      margin: 0,
                    }}
                  >
                    DLF Heights Plaza,
                    <br />
                    1st Floor, Shop No - 117,
                    <br />
                    New Town,
                    <br />
                    Kolkata - 700135
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="col-lg-4 mb-4">
              <div className="d-flex align-items-start">
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.15)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "18px",
                    flexShrink: 0,
                  }}
                >
                  <FaPhoneAlt size={24} />
                </div>

                <div className="text-start">
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      marginBottom: "10px",
                    }}
                  >
                    Phone
                  </h3>

                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.7",
                      margin: 0,
                    }}
                  >
                    +91 79803 67584
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="col-lg-4 mb-4">
              <div className="d-flex align-items-start">
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.15)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "18px",
                    flexShrink: 0,
                  }}
                >
                  <FaEnvelope size={24} />
                </div>

                <div className="text-start">
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      marginBottom: "10px",
                    }}
                  >
                    Email
                  </h3>

                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.7",
                      margin: 0,
                    }}
                  >
                    asr.clinic@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;