import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="d-none d-lg-flex justify-content-between align-items-center px-5 py-2 text-white" style={{ backgroundColor: "#0ea5d7", fontSize: "14px" }}>
      <div className="d-flex align-items-center gap-4">
        <span className="d-flex align-items-center gap-2"><FaPhoneAlt /> 79803-67584</span>
        <span className="d-flex align-items-center gap-2"><FaEnvelope /> asr.clinic@gmail.com</span>
        <span className="d-flex align-items-center gap-2"><FaMapMarkerAlt /> Dlf Heights Plaza, 1st Floor, Shop - 117, New Town, Kolkata</span>
      </div>
      <div className="d-flex align-items-center gap-3">
        <FaTwitter className="cursor-pointer hover-opacity" />
        <FaLinkedinIn className="cursor-pointer hover-opacity" />
        <FaFacebookF className="cursor-pointer hover-opacity" />
      </div>
    </div>
  );
};

export default TopBar;