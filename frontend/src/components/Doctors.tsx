

const doctors = [
  {
    department: "NEURO SURGERY",
    name: "Dr. Tamajit Chakraborty",
    timing: "Monday 6PM / others by Appointment",
    hospital: "Rubi, Manipal",
    image: "https://shapurjiclinic.com/images/doctors/neurosurgery.jpg",
  },
  {
    department: "GENERAL SURGERY",
    name: "Dr. Sunanda De",
    timing: "Mon to Thursday 1PM / Others by App.",
    hospital: "SSKM(PG Hospital)",
    image: "https://shapurjiclinic.com/images/doctors/generalsurgery.jpg",
  },
  {
    department: "UROLOGY",
    name: "Dr. Subham Sinha",
    timing: "Monday 5 PM / Others by App.",
    hospital: "Calcutta Medical College",
    image: "https://shapurjiclinic.com/images/doctors/urology.jpg",
  },
  {
    department: "GYNAECOLOGY & OBSTETRICS",
    name: "Dr. Kavita Mandal",
    timing: "Mon, Wed, Fri - 11AM",
    hospital: "Bhagirathi Neotia",
    image: "https://shapurjiclinic.com/images/doctors/gynaecology.jpg",
  },
];

const Doctors = () => {
  return (
    <section
      style={{
        background: "#edf2ed",
        padding: "70px 0",
      }}
    >
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2
            style={{
              fontSize: "56px",
              fontWeight: "700",
              color: "#081126",
              marginBottom: "20px",
            }}
          >
            Department & Timings
          </h2>

          <p
            style={{
              fontSize: "20px",
              color: "#081126",
              maxWidth: "1100px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
            List of when doctors from which departments will be present for
            consultancy
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {doctors.map((doctor, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #cfcfcf",
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                {/* Department Header */}
                <div
                  style={{
                    background: "#b12969",
                    color: "#fff",
                    textAlign: "center",
                    fontSize: "18px",
                    fontWeight: "700",
                    padding: "16px 10px",
                    minHeight: "75px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {doctor.department}
                </div>

                {/* Image */}
                <div className="text-center py-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      border: "3px solid #1c87b8",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Details */}
                <div
                  style={{
                    background: "#2f7ea7",
                    color: "#fff",
                    textAlign: "center",
                    padding: "18px 15px",
                    minHeight: "180px",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      marginBottom: "12px",
                    }}
                  >
                    {doctor.name}
                  </h4>

                  <div
                    style={{
                      color: "#ffe600",
                      fontWeight: "600",
                      fontSize: "14px",
                      lineHeight: "1.6",
                    }}
                  >
                    Timings: {doctor.timing}
                  </div>

                  <div
                    style={{
                      fontSize: "14px",
                      marginTop: "12px",
                      lineHeight: "1.6",
                    }}
                  >
                    Attached to: {doctor.hospital}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Dots */}
        <div className="text-center mt-4">
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                margin: "0 4px",
                background: i === 4 ? "#000" : "#bdbdbd",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;