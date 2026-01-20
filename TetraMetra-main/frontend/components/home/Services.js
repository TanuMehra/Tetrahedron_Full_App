"use client";

import React, { useState, useEffect } from "react";
import {
  FaCarSide, FaTractor, FaTools, FaBicycle, FaUtensils, FaCapsules,
  FaMicrochip, FaTv, FaDoorOpen, FaFighterJet, FaOilCan, FaLaptopCode,
  FaCubes, FaIndustry, FaPlug, FaCogs, FaRobot, FaFlask, FaGem, FaTshirt
} from "react-icons/fa";

const industries = [
  { icon: FaCarSide, text: "4W 2W OEMs", image: "/assets/images/industries/1.1.png" },
  { icon: FaTractor, text: "Construction & Agri Implement", image: "/assets/images/industries/2.2.png" },
  { icon: FaTools, text: "Automotive Component Tier 1", image: "/assets/images/industries/3.3.png" },
  { icon: FaCarSide, text: "2W EV / 3W EV and EV Component", image: "/assets/images/industries/4.4.png" },
  { icon: FaBicycle, text: "Cycle and Cycle Parts", image: "/assets/images/industries/5.5.png" },
  { icon: FaUtensils, text: "Food, Ice-cream & Confectionary", image: "/assets/images/industries/6.6.png" },
  { icon: FaCapsules, text: "Pharma, Medical & Disposables", image: "/assets/images/industries/7.7.png" },
  { icon: FaMicrochip, text: "Electrical & Electronics", image: "/assets/images/industries/8.8.png" },
  { icon: FaTv, text: "Consumer Durable & Electronics", image: "/assets/images/industries/9.9.png" },
  { icon: FaDoorOpen, text: "Windows, Doors, Glass, Lifts", image: "/assets/images/industries/10.10.png" },
  { icon: FaFighterJet, text: "Aerospace, Defense, Explosive & Weapon", image: "/assets/images/industries/11.11.png" },
  { icon: FaOilCan, text: "PSUs Energy, Oil & Gas", image: "/assets/images/industries/12.12.png" },
  { icon: FaLaptopCode, text: "IT / Industry 4.0 / Software", image: "/assets/images/industries/13.13.png" },
  { icon: FaCubes, text: "Plastic & Plastic Products", image: "/assets/images/industries/14.14.png" },
  { icon: FaIndustry, text: "Steel, Aluminum & Metal", image: "/assets/images/industries/15.15.png" },
  // { icon: FaPlug, text: "Cable Conductor Wires Nails", image: "/assets/images/industries/16.16.png" },
  { icon: FaCogs, text: "Heavy Engg, Precision Fabrication, Project Infra", image: "/assets/images/industries/17.17.png" },
  { icon: FaRobot, text: "Machine Manufacturing and Robot", image: "/assets/images/industries/18.18.png" },
  { icon: FaFlask, text: "Fertilizer, Paper, Cement, Carbon, Refractory, ElectroCeramic", image: "/assets/images/industries/19.19.png" },
  { icon: FaGem, text: "Gems & Jewelry", image: "/assets/images/industries/20.20.png" },
  { icon: FaTshirt, text: "Textile, Garment, Footwear", image: "/assets/images/industries/21.21.png" },
  { icon: FaCogs, text: "Logistics / 3PL / SCM", image: "/assets/images/industries/22.22.png" }
];

