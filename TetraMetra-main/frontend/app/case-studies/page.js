"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout";

// ✅ Static Import for Images to Fix Next.js Issues
import CS1 from "/public/assets/images/case-studies/CS1.jpg";
import CS2 from "/public/assets/images/case-studies/CS2.jpg";
import CS3 from "/public/assets/images/case-studies/CS3.webp";
import CS4 from "/public/assets/images/case-studies/CS4.jpg";
import CS5 from "/public/assets/images/case-studies/CS5.webp";
import CS6 from "/public/assets/images/case-studies/CS6.jpg";
import CS7 from "/public/assets/images/case-studies/CS7.jpg";
import CS8 from "/public/assets/images/case-studies/CS8.jpg";
import CS9 from "/public/assets/images/case-studies/CS9.webp";
import CS10 from "/public/assets/images/case-studies/CS10.webp";
import CS11 from "/public/assets/images/case-studies/CS11.jpg";
import CS12 from "/public/assets/images/case-studies/CS12.webp";
import CS13 from "/public/assets/images/case-studies/CS13.webp";
import CS14 from "/public/assets/images/case-studies/CS14.webp";
import CS15 from "/public/assets/images/case-studies/CS15.webp";
import CS16 from "/public/assets/images/case-studies/CS16.webp";
import CS17 from "/public/assets/images/case-studies/CS17.png";
import CS18 from "/public/assets/images/case-studies/CS18.jpg";
import CS19 from "/public/assets/images/case-studies/CS19.jpg";
import CS20 from "/public/assets/images/case-studies/CS20.webp";
import CS21 from "/public/assets/images/case-studies/CS21.webp";
import CS22 from "/public/assets/images/case-studies/CS22.jpg";
import CS23 from "/public/assets/images/case-studies/CS23.jpg";


