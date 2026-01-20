"use client";

import Layout from "@/components/layout/Layout";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";

export default function Page() {
  const router = useRouter();

  // Sparkle effect on mousemove
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (Math.random() > 0.95) createSparkle(e.clientX, e.clientY);
    };

    const createSparkle = (x, y) => {
      const sparkle = document.createElement("div");
      sparkle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: #ff5c00;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        left: ${x}px;
        top: ${y}px;
        animation: tempSparkle 1s ease-out forwards;
      `;
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 1000);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Layout>
      <div style={pageWrapper}>
        {/* Background Shapes */}
        <div style={bgShapes}>
          <div style={{ ...shape, ...shape1 }}></div>
          <div style={{ ...shape, ...shape2 }}></div>
          <div style={{ ...shape, ...shape3 }}></div>
          <div style={{ ...shape, ...shape4 }}></div>
        </div>

        {/* Container */}
        <div style={container}>
          <div style={{ ...sparkle, top: "20%", left: "20%" }}></div>
          <div style={{ ...sparkle, top: "30%", right: "25%" }}></div>
          <div style={{ ...sparkle, bottom: "30%", left: "30%" }}></div>
          <div style={{ ...sparkle, bottom: "20%", right: "20%" }}></div>

          <div style={checkmark}>
            <span style={checkmarkIcon}>✓</span>
          </div>

          <h1 style={heading}>Thank You!</h1>
          <p style={paragraph}>
            We appreciate your time and effort. Your submission has been
            received successfully and we'll get back to you soon.
          </p>

          <button
            style={homeBtn}
            onClick={() => {
              setTimeout(() => router.push("/"), 300);
            }}
          >
            🏠 Back to Home
          </button>
        </div>
      </div>

      {/* Temp Sparkle Animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.1);
          }
        }
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 92, 0, 0.7);
          }
          70% {
            box-shadow: 0 0 0 20px rgba(255, 92, 0, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 92, 0, 0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes tempSparkle {
          0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
          }
        }
      `}</style>
    </Layout>
  );
}

// Styles
const pageWrapper = {
  fontFamily: "var(--font-poppins)",
  background: "linear-gradient(135deg, #0a1c4c 0%, #1a2b5c 50%, #0a1c4c 100%)",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
};

const bgShapes = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
};

const shape = {
  position: "absolute",
  borderRadius: "50%",
  background: "rgba(255, 92, 0, 0.1)",
  animation: "float 6s ease-in-out infinite",
};

const shape1 = {
  width: "80px",
  height: "80px",
  top: "20%",
  left: "10%",
  animationDelay: "0s",
};
const shape2 = {
  width: "120px",
  height: "120px",
  top: "60%",
  right: "15%",
  animationDelay: "2s",
};
const shape3 = {
  width: "60px",
  height: "60px",
  bottom: "20%",
  left: "20%",
  animationDelay: "4s",
};
const shape4 = {
  width: "100px",
  height: "100px",
  top: "10%",
  right: "30%",
  animationDelay: "1s",
};

const container = {
  background: "rgba(255, 255, 255, 0.95)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "20px",
  padding: "60px 40px",
  textAlign: "center",
  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
  maxWidth: "500px",
  width: "90%",
  zIndex: 1,
  animation: "fadeInUp 0.8s ease-out both",
};

const sparkle = {
  position: "absolute",
  width: "6px",
  height: "6px",
  background: "#ff5c00",
  borderRadius: "50%",
  animation: "sparkle 2s linear infinite",
};

const checkmark = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  background: "#ff5c00",
  margin: "0 auto 30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  animation: "pulse 2s infinite",
};

const checkmarkIcon = {
  color: "white",
  fontSize: "40px",
  fontWeight: "bold",
};

const heading = {
  color: "#0a1c4c",
  fontSize: "2.5rem",
  fontWeight: 700,
  marginBottom: "20px",
};

const paragraph = {
  color: "#0a1c4c",
  fontSize: "1.1rem",
  lineHeight: 1.6,
  marginBottom: "40px",
  opacity: 0.8,
};

const homeBtn = {
  background: "linear-gradient(135deg, #ff5c00 0%, #ff7a33 100%)",
  color: "white",
  border: "none",
  padding: "15px 40px",
  fontSize: "1.1rem",
  fontWeight: 600,
  borderRadius: "50px",
  cursor: "pointer",
  transition: "all 0.3s ease",
};
