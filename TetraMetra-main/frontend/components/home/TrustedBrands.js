'use client'
import Link from "next/link"

const TrustedBrands = () => {
  return (
    <>
      <section style={{ padding: "40px 0", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
          {/* Responsive Heading */}
          <h2 
            style={{ 
              fontSize: "clamp(26px, 5vw, 64px)", // Responsive font size
              fontWeight: "bold", 
              marginBottom: "20px",
              textAlign: "center"
            }}
          >
            Trusted By Brands
          </h2>

          {/* Image Wrapper */}
          <div 
            style={{ 
              display: "flex", 
              justifyContent: "center",
              alignItems: "center",
              width: "100%", 
              height: "auto"
            }}
          >
            <div 
              style={{
                width: "100%", 
                maxWidth: "1000px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center"
              }}
            >
              <img 
                src="assets/images/resources/TrustedBrands.jpg" 
                alt="Trusted Brands" 
                style={{ 
                  width: "100%", 
                  height: "auto", 
                  objectFit: "contain", 
                  display: "block"
                }} 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedBrands;
