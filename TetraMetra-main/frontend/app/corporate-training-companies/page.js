"use client";

import ContactForm from "@/components/ContactForm";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  // State variables
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    mobile: "",
    requirement: "",
  });

  const [errors, setErrors] = useState({});

  // Form validation
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.companyName.trim())
      newErrors.companyName = "Company Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Invalid mobile number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        companyName: "",
        email: "",
        mobile: "",
        requirement: "",
      });
    }
  };

  return (
    <Layout>
      <div style={{ ...containerStyle, fontFamily: "var(--font-poppins)" }}>
        {/* Banner Section */}
        <section style={bannerWrapper}>
          {/* Image with overlay */}
          <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            <Image
              src="/assets/images/backgrounds/corporate-training-program.png"
              alt="Banner"
              fill
              priority
              style={{
                objectFit: "cover",
                zIndex: 1,
              }}
            />

            {/* Black overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)", // adjust opacity
                zIndex: 2,
              }}
            />
          </div>

          {/* Text content */}
          <div
            style={{
              ...bannerContent,
              zIndex: 3,
              position: "absolute",
              top: "50%",
              left: "5%",
              transform: "translateY(-50%)",
            }}
          >
            <h1 style={headingStyle}>CORPORATE TRAINING PROGRAMS</h1>
            <h2 style={subheadingStyle}>350+ On-site & Online Trainings</h2>
            <div style={divider}></div>
            <p style={bannerTextStyle}>
              Connect with our experts to discover tailored solutions that drive
              growth and innovation.
            </p>
          </div>
        </section>

        {/* Full-width Paragraph */}
        <div style={twoColumnSection}>
          {/* Left Column - Text */}
          <div style={leftColumn}>
            <p
              style={{
                ...paragraphStyle,
                textAlign: "justify",
                fontSize: "18px",
                lineHeight: "1.8",
                fontFamily: "var(--font-poppins)",
              }}
            >
              Corporate Training Programs are a series of learning activities
              designed to educate employees to perform better on the job. It can
              be considered on-job training for the existing employees. It is a
              function of the human resource operation of an association that
              aims to give knowledge and skills to the workforce to achieve
              success. As it is known, the Manufacturing Sector is a hasty
              industry thus Manufacturing companies need to certify that people
              working in these industries must possess solid processes, strong
              leadership, and technical proficiency which help boost the
              manufacturer’s productivity, decrease employee turnover and
              possibly solve the talent gap and optimize performance.
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <div style={rightColumn}>
            <ContactForm />
          </div>
        </div>

        {/* Highlights Section */}
        <div style={highlightSection}>
          <h2
            style={{ ...highlightHeading, fontFamily: "var(--font-poppins)" }}
          >
            Highlights
          </h2>
          <div style={highlightGrid}>
            {[
              {
                id: 1,
                title: "Delivered by Industry Experts",
                description:
                  "Professional solution with proven results and exceptional support",
                icon: "/assets/images/course/highlights1.jpg",
              },
              {
                id: 2,
                title: "Customizable Training Modules",
                description:
                  "Tailored solutions to fit your organizational needs",
                icon: "/assets/images/course/highlights2.jpg",
              },
              {
                id: 3,
                title: "Interactive Learning Sessions",
                description:
                  "Engaging sessions for better understanding and retention",
                icon: "/assets/images/course/highlights3.jpg",
              },
              {
                id: 4,
                title: "Certification & Recognition",
                description:
                  "Get certified with industry-recognized credentials",
                icon: "/assets/images/course/highlights4.jpg",
              },
              {
                id: 5,
                title: "Comprehensive Course Material",
                description:
                  "Detailed and structured content for in-depth learning",
                icon: "/assets/images/course/highlights5.png",
              },
            ].map((item) => (
              <div
                key={item.id}
                style={{ ...highlightCard, fontFamily: "var(--font-poppins)" }}
              >
                <div style={iconWrapper}>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                    style={highlightIcon}
                  />
                </div>
                <h3 style={highlightTitle}>{item.title}</h3>
                <p style={highlightText}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Full-width Paragraph */}
        <div style={paragraphContainer}>
          <p
            style={{
              ...paragraphStyle,
              textAlign: "justify",
              marginBottom: "20px",
              fontSize: "18px",
              lineHeight: "1.8",
              fontFamily: "var(--font-poppins)",
            }}
          >
            Tetrahedron is the largest end-to-end Training provider with 350+
            Training Modules specifically designed for the individuals and
            organizations with a diverse experience of 25+ industries catering
            to the needs of all levels of management.The standard procedure to
            your learning transformation path starts by making sure to align
            your learning and business strategy. Tetrahedron’s proficiency helps
            as a custom corporate training developer certify us to deliver
            efficacious learning experiences that drive employee
            performance.350+ Online Trainings For Manufacturing Employee.
          </p>
        </div>
      </div>
    </Layout>
  );
}

// InputField Component
const InputField = ({
  name,
  placeholder,
  value,
  error,
  onChange,
  textarea,
}) => (
  <div style={{ marginBottom: "15px" }}>
    {textarea ? (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          ...inputStyle,
          height: "80px",
          fontFamily: "var(--font-poppins)",
        }}
      />
    ) : (
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ ...inputStyle, fontFamily: "var(--font-poppins)" }}
      />
    )}
    {error && (
      <p
        style={{
          color: "red",
          fontSize: "12px",
          marginTop: "5px",
          fontFamily: "var(--font-poppins)",
        }}
      >
        {error}
      </p>
    )}
  </div>
);