// Case Study Data
const caseStudyData = [
    {
        title: "Manpower Optimisation & Cycle Time Reduction",
        company: "India’s Largest Automobile Manufacturing",
        beforeTetrahedron: [
            "Difficulty in identifying unutilized space & removing unnecessary items",
            " High inventory due to improper line balancing",
            " Manual operations increased cycle time",
            " Lack of ergonomic job & equipment design"
        ],
        ourApproach: [
            "Implemented 5S for workplace efficiency",
            " Line balancing using Time & Motion Study",
            " Automation solutions to reduce cycle time & manpower",
            " Ergonomic improvements for better working conditions"
        ],
        results: [
            "✔ 20% space saved",
            "✔ 100+ unique posters suggested",
            "✔ 30% manpower optimization",
            "✔ 15% cycle time reduction"
        ],
        image: CS1
    },
    {
        title: "Productivity Improvement in Flock Manufacturing",
        company: "India’s Leading Velvet Cloth Manufacturing",
        beforeTetrahedron: [
            " Low productivity, impacting VAPE",
            " High WIP & inventory due to poor planning",
            " Manual loading increased labor & time"
        ],
        ourApproach: [
            " Implemented SOPs for better production planning & WIP control",
            " Designed low-cost automation for efficient material handling"
        ],
        results: [
            "✔ 17% VAPE improvement",
            "✔ 23% WIP reduction"
        ],
        image: CS2
    },
    {
        title: "Total Productive Maintenance (TPM) Implementation",
        company: "Leading Gear Manufacturer (Faridabad, UP)",
        beforeTetrahedron: [
            " OEE at 45%",
            " Skill score below 30%",
            " Low productivity due to overtime & extra manpower"
        ],
        ourApproach: [
            " Designed an 18-month TPM roadmap",
            " Engaged employees through 5S & Kaizen",
            " Improved machine conditions & operator skills",
            " Enhanced breakdown, quality, safety & training"
        ],
        results: [
            "✔ Implemented planned maintenance to improve MTTR & MTBF",
            "✔ Facilitated fault tree analysis with shop floor & management",
            "✔ Identified recurring issues & implemented Kaizen solutions",
            "✔ Created a work progress tracker for continuous monitoring"
        ],
        image: CS3
    },
       {
        title: "Inventory Cost optimization through focused improvement",
        company: "Leading UPVC CPVC Pipes & Fittings Manufacturer (Dadri Plant, UP)",
        beforeTetrahedron: [
            " Low Productivity Leading to Lower VAPE",
            " High WIP and Inventory due to improper Planning",
            " Manual Loading leading to high labor and time"
         
        ],
        ourApproach: [
            "Tetrahedron implemented SOP to improve the Production planning reduce WIP reduction due to reduce order production mismatch, Designing of low-cost automation for material handling. "
            
        ],
        results: [
            "✔ VAPE improved by 17%",
            "✔WIP reduction by 23%",
        
        ],
        image: CS4
    },
    {
        title: "A Success Story on Zero Incident & Zero Accident In Manufacturing Industry",
        company: "Leading Steel Manufacturer (Gaziabad, Delhi-NCR)",
        beforeTetrahedron: [
            " No performance tracking of the safety management system",
            " Lack of urgency at the management level for safety improvements"
        ],
        ourApproach: [
            " Assessed OEE & safety gaps",
            " Developed an action plan & guided shop floor implementation"
        ],
        results: [
            "✔ Safety committee established",
            "✔ Plant divided into designated areas with ownership",
            "✔ Active involvement of top management",
            "✔ Daily safety meetings with workmen"
        ],
        image: CS5
    },
    {
        title: "OEE Improvement",
        company: "Leading Auto Components Manufacturer (Gurgaon, Haryana)",
        beforeTetrahedron: [
            " Poor delivery performance",
            " High product rejection due to quality issues",
            " Frequent machine downtime",
            " Low productivity"
        ],
        ourApproach: [
            " Assessed & tracked OEE parameters (Quality, Availability, Performance)",
            " Developed an action plan to improve OEE & reduce losses",
            " Guided shop floor implementation"
        ],
        results: [
            "✔ OEE tracking system implemented",
            "✔ Loss codes developed for chronic issues",
            "✔ Machine-level OEE data analysis conducted",
            "✔ Loss contributions analyzed over 4 months",
            "✔ OEE color band system introduced for performance monitoring"
        ],
        image: CS6
    },
    {
        title: "Quality Management System Audit",
        company: "Leading Sole Manufacturer (Noida)",
        beforeTetrahedron: [
            " No QMS awareness among the employee",
            " No standard templates were followed",
            " No Proactive quality tool like PFMA was developed"
        ],
        ourApproach: [
            " Conducted the initial QMS gap audit",
            " Shared the findings with the management and staff team",
            " Trained the team on Process FMEA tool"
        ],
        results: [
            "✔ Training and hand-holding for PFMEA development",
            "✔ 50+ Non-conformance points, 150+ observations, & 30 Opportunities points identified",
            "✔ Trained employees on each clause of the QMS"
        ],
        image: CS7
    },
    {
        title: "Green Field Layout of Glazing Division",
        company: "India’s Largest UPVC Manufacturer (Bhiwadi)",
        beforeTetrahedron: [
            " High costs due to manual manufacturing",
            " Low productivity from non-standardized products",
            " High WIP from inefficient material handling",
            " Manual packaging increasing labor costs"
        ],
        ourApproach: [
            " Identified 43 automation opportunities",
            " Implemented 17 high-impact projects"
        ],
        results: [
            "✔ 36% manpower reduction",
            "✔ End-to-end material handling automation",
            "✔ 70% reduction in handling breakages",
            "✔ 40% increase in line productivity"
        ],
        image: CS8
    },
    {
        title: "Lean Layouting in Fettling Operation",
        company: "Leading Global Automotive Part Manufacturer",
        beforeTetrahedron: [
            " Batch process fettling led to high WIP & frequent delivery failures"
        ],
        ourApproach: [
            " Conducted Time & Motion Study from shot-blasting to painting",
            " Designed a Lean Line with a 5-year capacity projection"
        ],
        results: [
            "✔ Operation time reduced from 24 hrs to 19 hrs",
            "✔ Implemented Line Balancing (FIFO & sequential flow)",
            "✔ Identified 20+ simple automation solutions",
            "✔ WIP reduced by 50%"
        ],
        image: CS9
    },
    {
        title: "Energy Saving Projects Funnel Created",
        company: "Leading Heavy Equipment Manufacturer(Odisha)",
        beforeTetrahedron: [
            " Monthly Energy Cost was too high",
            " The management team was serious about the reduction of the plant running costs"
        ],
        ourApproach: [
            " Delivered training on Energy Management System (EMS)",
            " Conducted a Level 3 energy audit across the plant"
        ],
        results: [
            " Developed an internal energy auditing and management team",
            " 65 Energy Savings Project Funnel created"
        ],
        image: CS10
    },
    {
        title: "Energy Cost Reduction Project Implementation",
        company: "Leading Gear Manufacturer (Faridabad)",
        beforeTetrahedron: [
            " High Energy Consumption",
            " No tracking of Heat loss",
            " No Energy-saving projects implemented"
        ],
        ourApproach: [
            " Conducted an on-site Industrial Energy Audit",
            " Developed energy isolation systems and implemented energy-efficient devices"
        ],
        results: [
            "✔ 25 Energy Saving Projects Identified",
            "✔ 18% Energy Cost Reduced",
            "✔ Energy-efficient devices installed across the plant"
        ],
        image: CS11
    },
//  -------------------------------------------------------------------------------------------------
    {
        title: "SCM & Logistic Expenses Optimization Through Heijunka Implementation",
        company: "Leading Surgical Equipment Manufacture (Agra)",
        beforeTetrahedron: [
            " Unstandardized goods transportation",
            " Low volumetric efficiency"
           
        ],
        ourApproach: [
            "  Tetrahedron optimized the supply chain by addressing inefficiencies in product planning and implementing Heijunka for smoother production."
        ],
        results: [
            "✔Standardized logistics process",
            "✔Achieved 96% volumetric efficiency",
            "✔ Highly optimized supply chain"
        ],
        image: CS12
    },
    {
        title: "Logistic Cost Optimization & New Mode of Transportation Implementation",
        company: "Leading Carbon Black Manufacturer (Faridabad)",
        beforeTetrahedron: [
            " Management was highly concerned for high logistic expenses."

        ],
        ourApproach: [
            " Tetrahedron’s SCM experts visited the plant ,collected the initial logistic quantity, rate and route to destination map.",
            "Then analyzed the data and optimize the logistic expenses with multiple logistic partners also suggested client to cost friendly mode of transportation.",
            "TMS Team validated the quote both techno-commercially and supported the client for on-ground execution."
        ],
        results: [
            "✔ Logistic expenses reduced by 30%.",
            "✔ New Mode of transportation was selected and testing results of the implementation was highly successful."
        ],
        image: CS13
    },
    {
        title: "DOJO Training Center Designing & Development",
        company: "Leading Wire Harness Manufacturer (Gurgaon)",
        beforeTetrahedron: [
            " No DOJO Room or training flow",
            " No skill upgradation strategy"
         
        ],
        ourApproach: [
            "  Tetrahedron set up a DOJO Training Center in 1100 sq. meters with 3D simulation, defined roles, and developed two innovative evaluation devices.",

        ],
        results: [
            "✔DOJO Center completed on time",
            "✔ 18% Energy Cost Reduced",
            "✔ 12 DOJO levels implemented"
        ],
        image: CS14
    },
    {
        title: "DOJO Training Strategy Integration with Existing HR Strategy",
        company: "Leading Automotive Manufacturer (Rudrapur)",
        beforeTetrahedron: [
            " Limited DOJO (only Safety & Maintenance)",
            "No employee awareness of DOJO Training"
        ],
        ourApproach: [
            " Tetrahedron planned and set up a 2500 sq. meter DOJO Training Center, developed SOPs, a DOJO Strategy Manual, and linked training with skill levels.",

        ],
        results: [
            "✔ Department-wise DOJO training sequence",
            "✔ Skill matrix integrated with DOJO",
            "✔ OJT KPIs developed and tracked",
            "✔Performance evaluation system implemented",
            "✔ Video & poster-based learning introduced"
        ],
        image: CS15
    },
    {
        title: "Planned Maintenance Implementation",
        company: "Leading UPVC CPVC Pipes & Fittings Manufacturer (Dadri Plant, UP)",
        beforeTetrahedron: [
            "High machine downtime",
            "Poor delivery performance, losing customers",
            "Low productivity & high manufacturing costs due to extra shifts"
        ],
        ourApproach: [
            "  Tetrahedron tracked MTTR & MTBF, analyzed breakdowns, and implemented a maintenance strategy. ",
            " The team was trained and guided from strategy to shop floor execution."
        ],
        results: [
            "✔ Planned maintenance system improved MTTR & MTBF",
            "✔ Chronic issues identified & loss codes developed",
            "✔ Fault tree analysis conducted with shop floor & management",
            "Kaizen initiatives implemented to prevent recurring issues"
        ],
        image: CS16
    },
    {
        title: "Material Handling & Process Automation",
        company: "India’s Largest Precious Metal Exporters",
        beforeTetrahedron: [
            " Extremely labor-intensive operations resulting in high costs",
            " High pilferage of precious raw materials",
            " Quarterly INR 40 Lacs of raw material unaccountable or pilfered"
        ],
        ourApproach: [
            " Tetrahedron helped the company to turn around the operations of the company in an industry which resistant to change.",
            " Following results have been achieved."
        ],
        results: [
            "✔ 15% reduction in Manpower; 20% reduction still ongoing",
            "✔Truck Loading Time Reduced by 28%",
            "✔Contract Worker Cost Reduction by 42% (18 to 10)"
        ],
        image: CS17
    },
    {
        title: "Energy Audit",
        company: "Leading Door & Windows Manufacturer (Rudrapur)",
        beforeTetrahedron: [
            " High Energy Cost",
            " 40% machine breakdown due to air pressure down"
          
        ],
        ourApproach: [
            "Tetrahedron conducted a Level 3 energy audit on the plant set up.",
            "Tetrahedron energy expert identify the inefficient devices which are consuming more energy and suggested the energy efficient devices."
        ],
        results: [
            "✔ 30% Energy consumption cost reduced",
            "✔ 12 new energy efficient pump implemented",
            "✔Training done on Energy Management System"
        ],
        image: CS18
    },
    {
        title: "Single Minute Exchange of Die (SMED) Implementation",
        company: "Leading Medical Equipment Manufacturer (Agra Plant)",
        beforeTetrahedron: [
            "DOJO room had only Safety & Maintenance training",
            " Employees unaware of DOJO training"
         
        ],
        ourApproach: [
            " Tetrahedron set up a 2500 sq. meter DOJO Training Center, developed SOPs, a DOJO Strategy Manual, and linked training with skill levels."
        ],
        results: [
            "✔ Department-wise DOJO training sequence",
            "✔ Skill matrix integrated with DOJO",
            "✔ OJT KPIs developed & tracked",
            "✔ Video & poster-based learning introduced"
        ],
        image: CS19
    },
    {
        title: "5S Culture Implementation",
        company: "India's Leading Shoe Sole Manufacturer (Hosiery Complex, Noida Phase II Extn, Noida Plant)",
        beforeTetrahedron: [
            " Poor 5S practices in shop floor & office",
            " Machines in poor condition",
            "No defined aisles for movement",
            "No employee engagement in 5S"
        ],
        ourApproach: [
            " Tetrahedron conducted a 5S audit, identified contamination sources, and implemented daily audits & weekly reviews.",
            " This improved 5S scores and workplace culture."
        ],
        results: [
            "✔ Workplace divided into 17 zones with assigned leaders",
            "✔5S Champion appointed at the organizational level",
            "✔Core team & zone leaders trained in 5S",
            "✔Initial audit findings shared via reports & graphs",
            "✔Employees engaged in daily 5S practices",
            "✔Joint efforts led to shop floor improvements & higher motivation"
        ],
        image: CS20
    },
    {
        title: "KAIZEN Strategy Implementation",
        company: "Leading two wheeler component Manufacturer (Binola, Haryana)",
        beforeTetrahedron: [
            "No process improvement initiatives",
            "High employee resistance to change",
            " No awareness of KAIZEN strategy"
        ],
        ourApproach: [
            "  Tetrahedron assessed employee mindset and guided management on motivating KAIZEN reporting and implementation."
        ],
        results: [
            "✔ Team trained in KAIZEN identification & implementation",
            "✔ KAIZENs reported based on key themes",
            "✔ KAIZEN Jury Team formed to shortlist impactful ideas"
        ],
        image: CS21
    },
    {
        title: "TPM-JH Pillar Implementation",
        company: "Leading Garments Manufacturer (Sector 36, Gurugram, Haryana)",
        beforeTetrahedron: [
            " No TPM awareness at the organizational level",
            "Poor machine condition & auxiliary parts",
            "Short machine lifespan"
        ],
        ourApproach: [
            "  Tetrahedron developed a TPM Master Plan, trained the team, and standardized abnormality identification.",
            " Maintenance initiatives improved machine life."
        ],
        results: [
            "✔ TPM-JH pillar implemented",
            "✔Organization-wide TPM awareness training",
            "✔Standardized abnormality check sheets",
            "✔Identified & corrected contamination sources",
            "✔HTTA & SOC improvements through brainstorming",
            "✔Abnormality tracking system implemented"
        ],
        image: CS22
    },
    {
        title: "TPM-Skill Building & Training Pillar Implementation",
        company: "Leading Medical Equipment Manufacturer (Taj Expressway Link Rd, Nunhai road, Industrial Estate, Agra Plant)",
        beforeTetrahedron: [
            " Employees not assigned as per skill set",
            " No structured training calendar",
            " Root cause analysis challenges",
            " No preventive maintenance schedule"
        ],
        ourApproach: [
            " Tetrahedron tracked OEE, developed an improvement plan, and guided implementation on the shop floor."
    
        ],
        results: [
            "✔ Staff skill score improved by 65%",
            "✔ Team trained on TPM – Training & Education Pillar"
         
        ],
        image: CS23
    },
 
];

