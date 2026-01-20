'use client'
import Layout from "@/components/layout/Layout"

// Data array for team members with bios and highlights
const teamMembersData = [
    {
        id: 1,
        name: "MR. NITIN KUMAR",
        imgSrc: "/assets/images/team/M1.png",
        title: "Alumni IIM Calcutta",
        bio: "Mr. Nitin Kumar is a seasoned strategic and operations leader with 27+ years of experience across diverse manufacturing sectors. He is the Founder-Director of TMS and an expert in driving operational excellence and digital transformation.",
        highlights: [
            "Alumnus of IIM-Calcutta and IIT Roorkee",
            "Expertise in Lean, Six Sigma, and Industry 4.0 implementations",
            "Led transformations in automotive, defence, and pharmaceutical industries",
            "Specializes in FMEA, supply chain optimization, ESG consulting, and smart manufacturing",
            "Corporate trainer and keynote speaker",
            "Visiting faculty to industry bodies and academic institutions",
            "Focused on sustainable manufacturing and performance improvement"
        ]
    },
    {
        id: 2,
        name: "MR. ALOK SAHU",
        imgSrc: "/assets/images/team/M2.png",
        title: "Alumni IIM Calcutta",
        bio: "Mr. Alok Sahu is a seasoned manufacturing strategist with 22+ years of experience in factory transformation and Lean practices. As the Founder-Director of TMS, he brings global expertise to Indian industries through innovative and sustainable manufacturing solutions.",
        highlights: [
            "Alumnus of IIM-Calcutta and NIT Rourkela",
            "Expert in Lean methods, Industry 4.0, and low-cost automation",
            "Led large-scale operational excellence projects in automotive, defence, and pharmaceuticals",
            "Specialises  in plant layout, manpower optimization, Dojo-based skill development, and value engineering",
            "Certified energy auditor",
            "Represented India in Japan’s Monozukuri program",
            "Corporate trainer with expertise in world-class manufacturing systems"
        ]
    }
];