// Styles

const bannerWrapper = {
  position: "relative",
  width: "100%", // ✅ makes sure it fills the parent width
  minHeight: "100vh", // ✅ full screen height
  overflow: "hidden",
  margin: 0,
  padding: 0,
  left: "50%",
  right: "50%",
  marginLeft: "-50vw", // ✅ trick to break out of any centered container
  marginRight: "-50vw",
  width: "100vw", // ✅ ensures full viewport width
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  color: "#fff",
  fontFamily: "var(--font-poppins)",
};

const bannerContent = {
  position: "relative",
  zIndex: 2,
  maxWidth: "600px",
  padding: "0 5%",
};

const headingStyle = {
  fontSize: "3.5rem",
  fontWeight: "700",
  marginBottom: "1rem",
  color: "#fff",
};

const subheadingStyle = {
  fontSize: "1.5rem",
  fontWeight: "400",
  color: "rgba(255, 255, 255, 0.9)",
  marginBottom: "1rem",
};

const divider = {
  width: "80px",
  height: "4px",
  backgroundColor: "#00b4d8",
  margin: "1rem 0",
};

const bannerTextStyle = {
  fontSize: "1.125rem",
  lineHeight: "1.8",
  color: "rgba(255, 255, 255, 0.85)",
};

const containerStyle = {
  maxWidth: "1440px",
  margin: "0 auto",
  // padding: "0 20px"
};

const bannerContainer = {
  position: "relative",
  // borderRadius: "24px",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  // margin: "40px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const imageOverlay = {
  maxWidth: "full",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 51, 102, 0.3)",
};

const contentWrapper = {
  position: "relative",
  zIndex: 2,
  display: "flex",
  justifyContent: "space-between",
  gap: "40px",
  padding: "60px",
  width: "100%",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    padding: "40px 20px",
  },
};

const twoColumnSection = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "40px",
  width: "100%",
  maxWidth: "1200px",
  margin: "80px auto",
  padding: "0 40px",
  boxSizing: "border-box",
  flexWrap: "wrap", // ✅ ensures responsive stacking on smaller screens
};

const leftColumn = {
  flex: "1 1 60%",
  minWidth: "300px",
};

const rightColumn = {
  flex: "1 1 35%",
  minWidth: "280px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const paragraphStyle = {
  fontSize: "18px",
  lineHeight: "1.8",
  color: "#333",
};

const textContent = {
  flex: 1,
  color: "#ffffff",
  maxWidth: "600px",
  paddingRight: "40px",
};

const formContainer = {
  background: "rgba(255, 255, 255, 0.95)",
  padding: "40px",
  borderRadius: "20px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  width: "100%",
  maxWidth: "480px",
};

const formTitle = {
  fontSize: "28px",
  fontWeight: "600",
  color: "#003366",
  marginBottom: "32px",
  textAlign: "center",
};

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  fontSize: "16px",
  transition: "all 0.3s ease",
  ":focus": {
    borderColor: "#00b4d8",
    boxShadow: "0 0 0 3px rgba(0, 180, 216, 0.1)",
  },
};

const buttonStyle = {
  width: "100%",
  padding: "16px",
  background: "linear-gradient(135deg, #003366, #00b4d8)",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  transition: "transform 0.2s ease",
  ":hover": {
    transform: "translateY(-2px)",
  },
};

const buttonArrow = {
  fontSize: "20px",
  marginLeft: "8px",
};

const paragraphContainer = {
  width: "100vw",
  maxWidth: "100%",
  margin: "0",
  padding: "0",
  boxSizing: "border-box",
};

const highlightSection = {
  padding: "80px 0",
};

const highlightHeading = {
  fontSize: "36px",
  fontWeight: "700",
  color: "#003366",
  textAlign: "center",
  marginBottom: "48px",
};

const highlightGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "32px",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px 0",
  "@media (max-width: 1200px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  "@media (max-width: 768px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@media (max-width: 480px)": {
    gridTemplateColumns: "1fr",
  },
};

const highlightCard = {
  padding: "32px",
  borderRadius: "16px",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.05)",
  transition: "transform 0.3s ease",
  textAlign: "center",
  minWidth: "240px",
  ":hover": {
    transform: "translateY(-8px)",
  },
};

const iconWrapper = {
  backgroundColor: "#e6f7ff",
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 24px",
};

const highlightIcon = {
  filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))",
};

const highlightTitle = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#003366",
  marginBottom: "12px",
};

const highlightText = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#666",
};
