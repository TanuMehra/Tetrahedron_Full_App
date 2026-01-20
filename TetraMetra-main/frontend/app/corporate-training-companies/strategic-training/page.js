"use client";

import ContactForm from "@/components/ContactForm";
import Layout from "@/components/layout/Layout";
import Image from "next/image";

const esgLearningOutcomes = [
  "Understand the importance and benefits of ESG integration and reporting for your organization and stakeholders.",
  "Learn about the various ESG frameworks and standards and how to apply them to your context and goals.",
  "Assess your current ESG performance and identify gaps and opportunities for improvement.",
  "Develop and implement an effective ESG strategy and action plan that aligns with your vision and values.",
  "Communicate and disclose your ESG achievements and impacts in a transparent and credible way.",
  "Access ESG financing and certification options that can enhance your reputation and competitiveness.",
];

export default function Page() {
  return (
    <Layout>
      <div style={{ ...containerStyle, fontFamily: "var(--font-poppins)" }}>
        {/* Banner Section */}
        <div style={bannerContainer}>
          <div style={imageOverlay}>
            <Image
              src="/assets/images/backgrounds/page-header-bg1.jpg"
              alt="Banner"
              layout="fill"
              objectFit="cover"
              style={{ filter: "brightness(0.7)" }}
            />
          </div>
          <div style={{ ...contentWrapper, fontFamily: "var(--font-poppins)" }}>
            <div style={{ ...textContent, width: "50%", fontFamily: "var(--font-poppins)" }}>
              <h1 style={{ ...headingStyle, fontFamily: "var(--font-poppins)" }}>
                ESG Training in India | ESG Courses
              </h1>
              <h2 style={{ ...subheadingStyle, fontFamily: "var(--font-poppins)" }}>
                ESG Training Program: Everything Companies Must Know About Sustainability, Standards & ESG Investing
              </h2>
              <div style={{ ...divider, fontFamily: "var(--font-poppins)" }}></div>
              <p style={{ ...bannerTextStyle, fontFamily: "var(--font-poppins)" }}>
                Request to know more about ESG Training and Certification
              </p>
            </div>
            <div style={{ width: "50%", fontFamily: "var(--font-poppins)" }}>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Main Description */}
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
            <strong>“ESG Training in India”</strong> is the non-financial, sustainability-related area of corporate decision-making and responsibility. Where “E” refers to environmental issues – such as pollution, efficient use of natural resources, and greenhouse emissions – that companies face due to their business activities. “S” refers to social issues like workplace wellbeing and safety, product safety, human rights, and social responsibility. “G” alludes to corporate governance and leadership, including corporate purpose, the rights and representation of shareholders and other stakeholders, and Owners.
          </p>
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
            <strong>ESG Certification Training</strong>
          </p>
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
            <strong>Why Learn ESG Training Courses from us?</strong>
            <br />
            Are you ready to make a real difference in the world? If you’re passionate about environmental, social, and governance (ESG) practices and want to create a positive impact, then our ESG Training Course is the perfect opportunity for you. But why should you choose to learn from us? Allow us to share the compelling reasons:
            <br /><br />
            <strong>Unparalleled Expertise:</strong> At Tetrahedron, we are at the forefront of ESG knowledge and best practices. Our team of seasoned professionals has extensive experience in the field, with a deep understanding of the challenges and opportunities that ESG presents. By learning from us, you’ll gain invaluable insights and practical skills that will set you apart from the competition.
            <br /><br />
            <strong>Credibility and Authority:</strong> We believe that credibility is key in the ESG space. When you participate in our workshop, you’ll receive training from industry experts who have a proven track record of success. Our instructors have not only mastered ESG principles but have also implemented them in real-world scenarios, driving tangible results.
            <br /><br />
            <strong>Practical Strategies:</strong> ESG is not just a theoretical concept—it’s a transformative approach that requires practical implementation. Our workshop goes beyond theory and equips you with actionable strategies to integrate ESG principles into your organisation or projects.
            <br /><br />
            Don’t miss out on this transformative opportunity to become an ESG leader. Join our ESG Training Courses and unlock your potential to create a sustainable future. Together, let’s make a positive impact that transcends generations.
          </p>
        </div>

        {/* Who Should Attend Section */}
        <div style={highlightSection}>
          <h2 style={{ ...highlightHeading, fontFamily: "var(--font-poppins)" }}>
            Who Should Attend
          </h2>
          <div style={{ maxWidth: 900, margin: "0 auto", fontFamily: "var(--font-poppins)" }}>
            <ul style={{ ...paragraphStyle, fontSize: "18px", lineHeight: "1.8", textAlign: "justify", listStyle: "disc inside" }}>
              <li>
                You want to learn how to implement ESG best practices and achieve sustainability goals for your organization.
                <br />
                <span style={{ color: "#666" }}>
                  (Managers, Owners, or professionals in charge of ESG or sustainability initiatives; those seeking to improve ESG knowledge and skills and get certified.)
                </span>
              </li>
              <li style={{ marginTop: "16px" }}>
                You want to learn how to apply ESG frameworks and standards to your organization using global tools and methods.
                <br />
                <span style={{ color: "#666" }}>
                  (Consultants, auditors, or analysts working on ESG or sustainability projects; those seeking to enhance ESG expertise and credibility and get a certificate of completion.)
                </span>
              </li>
              <li style={{ marginTop: "16px" }}>
                You want to learn how to assess and report on ESG issues and how to align them with your sustainability strategy.
                <br />
                <span style={{ color: "#666" }}>
                  (Stakeholders, investors, or regulators interested in ESG or sustainability performance; those seeking practical ESG insights and guidance and a free consultation.)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* What You Will Learn Section */}
        <div style={{ ...paragraphContainer, marginTop: 40 }}>
          <h2
            style={{
              ...highlightHeading,
              fontFamily: "var(--font-poppins)",
              fontSize: "32px",
              marginBottom: "24px",
            }}
          >
            What you will learn in this ESG Training Program?
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "32px",
            }}
          >
            <video
              width="480"
              height="270"
              controls
              poster="/assets/images/video-placeholder.jpg"
              style={{
                borderRadius: "16px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                background: "#000",
              }}
            >
              <source src="/assets/videos/technical-training-intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <ul style={{ ...paragraphStyle, fontSize: "18px", lineHeight: "1.8", textAlign: "justify", listStyle: "disc inside", maxWidth: 900, margin: "0 auto" }}>
            {esgLearningOutcomes.map((item, idx) => (
              <li key={idx} style={{ marginBottom: "12px" }}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

// Styles
const containerStyle = {
  maxWidth: "1440px",
  margin: "0 auto",
  padding: "0 20px",
};

const bannerContainer = {
  position: "relative",
  borderRadius: "24px",
  overflow: "hidden",
  margin: "40px 0",
  minHeight: "600px",
  display: "flex",
  alignItems: "center",
};

const imageOverlay = {
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
};

const textContent = {
  flex: 1,
  color: "#ffffff",
  maxWidth: "600px",
  paddingRight: "40px",
};

const headingStyle = {
  fontSize: "48px",
  fontWeight: "700",
  lineHeight: "1.2",
  marginBottom: "24px",
};

const subheadingStyle = {
  fontSize: "24px",
  fontWeight: "400",
  marginBottom: "16px",
  color: "rgba(255, 255, 255, 0.9)",
};

const divider = {
  width: "80px",
  height: "4px",
  backgroundColor: "#00b4d8",
  margin: "24px 0",
};

const bannerTextStyle = {
  fontSize: "18px",
  lineHeight: "1.6",
  color: "rgba(255, 255, 255, 0.85)",
  textAlign: "left",
  marginTop: "20px",
};

const paragraphContainer = {
  width: "100vw",
  maxWidth: "100%",
  margin: "0",
  padding: "0",
  boxSizing: "border-box",
};

const paragraphStyle = {
  padding: "0 20px",
  fontSize: "16px",
  lineHeight: "1.6",
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
