import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaUserMd, FaHospital } from "react-icons/fa";

// 1. Import all local doctor images from the assets folder
import imgAswini from "../assets/doctor image/Dr. Aswini Rana.jpg";
import imgAranyak from "../assets/doctor image/Dr. Aranyak Sarkar.jpeg";
import imgArka from "../assets/doctor image/Dr. Arka Adhvaryu (Retd).avif";
import imgAishee from "../assets/doctor image/Dr. Aishee Bhattacharya.png";
import imgKoustav from "../assets/doctor image/Dr. Koustav Jana.jpeg";
import imgPartha from "../assets/doctor image/Dr. Partha Chakraborty.webp";
import imgSudeshna from "../assets/doctor image/Dr. Sudeshna Mallik.jpg";
import imgSebabrata from "../assets/doctor image/Dr. Sebabrata Jana.avif";
import imgKrishanko from "../assets/doctor image/Dr. Krishanko Das.png";

const departmentsData = [
  {
    department: "General Medicine",
    doctors: [
      {
        name: "Dr. Aswini Rana",
        timings: "By Appointment",
        hospital: "CARE N CURE",
        image: imgAswini // Using the imported variable
      }
    ]
  },
  {
    department: "Orthopaedics",
    doctors: [
      {
        name: "Dr. Aranyak Sarkar",
        timings: "By Appointment",
        hospital: "Spine & Pain Specialist",
        image: imgAranyak
      }
    ]
  },
  {
    department: "Psychiatry",
    doctors: [
      {
        name: "Dr. Arka Adhvaryu (Retd)",
        timings: "Wed 5pm / others by Appt.",
        hospital: "RG Kar, GD Hospital",
        image: imgArka
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
        image: imgAishee
      },
      {
        name: "Dr. Koustav Jana",
        timings: "By Appointment",
        hospital: "SSKM (PG Hospital)",
        image: imgKoustav
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
        image: imgPartha
      },
      {
        name: "Dr. Sudeshna Mallik",
        timings: "Mon to Sat 6:30 PM",
        hospital: "Spandan Hospital",
        image: imgSudeshna
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
        image: imgSebabrata
      },
      {
        name: "Dr. Krishanko Das",
        timings: "Wed 6pm, Sun 10am",
        hospital: "RG Kar, Charnock",
        image: imgKrishanko
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
    <section id="doctors" className="py-5" style={{ backgroundColor: "#f0f4f8" }}>
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
                pointerEvents: isDown ? "none" : "auto" 
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
                    {/* Doctor Avatar using the imported local image */}
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
                    
                    <div className="text-muted d-flex align-items-center justify-content-center gap-2" style={{ fontSize: "0.85rem", textAlign: "center" }}>
                      <FaHospital style={{ color: "#b4d333", flexShrink: 0 }} />
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