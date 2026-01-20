"use client";

import ContactForm from "@/components/ContactForm";
import Layout from "@/components/layout/Layout";
import Image from "next/image";

const signaturePrograms = [
  {
    title: "Advanced Product Quality Planning Program (APQP)",
    description:
      "Advanced Product Quality Planning (APQP) is a quality framework used for developing new products in the automotive industry. It can be applied to any industry. Its purpose is “to produce a product quality plan which will support the development Read More",
  },
  {
    title: "Design Failure Mode Effect Analysis (DFMEA)",
    description:
      "Design FMEA is a structured approach that ensures potential failure modes and their associated causes have been considered and addressed in the product design. It identifies design functions, failure modes, Read More",
  },
  {
    title: "Process Failure Mode Effect Analysis (PFMEA)",
    description:
      "Process FMEA is a structured approach that ensures potential process failure modes and their associated causes have been considered and addressed in the design of the process. The Process FMEA is being conducted after the Design FMEA process and  Read More",
  },
  {
    title: "Statistical Process Control (SPC)",
    description:
      "SPC is a method of measuring and controlling quality by monitoring the manufacturing process. Quality data is collected in the form of product or process measurements or readings from various machines or instrumentation. The data is collected and used to evaluate, monitor, and control a process. SPC is an effective method to drive continuous improvement. Read More",
  },
  {
    title: "Geometric Dimensioning & Tolerancing (GD&T)",
    description:
      "Geometric Dimensioning and Tolerancing has extensive use in automotive industries, has been identified as a required skill in the Quality System Requirement section of Automotive Industry Action Group’s (AIAG) new quality standard. TS16949:2002  Read More",
  },
  {
    title: "Advanced GD&T Training Course",
    description:
      "Advanced GD&T has found its greatest application in mass production, where interchangeability of blindly selected parts is essential. Without GD&T and tolerance analysis, there is no way to know what parts have been designed such that all manufactured parts will fit together at assembly. Read More",
  },
  {
    title: "Inventory Management and Stock Management",
    description:
      "Inventory Management is a key strategic enabler in a company’s ability to design its manufacturing process, deliver to customer expectations, and minimize overall costs.IM does not make decisions or manage operations, provide information to managers Read More",
  },
  {
    title: "Production Part Approval Process Training",
    description:
      "The Production Part Approval Process (PPAP) is a standardized process in the automotive and aerospace industries that helps manufacturers and suppliers communicate and approve production designs and processes before, during, and after Read More",
  },
  {
    title: "Industry 4.0",
    description:
      "Industry 4.0 and advanced manufacturing both are topics of high international relevance. They are currently the topic of intense debate both in the academic literature and in the practical context of the 4th Industrial Revolution. As per a recent survey of top CEOs of manufacturing companies, suppliers who are prepared for this 4th revolution will be able Read More",
  },
  {
    title: "Virtual Reality – VR",
    description:
      "Virtual reality (VR) is a computer-generated scenario that simulates a realistic experience. The immersive environment can be similar to the real world in order to create a lifelike experience grounded in reality or sci-fi. Virtual reality technology has enabled humans to face anything at any place at any point in time. It feels like we are in a virtual world and feels the earth around us reasonably. Read More",
  },
  {
    title: "Design Of Experiment (DOE)",
    description:
      "Design of Experiments, in general, is a useful method for solving problems, optimizing, designing products, and manufacturing and engineering. Design of Experiments is applied for root cause quality analysis, developing optimized and robust designs, producing analytical and mathematical models to forecast the system  Read More",
  },
  {
    title: "Electric Vehicle (EV)",
    description:
      "Electric Vehicles (EV) have been available in the market for the last 110 years. During the first stage of vehicles’ development, there were only two competitors, internal combustion engine (ICE) and EV. The EV was a lead vehicle compared to ICE until 1930; after that time the panorama changed due to the maturity of gasoline. Read More ",
  },
  {
    title: "Design For Quality (DFQ)",
    description:
      "“Design for Quality” is used to design the product that delights the customer experience, provides the product that can compete over various quality factors, and also provide a long-lasting and durable product/Service. This play very important role to gain customer trust and long term customer. Read More",
  },
  {
    title: "OEE Calculation and Improvement Action",
    description:
      "OEE is used to calculate the productive time of manufacturing over the total available time for manufacturing. It helps to improve the manufacturing processes to increase production. The factors that are considered during OEE calculation are productivity, Read More ",
  },
  {
    title: "Total Productive Maintenance",
    description:
      "TPM is used for the systematic maintenance of the equipment/machines as per requirement. It helps to Improve equipment lifetime and Durability. Also to Prevent accidents, Breakdown, and Slow Production, TPM play a very important role. It maximizes the operational efficiency. Read More",
  },
  {
    title: "Industry 5.0",
    description:
      "The fifth industrial revolution is known as Industry 5.0 and is being evolved to focus on the personalized demand of customers. Industry 5.0 provides computing power to the industry, which is to facilitate the digital manufacturing systems and is built to communicate with other systems. Read More",
  },
  {
    title: "Measurement System Analysis (MSA)",
    description:
      "Measurement System Analysis is a method used to validate the correctness of the Measurement System used in data collection statistically by studying the variability contributed to the overall system by the measurement system. Read More",
  },
];