export default function CaseStudies() {
    const [cases, setCases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCases = async () => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:5000/api/cases", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch cases");
                }

                const data = await response.json();
                setCases(data);
            } catch (err) {
                console.error("Error fetching cases:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCases();
    }, []);

    return (
        <Layout headerStyle={6} footerStyle={6}>
            {/* Full-width section for "200+ SUCCESSFUL CASE STUDIES" */}
            <div style={{ backgroundColor: "#1A3B73", color: "#ffffff", textAlign: "center", padding: "60px 20px", width: "100vw", marginLeft: "calc(-50vw + 50%)", borderRadius: "10px" }}>
                <h2 style={{ fontSize: "40px", marginBottom: "20px", fontWeight: "bold", color: "#FFFFFF" }}>
                    200+ SUCCESSFUL CASE STUDIES
                </h2>
                <p style={{ fontSize: "22px", maxWidth: "800px", margin: "0 auto", fontWeight: "bold" }}>
                    Discover how Tetrahedron Manufacturing Services has helped businesses optimize their operations, build trust, and drive sustainable outcomes.
                </p>
            </div>
            
            <div style={{ maxWidth: "1500px", margin: "50px auto", padding: "30px" }}>
                {loading && <p style={{ textAlign: "center", fontSize: "18px" }}>Loading case studies...</p>}
                {error && <p style={{ textAlign: "center", fontSize: "18px", color: "red" }}>Error: {error}</p>}
                {!loading && cases.length === 0 && <p style={{ textAlign: "center", fontSize: "18px" }}>No case studies found</p>}
                
                {!loading && cases.length > 0 && cases.map((caseStudy, index) => (
                    <div key={caseStudy._id || index} style={{ display: "flex", flexDirection: index % 2 === 0 ? "row" : "row-reverse", alignItems: "center", justifyContent: "space-between", marginBottom: "60px", gap: "50px", padding: "30px", borderRadius: "12px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", backgroundColor: "#f9f9f9" }}>
                        {caseStudy.image && (
                            <img 
                                src={caseStudy.image} 
                                alt={caseStudy.title} 
                                style={{ width: "48%", borderRadius: "12px", maxHeight: "450px", objectFit: "cover" }} 
                            />
                        )}
                        <div style={{ width: caseStudy.image ? "50%" : "100%" }}>
                            <h3 
                              style={{ 
                                fontSize: "24px", 
                                fontWeight: "bold", 
                                color: "#1A3B73", 
                                marginBottom: "12px",
                                fontFamily: "var(--font-poppins)"
                              }}
                            >
                              {caseStudy.title}
                            </h3>
                            <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#555", marginBottom: "15px" }}>
                              {caseStudy.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
}
