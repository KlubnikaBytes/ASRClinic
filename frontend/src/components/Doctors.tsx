import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaUserMd, FaHospital } from "react-icons/fa";

const departmentsData = [
  {
    department: "Psychiatry",
    doctors: [
      {
        name: "Dr. Arka Adhvaryu (Retd)",
        timings: "Wed 5pm / others by Appt.",
        hospital: "RG Kar, GD Hospital",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200"
      }
    ]
  },
  {
    department: "Neurology",
    doctors: [
      {
        name: "Dr. Aishee Bhattacharya",
        timings: "Wed 7PM / others by Appt.",
        hospital: "SSKM (PG Hospital)",
        image: "https://www.technoglobalhospital.com/admin/uploads/doctor/15-07-2025-07-08-07.jpg"
      },
      {
        name: "Dr. Koustav Jana",
        timings: "By Appointment",
        hospital: "SSKM (PG Hospital)",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200&h=200"
      }
    ]
  },
  {
    department: "Paediatrics",
    doctors: [
      {
        name: "Dr. Partha Chakraborty",
        timings: "Mon to Sat 9AM & 5:30PM",
        hospital: "Bhagirathi Neotia",
        image: "https://childspecialistkolkata.in/img/img-12.jpg"
      },
      {
        name: "Dr. Sudeshna Mallik",
        timings: "Mon to Sat 6:30 PM",
        hospital: "Spandan Hospital",
        image: "https://corporate-storage-1.s3.dualstack.ap-south-1.amazonaws.com/prod/doctor-profiles/1756820414393-upload-6559502928073985449SUDESHNA%20MULLIK.jpeg"
      }
    ]
  },
  {
    department: "Cardiology",
    doctors: [
      {
        name: "Dr. Sebabrata Jana",
        timings: "Saturday 11am / By Appt.",
        hospital: "Narayana Hospital",
        image: "https://content.jdmagicbox.com/v2/comp/howrah/e4/9999pxx33.xx33.241112154345.e3e4/catalogue/dr-sebabrata-jana-narayana-superspeciality-hospital-andul-road-howrah-cardiologists-xyd9ef8xlr-250.jpg"
      },
      {
        name: "Dr. Krishanko Das",
        timings: "Wed 6pm, Sun 10am",
        hospital: "RG Kar, Charnock",
        image: "https://sdpl8ic8website8blob8stg.blob.core.windows.net/doctorsdata/Dr-Krishanko-Das-CardiologistSurakshaClinicandDiagnostics.png"
      }
    ]
  }
];

const Doctors = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Drag to scroll state
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Button scroll function
  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 370; 
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  // Mouse drag functions
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#f0f4f8" }}>
      <div className="container py-4">
        
        {/* Header & Controls */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-3">
          <div>
            <h2 className="display-6 fw-bold mb-2" style={{ color: "#003366", letterSpacing: "-1px" }}>
              Department & Timings
            </h2>
            <p className="text-muted fs-5 mb-0">
              List of when doctors from which departments will be present for consultancy.
            </p>
          </div>
          
          {/* Custom Slider Arrows */}
          <div className="d-flex gap-2">
            <button 
              onClick={() => scroll("left")}
              className="btn rounded-circle d-flex align-items-center justify-content-center shadow-sm"
              style={{ width: "45px", height: "45px", backgroundColor: "#fff", color: "#0072ce", border: "none" }}
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="btn rounded-circle d-flex align-items-center justify-content-center shadow-sm text-white"
              style={{ width: "45px", height: "45px", backgroundColor: "#0072ce", border: "none" }}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Drag-to-Scroll Container */}
        <div 
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="d-flex gap-4 pb-4"
          style={{
            overflowX: "auto",
            scrollSnapType: isDown ? "none" : "x mandatory", // Disables snapping while dragging for smoothness
            scrollbarWidth: "none", 
            msOverflowStyle: "none", 
            cursor: isDown ? "grabbing" : "grab",
            userSelect: "none" // Prevents text highlighting while dragging
          }}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>

          {departmentsData.map((dept, index) => (
            <div 
              key={index} 
              className="card border-0 rounded-4 shadow-sm flex-shrink-0"
              style={{ 
                width: "350px", 
                scrollSnapAlign: "start",
                overflow: "hidden",
                pointerEvents: isDown ? "none" : "auto" // Prevents accidental clicks while dragging
              }}
            >
              {/* Department Header */}
              <div 
                className="py-3 text-center text-white" 
                style={{ backgroundColor: "#003366", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase" }}
              >
                {dept.department}
              </div>
              
              {/* Doctors List inside the card */}
              <div className="card-body p-0">
                {dept.doctors.map((doc, docIdx) => (
                  <div 
                    key={docIdx} 
                    className={`p-4 d-flex flex-column align-items-center text-center ${docIdx !== dept.doctors.length - 1 ? 'border-bottom' : ''}`}
                  >
                    {/* Doctor Avatar - Added draggable="false" to fix drag bugs */}
                    <img 
                      src={doc.image} 
                      alt={doc.name} 
                      draggable="false"
                      className="rounded-circle mb-3 shadow-sm"
                      style={{ 
                        width: "90px", 
                        height: "90px", 
                        objectFit: "cover", 
                        border: "3px solid #f0f4f8",
                        userSelect: "none"
                      }}
                    />
                    
                    {/* Doctor Info */}
                    <h5 className="fw-bold mb-1" style={{ color: "#0072ce", fontSize: "1.1rem" }}>{doc.name}</h5>
                    
                    <div className="text-muted mb-2 d-flex align-items-center justify-content-center gap-2" style={{ fontSize: "0.85rem" }}>
                      <FaUserMd style={{ color: "#b4d333" }} />
                      <span>{doc.timings}</span>
                    </div>
                    
                    <div className="text-muted d-flex align-items-center justify-content-center gap-2" style={{ fontSize: "0.85rem" }}>
                      <FaHospital style={{ color: "#b4d333" }} />
                      <span>{doc.hospital}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Doctors;