export default function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    mobile: '',
    requirements: ''
  });
  const [modal, setModal] = useState({ open: false, message: '', success: false });
  const [loading, setLoading] = useState(false);
  const images = [
    // "/assets/images/industries/1.1.png",
    "/assets/images/industries/2.2.png",
    "/assets/images/industries/3.3.png",
    "/assets/images/industries/4.4.png",
    // "/assets/images/industries/5.5.png",
    // "/assets/images/industries/6.6.png",
    // "/assets/images/industries/7.7.png",
    // "/assets/images/industries/img8.jpg",
    // "/assets/images/industries/img9.jpg",
    // "/assets/images/industries/img10.jpg"
    // Add as many as you want
  ];

  useEffect(() => {
    if (selectedIndustry) {
      // When modal opens, disable body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // When modal closes, re-enable body scroll
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to re-enable scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndustry]);

  useEffect(() => {
    if (selectedIndustry) {
      // When modal opens, disable body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // When modal closes, re-enable body scroll
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to re-enable scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndustry]);

  // Modal form submit handler
  async function handleModalFormSubmit(e) {
    e.preventDefault();
    setLoading(true);
    console.log('Sending service modal form data:', formData);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setModal({ open: true, message: 'Form submitted successfully!', success: true });
        setSelectedIndustry(null);
        setFormData({ name: '', company: '', email: '', mobile: '', requirements: '' });
      } else {
        setModal({ open: true, message: 'Failed to submit form.', success: false });
      }
    } catch (err) {
      setModal({ open: true, message: 'Failed to submit form.', success: false });
    }
    setLoading(false);
    setTimeout(() => setModal({ ...modal, open: false }), 3000);
  }

  return (
    <section style={{ padding: "40px 20px", backgroundColor: "#f4f4f4" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>
          INDUSTRIES WE SERVE
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: "15px",
          }}
        >
          {industries.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                setSelectedIndustry(selectedIndustry === item ? null : item)
              }
              style={{
                backgroundColor: "white",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
              }}
            >
              <span
                style={{
                  fontSize: "45px",
                  color: "darkblue",
                  marginBottom: "10px",
                }}
              >
                {React.createElement(item.icon)}
              </span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#333",
                  textAlign: "center",
                }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {selectedIndustry && (
        <div
          id="modalOverlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            overflowY: "auto", // enable vertical scroll
            paddingTop: "60px",
            paddingBottom: "60px", // give bottom space
            zIndex: "9999",
            opacity: 1,
            transition: "opacity 0.4s ease",
            animationName: "fadeIn",
            animationDuration: "0.5s",
          }}
          // onClick={(e) => {
          //   if (e.target.id === "modalOverlay") {
          //     setSelectedIndustry(null);
          //   }
          // }}
        >
          <style>
            {`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes scaleOut {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(0.8); opacity: 0; }
        }
        ::placeholder {
          color: #a0aec0;
          opacity: 1;
        }
        #modalContent::-webkit-scrollbar {
          width: 6px;
        }
        #modalContent::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.1);
          border-radius: 3px;
        }
        #modalContent::-webkit-scrollbar-thumb {
          background: rgba(76,81,191,0.3);
          border-radius: 3px;
        }
        #modalContent::-webkit-scrollbar-thumb:hover {
          background: rgba(76,81,191,0.5);
        }
      `}
          </style>
          <div
            style={{
              backgroundColor: "#f9f9ff",
              padding: "35px",
              borderRadius: "28px",
              width: "95%",
              maxWidth: "800px",
              position: "relative",
              display: "flex",
              flexDirection: window.innerWidth > 768 ? "row" : "column",
              gap: "25px",
              boxShadow: "0 25px 50px rgba(76,81,191,0.25)",
              border: "1px solid rgba(255,255,255,0.9)",
              animationName: "scaleIn",
              animationDuration: "0.5s",
              animationTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              minHeight: "auto",
              maxHeight: "90vh", // allow up to 90% of viewport height
              overflowY: "auto", // enable scroll within modal
              margin: "20px 0", // add margin for better spacing
            }}
            onClick={(e) => e.stopPropagation()}
            id="modalContent"
          >
            <button
              onClick={() => {
                const modal = document.getElementById("modalOverlay");
                const content = document.getElementById("modalContent");
                if (modal && content) {
                  content.style.animationName = "scaleOut";
                  modal.style.animationName = "fadeOut";
                  content.style.animationDuration = "0.4s";
                  modal.style.animationDuration = "0.4s";
                  setTimeout(() => setSelectedIndustry(null), 380);
                } else {
                  setSelectedIndustry(null);
                }
              }}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "linear-gradient(135deg, #f56565, #e53e3e)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "16px",
                fontWeight: "bold",
                boxShadow: "0 4px 8px rgba(229,62,62,0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.background = "linear-gradient(135deg, #e53e3e, #c53030)";
                e.target.style.transform = "scale(1.1)";
                e.target.style.boxShadow = "0 6px 12px rgba(229,62,62,0.5)";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "linear-gradient(135deg, #f56565, #e53e3e)";
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 4px 8px rgba(229,62,62,0.3)";
              }}
            >
              ×
            </button>

            <div
              style={{
                width: window.innerWidth > 768 ? "40%" : "100%",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                justifyContent: "space-between",
              }}
            >
              {images.map((imgSrc, idx) => (
                <img
                  key={idx}
                  src={imgSrc}
                  alt={`Industry ${idx}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                    border: "2px solid #fff",
                    boxShadow: "0 5px 10px rgba(0,0,0,0.08)",
                  }}
                />
              ))}
            </div>

            <form
              onSubmit={handleModalFormSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                width: window.innerWidth > 768 ? "60%" : "100%",
                gap: "16px",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  background: "var(--elitecons-base)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "700",
                  margin: "0 0 10px 0",
                  textAlign: "center",
                  letterSpacing: "0.5px",
                  fontFamily: "'Montserrat', 'Poppins', sans-serif",
                }}
              >
                {selectedIndustry.text}
              </h3>

              {/* Full Name */}
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: "15px", top: "50%", transform: "translateY(-50%)", fontSize: "16px", zIndex: "2" }}>👤</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    padding: "14px 14px 14px 45px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "14px",
                    width: "100%",
                    color: "#2d3748",
                    fontSize: "16px",
                    fontFamily: "'Montserrat', 'Poppins', sans-serif",
                    fontWeight: "400",
                    outline: "none",
                    backgroundColor: "rgba(255,255,255,0.8)",
                    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  }}
                  required
                />
              </div>
              {/* Company Name */}
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: "15px", top: "50%", transform: "translateY(-50%)", fontSize: "16px", zIndex: "2" }}>🏢</span>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name *"
                  value={formData.company}
                  onChange={e => setFormData({ ...formData, company: e.target.value })}
                    style={{
                    padding: "14px 14px 14px 45px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "14px",
                    width: "100%",
                    color: "#2d3748",
                      fontSize: "16px",
                    fontFamily: "'Montserrat', 'Poppins', sans-serif",
                    fontWeight: "400",
                    outline: "none",
                    backgroundColor: "rgba(255,255,255,0.8)",
                    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  }}
                  required
                />
              </div>
              {/* Email */}
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: "15px", top: "50%", transform: "translateY(-50%)", fontSize: "16px", zIndex: "2" }}>✉️</span>
                  <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      padding: "14px 14px 14px 45px",
                      border: "2px solid #e2e8f0",
                      borderRadius: "14px",
                      width: "100%",
                      color: "#2d3748",
                      fontSize: "16px",
                      fontFamily: "'Montserrat', 'Poppins', sans-serif",
                      fontWeight: "400",
                      outline: "none",
                      backgroundColor: "rgba(255,255,255,0.8)",
                      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
                      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    }}
                  required
                />
              </div>
              {/* Mobile No */}
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: "15px", top: "50%", transform: "translateY(-50%)", fontSize: "16px", zIndex: "2" }}>📱</span>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile No *"
                  value={formData.mobile}
                  onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                  style={{
                    padding: "14px 14px 14px 45px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "14px",
                    width: "100%",
                    color: "#2d3748",
                    fontSize: "16px",
                    fontFamily: "'Montserrat', 'Poppins', sans-serif",
                    fontWeight: "400",
                    outline: "none",
                    backgroundColor: "rgba(255,255,255,0.8)",
                    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  }}
                  required
                />
              </div>
              {/* Your Requirements */}
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: "15px", top: "50%", transform: "translateY(-50%)", fontSize: "16px", zIndex: "2" }}>📋</span>
                <input
                  type="text"
                  name="requirements"
                  placeholder="Your Requirements *"
                  value={formData.requirements}
                  onChange={e => setFormData({ ...formData, requirements: e.target.value })}
                  style={{
                    padding: "14px 14px 14px 45px",
                    border: "2px solid #e2e8f0",
                    borderRadius: "14px",
                    width: "100%",
                    color: "#2d3748",
                    fontSize: "16px",
                    fontFamily: "'Montserrat', 'Poppins', sans-serif",
                    fontWeight: "400",
                    outline: "none",
                    backgroundColor: "rgba(255,255,255,0.8)",
                    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  }}
                  required
                  />
                </div>

              <button
                type="submit"
                style={{
                  background: "var(--elitecons-base)",
                  color: "#ffffff",
                  padding: "16px 28px",
                  border: "none",
                  borderRadius: "14px",
                  fontSize: "17px",
                  fontWeight: "600",
                  letterSpacing: "0.5px",
                  cursor: loading ? 'not-allowed' : 'pointer',
                  marginTop: "10px",
                  transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  boxShadow: "0 6px 15px rgba(76,81,191,0.3)",
                  textTransform: "uppercase",
                  opacity: loading ? 0.7 : 1
                }}
                disabled={loading}
                onMouseOver={(e) => {
                  if (!loading) {
                  e.target.style.background = "var(--elitecons-base)";
                  e.target.style.boxShadow = "0 8px 20px rgba(76,81,191,0.5)";
                  e.target.style.transform = "translateY(-3px) scale(1.02)";
                  e.target.style.letterSpacing = "1px";
                  }
                }}
                onMouseOut={(e) => {
                  if (!loading) {
                  e.target.style.background = "var(--elitecons-base)";
                  e.target.style.boxShadow = "0 6px 15px rgba(76,81,191,0.3)";
                  e.target.style.transform = "translateY(0) scale(1)";
                  e.target.style.letterSpacing = "0.5px";
                  }
                }}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      )}

      {modal.open && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 99999 }} onClick={() => setModal({ ...modal, open: false })}>
          <div style={{ background: '#fff', padding: '32px 48px', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', textAlign: 'center', minWidth: '300px', fontSize: '18px', color: modal.success ? 'green' : 'red', fontWeight: 'bold', position: 'relative' }}>
            <span style={{ position: 'absolute', top: 8, right: 16, cursor: 'pointer', fontSize: 24, color: '#888' }} onClick={() => setModal({ ...modal, open: false })}>×</span>
            {modal.message}
          </div>
        </div>
      )}

    </section>
  );
}