export default function Page() {
  return (
    <Layout>
      <div style={{ ...containerStyle, fontFamily: "var(--font-poppins)" }}>
        {/* Banner Section */}
        <section style={bannerWrapper}>
          {/* Image with black overlay */}
          <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            <Image
              src="/assets/images/backgrounds/technical-training-program.png"
              alt="Technical Training Banner"
              fill
              priority
              style={{ objectFit: "cover", zIndex: 1 }}
            />

            {/* Black overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)", // adjust opacity as needed
                zIndex: 2,
              }}
            />
          </div>

          {/* Text content above overlay */}
          <div
            style={{
              ...bannerContent,
              position: "absolute",
              top: "50%",
              left: "5%",
              transform: "translateY(-50%)",
              zIndex: 3,
            }}
          >
            <h1 style={headingStyle}>Technical Training Programs</h1>
            <h2 style={subheadingStyle}>You Can Do It When You Skill It</h2>
            <div style={divider}></div>
            <p style={bannerTextStyle}>
              Request to know more about the Technical Training
            </p>
          </div>
        </section>

        {/* Main Description */}
        <div style={twoColumnSection}>
          <div style={leftColumn}>
            <p style={{ ...paragraphStyle }}>
              Technical Training is all about the job obtaining the necessary
              skills to do a job, adding new tools to enhance the job.
              Relearning, smarter, faster, processes to expand the job. It helps
              to create and maintain employees who succeed in doing jobs that
              keep a competitive edge in their marketplace. People working in
              manufacturing industries need to be technically proficient.
              Technical Training workshops are best suited for middle management
              people, line engineers, and supervisors.
            </p>
            <p style={{ ...paragraphStyle }}>
              Tetrahedron has 160+ Technical Workshop modules to ensure the
              right technical skills for the workers. Our training is designed
              so that each participant can learn and acquire the right job skill
              specific to its job role and implement the learning in real-time.
              Our client is tangible proof of our work.
            </p>
            <p style={{ ...paragraphStyle }}>
              Tetrahedron has partnered with clients in industry sectors ranging
              from pharmaceuticals to engineering to medical devices and
              automotive to design, develop and deliver technical content and
              technical training to internal teams, manufacturing professionals,
              etc.
            </p>
          </div>
          <div style={rightColumn}>
            <ContactForm />
          </div>
        </div>

        {/* Key Highlights Section */}
        <div style={highlightSection}>
          <h2
            style={{ ...highlightHeading, fontFamily: "var(--font-poppins)" }}
          >
            KEY HIGHLIGHTS OF TECHNICAL WORKSHOP
          </h2>
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
          <div
            style={{
              maxWidth: 900,
              margin: "40px auto 0",
              fontFamily: "var(--font-poppins)",
            }}
          >
            <p
              style={{
                ...paragraphStyle,
                fontSize: "18px",
                lineHeight: "1.8",
                textAlign: "justify",
              }}
            >
              When new modalities are introduced, the team at Tetrahedron makes
              sure it learns and masters those platforms and training
              strategies.
              <br />
              <br />
              Ours is a consultative approach. Even when a client asks for a
              proposal on a specific modality, Tetrahedron does its due
              diligence to make sure the preferred approach can achieve the
              client’s learning objectives within their budget and timeframe.
              <br />
              <br />
              In the event, our needs assessment finds an alternative or blended
              approach that would provide stronger results we are not afraid to
              say so. In fact, we believe it’s our obligation to do so.
              <br />
              <br />
              Our Team of Technical Training Experts includes instructional
              designers, curriculum writers, graphic designers, and eLearning
              developers who have expertise in the training and skill
              development field.
            </p>
          </div>
        </div>

        {/* Program Courses Section */}
        <div style={{ ...paragraphContainer, marginTop: 40 }}>
          <h2
            style={{
              ...highlightHeading,
              fontFamily: "var(--font-poppins)",
              fontSize: "32px",
              marginBottom: "24px",
            }}
          >
            Program Courses
          </h2>
          {/* Video Player Placeholder */}
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
              <source
                src="/assets/videos/technical-training-intro.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Signature Programs */}
        <div
          style={{ ...paragraphContainer, marginTop: 0, textAlign: "center" }}
        >
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
                <h3
                  style={{
                    ...highlightTitle,
                    fontSize: "20px",
                    marginBottom: "10px",
                    textAlign: "center",
                  }}
                >
                  {program.title}
                </h3>
                <p
                  style={{
                    ...highlightText,
                    fontSize: "16px",
                    lineHeight: "1.6",
                    textAlign: "center",
                  }}
                >
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
// Container
const containerStyle = {
  maxWidth: "1440px",
  margin: "0 auto",
  boxSizing: "border-box",
  fontFamily: "var(--font-poppins)",
};

// Banner / Hero Section
const bannerWrapper = {
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  color: "#fff",
  margin: 0,
  padding: 0,
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
  lineHeight: "1.2",
  marginBottom: "1rem",
  color: "#fff",
};

const subheadingStyle = {
  fontSize: "1.5rem",
  fontWeight: "400",
  color: "rgba(255,255,255,0.9)",
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
  color: "rgba(255,255,255,0.85)",
};

// Two-Column Section (Paragraph + Contact Form)
const twoColumnSection = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "40px",
  width: "100%",
  maxWidth: "1200px",
  margin: "80px auto",
  padding: "0 40px",
  flexWrap: "wrap",
  boxSizing: "border-box",
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
  alignItems: "flex-start",
};

// Paragraph Styles
const paragraphStyle = {
  fontSize: "18px",
  lineHeight: "1.8",
  color: "#333",
  marginBottom: "20px",
  textAlign: "justify",
  fontFamily: "var(--font-poppins)",
};

// Highlights Section
const highlightSection = {
  padding: "80px 20px",
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
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "32px",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 20px",
};

const highlightCard = {
  padding: "16px",
  borderRadius: "16px",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
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
  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
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

// Paragraph Container (for full-width sections)
const paragraphContainer = {
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 20px",
  boxSizing: "border-box",
};

// Video Section
const videoStyle = {
  width: "100%",
  maxWidth: "480px",
  height: "270px",
  borderRadius: "16px",
  boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
  margin: "0 auto 32px",
  background: "#000",
};
