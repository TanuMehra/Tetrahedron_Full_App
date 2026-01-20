"use client";

import ContactForm from "@/components/ContactForm";
import Layout from "@/components/layout/Layout";
import Image from "next/image";

const signaturePrograms = [
  {
    title: "Cost Reduction Strategies",
    description:
      "Shrinking bottom lines and declining profit margins have made it imperative for organizations to manage costs. Organizations are aggressively looking for opportunities to minimize costs without impacting the product/ service quality or market positioning. Read more…",
  },
  {
    title: "Value Engineering & Value Analysis Training",
    description:
      "Value Engineering is a powerful methodology for solving problems and reducing costs, without compromising the performance and quality requirements. The function analysis in VE helps to analyze and improve existing products, components, Read more…",
  },
  {
    title: "Root Cause Analysis (RCA)",
    description:
      "A root cause is a factor that caused a nonconformance and should be permanently eliminated through process improvement. Root cause analysis is a collective term that describes a wide range of approaches, tools, and techniques used to uncover the causes of  Read more…",
  },
  {
    title: "Line Balancing in Manufacturing | Training",
    description:
      "Effective Line Balancing forms the core of every successful organization as they strive to increase productivity without incurring unnecessary costs gathers steam.  Read more…",
  },
  {
    title: "Simple & Low-Cost Automation Industry",
    description:
      "Low-Cost Automation (SLCA) is one of the proven ways for sustenance, profitability, and growth of the company. As Low-Cost Automation is built around existing machines, technologies used are simple and easy to Read more…",
  },
  {
    title: "5s + Safety in the Workplace",
    description:
      "The 5S methodology helps a workplace remove items that are no longer needed (sort), organize the items to optimize efficiency and flow (straighten), implement color coding and labels to stay consistent with other areas (standardize), and develop behaviors that keep the workplace organized. Read more…",
  },
  {
    title: "Total Quality Management (TQM) Training Course in India",
    description:
      "TRIZ is a powerful methodology for enhancing innovation and creativity, solving practical problems, and building new technologies for large and small corporate environments. TRIZ helps organizations to generate more solutions of higher quality in less time. Read more…",
  },
  {
    title: "Problem-Solving with new 7 QC Tools Training in India",
    description:
      "The New 7 QC tools were designed to develop more QC techniques in conjunction with 7 QC tools. The shift from quantitative analysis to non-quantitative will help the managers to improve capabilities, generating more ideas & implement a problem-solving approach. Read more…",
  },
  {
    title: "Performance Management and Improvement Plan",
    description:
      "“Performance Management” is a tool used to create an environment for the employee to perform the best of their abilities and Deliver good quality of works. It also helps to Track and evaluates work as per the employee’s abilities and efficiency. It helps to enhance their productivity and efficiency. Read more…",
  },
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
                Process Improvement Training Courses
              </h1>
              <h2 style={{ ...subheadingStyle, fontFamily: "var(--font-poppins)" }}>
                Learn valuable &amp; practical skills for your business growth
              </h2>
              <div style={{ ...divider, fontFamily: "var(--font-poppins)" }}></div>
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
            Process Improvement Training Workshops help you improve your organization’s Quality and Process. This training course will help you learn to leverage your current business strategy to drive improvement, develop tools, identify problem areas, measure performance, validate changes and create models of current and future processes and help maximize efficiency and productivity. In Order to minimize risk and improve customer satisfaction, you need to ensure your processes are optimized.
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
            With an effective strategy for continuous improvement, your business minimizes the risk of stagnating and falling behind in today’s competitive marketplace. From workplace organization and standard operating procedures, to process synchronization and quality management, it’s important that the people involved in improving your company’s processes are given the right knowledge, tools, and techniques to successfully implement a systematic approach. In developing a team attitude toward improving quality at all levels, managers and business owners must demonstrate their own commitment by providing the necessary training and support  Process Improvement Training Modules Helps you acquire all the valuable and practical skills your business needs to consistently achieve operational excellence and inspire customer delight.
          </p>
        </div>

        {/* Key Highlights Section */}
        <div style={highlightSection}>
          <h2 style={{ ...highlightHeading, fontFamily: "var(--font-poppins)" }}>
            KEY HIGHLIGHTS OF PROCESS WORKSHOP
          </h2>
          <div style={{ maxWidth: 900, margin: "0 auto 40px", fontFamily: "var(--font-poppins)" }}>
            <p style={{ ...paragraphStyle, fontSize: "18px", lineHeight: "1.8", textAlign: "justify" }}>
              Our vast portfolio of experience includes every modality available for technical learners: instructor-led both in the classroom and virtual environment; self-paced eLearning, podcasts, videos, mobile learning solutions, game-based learning, and social learning.<br /><br />
              When new modalities are introduced, the team at Tetrahedron makes sure it learns and masters those platforms and training strategies. <br /><br />
              Ours is a consultative approach.<br /><br />
              Even when a client asks for a proposal on a specific modality, Tetrahedron does its due diligence to make sure the preferred approach can achieve the client’s learning objectives within their budget and timeframe.<br /><br />
              In the event, our needs assessment finds an alternative or blended approach that would provide stronger results we are not afraid to say so. In fact, we believe it’s our obligation to do so.
            </p>
          </div>
          <div style={highlightGrid}>
            {[
              {
                id: 1,
                title: "Instructor-led Training",
                description:
                  "Instructor-led both in the classroom and virtual environment for technical learners.",
                icon: "/assets/images/course/highlights1.jpg",
              },
              {
                id: 2,
                title: "Self-paced eLearning",
                description:
                  "Flexible eLearning, podcasts, videos, and mobile learning solutions.",
                icon: "/assets/images/course/highlights2.jpg",
              },
              {
                id: 3,
                title: "Game-based & Social Learning",
                description:
                  "Engaging game-based learning and social learning experiences.",
                icon: "/assets/images/course/highlights3.jpg",
              },
              {
                id: 4,
                title: "Consultative Approach",
                description:
                  "We ensure the preferred approach achieves your learning objectives within budget and timeframe.",
                icon: "/assets/images/course/highlights4.jpg",
              },
              {
                id: 5,
                title: "Expert Team",
                description:
                  "Our team includes instructional designers, curriculum writers, graphic designers, and eLearning developers.",
                icon: "/assets/images/course/highlights5.png",
              },
            ].map((item) => (
              <div key={item.id} style={{ ...highlightCard, fontFamily: "var(--font-poppins)" }}>
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
          <div style={{ maxWidth: 900, margin: "40px auto 0", fontFamily: "var(--font-poppins)" }}>
            <p style={{ ...bannerTextStyle, color: "#003366", textAlign: "center", fontSize: "18px" }}>
              Request to know more about the Process Improvement Training Program Courses
            </p>
          </div>
        </div>

        {/* Signature Programs */}
        <div style={{ ...paragraphContainer, marginTop: 0, textAlign: "center" }}>
          <h2
            style={{
              ...highlightHeading,
              fontFamily: "var(--font-poppins)",
              fontSize: "32px",
              marginBottom: "24px",
            }}
          >
            SOME OF OUR SIGNATURE PROGRAMS
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 20px 40px 20px",
            }}
          >
            {signaturePrograms.map((program, idx) => (
              <div
                key={idx}
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                  padding: "28px 24px",
                  fontFamily: "var(--font-poppins)",
                  minHeight: "220px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <h3 style={{ ...highlightTitle, fontSize: "20px", marginBottom: "10px", textAlign: "center" }}>
                  {program.title}
                </h3>
                <p style={{ ...highlightText, fontSize: "16px", lineHeight: "1.6", textAlign: "center"  }}>
                  {program.description}
                </p>
              </div>
            ))}
          </div>
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

const highlightGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "32px",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px 0",
};

const highlightCard = {
  padding: "32px",
  borderRadius: "16px",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.05)",
  transition: "transform 0.3s ease",
  textAlign: "center",
  minWidth: "240px",
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