export default function Home() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Our Leaders">
                <section className="team-page">
                    <div className="container">
                        <div className="team-grid">
                            {teamMembersData.map((member) => (
                                <div
                                    key={member.id}
                                    className="mycard-team-one__single"
                                    ref={node => {
                                        if (node) {
                                            node.style.setProperty("display", "flex", "important");
                                            node.style.setProperty("position", "relative", "important");
                                            node.style.setProperty("flexDirection", "column", "important");
                                            node.style.setProperty("padding", "0", "important");
                                            node.style.setProperty("boxShadow", "0 6px 18px rgba(0, 0, 0, 0.10)", "important");
                                            node.style.setProperty("overflow", "visible", "important");
                                            node.style.setProperty("background", "#fff", "important");
                                            // Always apply border radius, will be overridden by media queries for mobile
                                            node.style.setProperty("borderRadius", "32px", "important");
                                            node.style.setProperty("maxWidth", "540px", "important");
                                            node.style.setProperty("minWidth", "0", "important"); // allow shrinking on mobile
                                            node.style.setProperty("width", "100%", "important");
                                            node.style.setProperty("margin", "0 auto", "important");
                                        }
                                    }}
                                >
                                    {/* Main Card Parent */}
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            height: "100%",
                                            background: "#FFD54F",
                                            borderRadius: "32px",
                                            padding: "0",
                                            position: "relative",
                                            minHeight: "340px",
                                            maxWidth: "540px",
                                            width: "100%",
                                            margin: "0 auto"
                                        }}
                                    // Set border radius for the card parent using ref
                                    ref={node => {
                                        if (node) {
                                            node.style.setProperty("borderRadius", "32px", "important");
                                        }
                                    }}
                                    >
                                        {/* Image Area */}
                                        <div className="mycard-team-one__img" 
                                         ref={node => {
                                                        if (node) {
                                                            node.style.setProperty("borderRadius", "32px", "important");
                                                            node.style.setProperty("background", "#FFD54F", "important");
                                                            
                                                        }
                                                        }}>
                                            {member.imgSrc && (
                                                <img
                                                    src={member.imgSrc}
                                                    alt={member.name || "Team member photo"}
                                                    ref={node => {
                                                        if (node) {
                                                            node.style.setProperty("height", "auto", "important");
                                                            node.style.setProperty("maxHeight", "320px", "important");
                                                            node.style.setProperty("objectFit", "contain", "important");
                                                            node.style.setProperty("objectPosition", "center", "important");
                                                            node.style.setProperty("background", "#FFD54F", "important");
                                                            node.style.setProperty("borderRadius", "32px", "important");
                                                            node.style.setProperty("padding", "8px", "important");
                                                        }
                                                    }}
                                                    style={{ borderRadius: "32px",
                                                    width: "50%"}}
                                                />
                                            )}
                                        </div>
                                        {/* Card Data */}
                                        <div
                                            className="mycard-team-one__content"
                                            ref={node => {
                                                if (node) {
                                                    node.style.setProperty("position", "static", "important");
                                                    node.style.setProperty("left", "unset", "important");
                                                    node.style.setProperty("transform", "unset", "important");
                                                    node.style.setProperty("bottom", "unset", "important");
                                                    node.style.setProperty("minWidth", "unset", "important");
                                                    node.style.setProperty("backgroundColor", "transparent", "important");
                                                    node.style.setProperty("borderRadius", "32px", "important");
                                                    node.style.setProperty("padding", "18px 18px 16px 18px", "important");
                                                    node.style.setProperty("textAlign", "left", "important");
                                                    node.style.setProperty("boxShadow", "none", "important");
                                                    node.style.setProperty("border", "none", "important");
                                                }
                                            }}
                                        >
                                            <h3
                                                className="mycard-team-one__title"
                                                style={{
                                                    fontSize: "1.18rem",
                                                    fontWeight: 700,
                                                    color: "#1A237E",
                                                    margin: 0,
                                                    marginBottom: "2px",
                                                    letterSpacing: "0.5px",
                                                    textAlign: "center"
                                                }}
                                            >
                                                {member.name}
                                            </h3>
                                            <div
                                                style={{
                                                    fontWeight: 600,
                                                    color: "#D32F2F",
                                                    fontSize: "1.01rem",
                                                    marginBottom: "8px",
                                                    textAlign: "center"

                                                }}
                                            >
                                                {member.title}
                                            </div>
                                            <div
                                                style={{
                                                    color: "#222",
                                                    fontSize: "0.97rem",
                                                    marginBottom: "10px",
                                                    lineHeight: 1.6
                                                }}
                                            >
                                                {member.bio}
                                            </div>
                                            <ul
                                                style={{
                                                    paddingLeft: "16px",
                                                    margin: 0,
                                                    color: "#444",
                                                    fontSize: "0.93rem",
                                                    lineHeight: 1.6,
                                                    listStyle: "disc"
                                                }}
                                            >
                                                {member.highlights.map((point, idx) => (
                                                    <li key={idx}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>

            <style jsx global>{`
                .team-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 32px;
                    max-width: 1200px;
                    margin: 0 auto;
                    border-radius: 32px !important;
                }

                @media (max-width: 1200px) {
                    .team-grid {
                        max-width: 1000px;
                        border-radius: 32px !important;
                    }
                }

                @media (max-width: 900px) {
                    .team-grid {
                        grid-template-columns: 1fr;
                        max-width: 600px;
                        border-radius: 32px !important;
                    }
                }

                @media (max-width: 600px) {
                    .team-grid {
                        grid-template-columns: 1fr;
                        gap: 18px;
                        max-width: 98vw;
                        padding: 0 2vw;
                        border-radius: 32px !important;
                    }
                    .mycard-team-one__single {
                        max-width: 98vw !important;
                        min-width: 0 !important;
                        border-radius: 32px !important;
                        padding: 0 !important;
                    }
                }

                .mycard-team-one__single {
                    max-width: 540px !important;
                    min-width: 400px !important;
                    width: 100% !important;
                    margin: 0 auto !important;
                    border-radius: 32px !important;
                    transition: box-shadow 0.2s;
                }

                @media (max-width: 1200px) {
                    .mycard-team-one__single {
                        border-radius: 32px !important;
                    }
                }
                @media (max-width: 900px) {
                    .mycard-team-one__single {
                        border-radius: 32px !important;
                    }
                }
                @media (max-width: 600px) {
                    .mycard-team-one__single {
                        min-width: 0 !important;
                        border-radius: 32px !important;
                    }
                }

                .mycard-team-one__img {
                    position: relative;
                    background: linear-gradient(135deg, #3023AE, #8549B2);
                    border-radius: 32px !important;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 220px;
                    max-height: 320px;
                }

                @media (max-width: 1200px) {
                    .mycard-team-one__img {
                        border-radius: 32px !important;
                    }
                }
                @media (max-width: 900px) {
                    .mycard-team-one__img {
                        border-radius: 32px !important;
                    }
                }
                @media (max-width: 600px) {
                    .mycard-team-one__img {
                        border-radius: 32px !important;
                        min-height: 140px;
                        max-height: 180px;
                    }
                }

                .mycard-team-one__img img {
                    width: 100%;
                    height: auto;
                    max-height: 320px;
                    object-fit: contain;
                    object-position: center;
                    background: #fff;
                    display: block;
                    border-radius: 32px !important;
                }

                @media (max-width: 1200px) {
                    .mycard-team-one__img img {
                        border-radius: 32px !important;
                    }
                }
                @media (max-width: 900px) {
                    .mycard-team-one__img img {
                        border-radius: 32px !important;
                    }
                }
                @media (max-width: 600px) {
                    .mycard-team-one__img img {
                        border-radius: 32px !important;
                        max-height: 180px;
                    }
                }
            `}</style>
        </>
    )
}
