'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import ContactForm from "@/components/ContactForm"

const clientsData = [
  {
    title: "Optimize Factory Layout for Efficient Space Use",
    company: "Merino Laminates",
    website: "https://www.merinolaminates.com",
    description: `Merino Laminates stands as a premier supplier, manufacturing top-quality laminates including HPL, Compacts, Panels, wall cladding, and various Surface Solutions Products. Tetrahedron successfully executed Plant Layout & Space Optimization at Merino, reducing material travel distance from 4,775 m to 3,203 m, achieving a 33% decrease. The optimization of Merino Unit-I’s furniture section through TMS resulted in saving 7,950 sqft, a notable 24.3% space optimization in the new 41,000 sqft facility.`
  },
  {
    title: "Manufacturing Excellence for Enhanced Productivity",
    company: "Romsons",
    website: "https://www.romsons.com",
    description: `Romsons, a leader in manufacturing disposable medical devices, partnered with Tetrahedron for a manufacturing consulting project. Our major focus was increasing productivity, improving the workplace, & enhancing quality through Manufacturing Excellence. Notable achievements include reclaiming 1155 sq. ft. through diligent 5S efforts, 22% increase in productivity, 59% reduction in waste using 7QC Tools, annual cost savings exceeding 6.6 lakhs through Kaizen practices.`
  },
  {
    title: "Manufacturing Excellence Implementation",
    company: "Apollo Pipes Ltd",
    website: "https://www.apollopipes.com",
    description: `Apollo Pipes Ltd’s Dadri Unit, a cutting-edge manufacturing facility, produces top-quality pipes with advanced technology & commitment to excellence. Tetrahedron successfully implemented Lean Manufacturing – TPM, achieving substantial operational enhancements. Through diligent 5S efforts, we reclaimed 1155 sq. ft. Our lean practices resulted in notable 22% productivity increase, 59% waste reduction using 7QC Tools, & annual cost savings exceeding 6.6 lakhs.`
  },
  {
    title: "Manufacturing Excellence: Safety Kaizen",
    company: "Edgetech",
    website: "https://www.edgetech.co.in",
    description: `Tetrahedron has done Manufacturing Excellence at Edgetech, a leading FCU and AHU manufacturer in India. Layout optimization yielded 6,000 sq. ft. of space, enabling seamless integration of new laser cutting and bending machine. The 1S Drive initiative created 3,629 sq. ft. of organized space. Red Tagging activities boosted finances, 20% reduction in material handling distance saved time and energy, Safety KAIZENs were implemented, 30 Lean ideas being planned for shop floor productivity improvement.`
  },
  {
    title: "Optimizing Plant Layout for Aluminum Manufacturing Company",
    company: "Hindalco",
    website: "https://www.hindalco.com",
    description: `Hindalco stands as India’s largest aluminum manufacturing company, a global leader in flat-rolled products, & prominent aluminum recycler. Tetrahedron has undertaken logistic & plant layout project for an existing factory within Hindalco’s extensive operations. Strategically placing machines, processes, and plant services for enhanced productivity. This initiative streamlines production & aligns layout seamlessly with our goal of maximizing productivity.`
  },
  {
    title: "Material Flow Design (Plant Layout)- Brown & Green Field Project",
    company: "APAR",
    website: "https://apar.com",
    description: `APAR, a key player in aluminum and third-largest in transformer oil, partnered with Tetrahedron for Plant Layout project, encompassing both “green field & brown field” scenarios. Diligently analyzing layouts, Tetrahedron optimized spatial constraints, reduced handling costs, bolstered throughput efficiency. Our Material Flow Design expertise at APAR aligns with goals, emphasizing expense reduction & productivity enhancement.`
  },
  {
    title: "Material Handling Optimization & Automation",
    company: "Matrix Clothing",
    website: "https://www.matrixclothing.in",
    description: `Matrix Clothing is a distinguished fashion brand known for its trendsetting designs and high-quality apparel. Tetrahedron successfully implemented a Material Handling Optimization & Automation program at Matrix Clothing Pvt. Ltd. Our accomplishments include identifying over 100+ low-cost automation opportunities and securing approvals for 80+ solutions after thorough technical and commercial feasibility tests.`
  },
  {
    title: "Energy Cost Reduction and Bill Optimization",
    company: "IPCL",
    website: "https://ipcl.in",
    description: `Investment and Precision Casting Limited (IPCL) is a distinguished company celebrated for precision casting and unwavering commitment to quality production. Tetrahedron successfully executed an energy cost reduction project at IPCL, achieving an impressive 40% reduction in monthly energy bills. The initiative resulted in substantial monthly cost savings of approximately 40,000 INR, down from the initial 80,000 INR.`
  },
  {
    title: "Smart Lock For Theft Prevention",
    company: "Fenesta",
    website: "https://www.fenesta.com",
    description: `Fenesta is the largest uPVC and Aluminium Windows & Doors Manufacturer & Supplier in India. Tetrahedron has helped Fenesta to develop a Smart Lock based on the IoT segment for theft prevention. Our developed Smart Lock device sends instant notifications to owners upon detecting door lock and unlock events, enhancing real-time security awareness.`
  },
  {
    title: "Dojo Room Development",
    company: "Shakti Hormann",
    website: "https://shaktihormann.com",
    description: `Shakti Hormann, formerly known as Shakti Met-Dor, has been pioneers in India for Hollow Metal Doors and is well known for its range of Fire Rated Doors. Tetrahedron has completed the Dojo Room Development project for Shakti Hormann. This Dojo Room includes levels such as Know My Company Dojo, Safety Dojo, 5 Senses Dojo, Product Dojo, Production Dojo, Quality Dojo, Maintenance Dojo, Process Dojo, Ergonomics Dojo, & Innovation Dojo.`
  },
  {
    title: "Safety Management For Steel Manufacturer Company",
    company: "Jai Balaji Group",
    website: "https://jaibalajigroup.com",
    description: `Jai Balaji Group is an Indian conglomerate primarily engaged in steel production, with interests in power, mining, & infrastructure sectors. Jai Balaji Industries trusts our Safety Management Consulting services for comprehensive safety solutions. Tetrahedron consultants and Jai Balaji: Strengthening safety with robust protocols and a well-being culture.`
  },
  {
    title: "Energy Cost Reduction For Steel Industry",
    company: "Salasar Alloy and Steel Industries",
    website: "https://www.salasarsteels.com",
    description: `Salasar Alloy and Steel Industries is a distinguished company in Nagpur, excelling in production of high-quality alloys & steel products for diverse industrial applications. Tetrahedron successfully executed an Energy Cost Reduction initiative, achieving an annual savings opportunity of 176 Lakhs. The substantial Total Operational Cost (TOD) shift amounted to 7,724,700 INR.`
  },
  {
    title: "Workplace Safety: Strategic Risk Mitigation",
    company: "Hero Motors",
    website: "https://www.heromotors.com",
    description: `Hero Motors is a renowned automotive company, recognized for its innovation and excellence in producing motorcycles and other two-wheeled vehicles. Tetrahedron successfully completed a safety project at Hero Motors, achieving remarkable results. These include an 83% reduction in industry injuries, 97% timely investigations, correction of 5000+ hazards, implementation of 9000+ safety Kaizen initiatives, and recording over 100 near-miss cases, enhancing overall workplace safety.`
  },
  {
    title: "Manufacturing Excellence Implementation",
    company: "Hero Motors",
    website: "https://www.heromotors.com",
    description: `Hero Motors, a renowned Indian motorcycle manufacturer, is recognized for its innovation and steadfast commitment to fuel-efficient, reliable vehicles. Tetrahedron executed a Manufacturing Excellence project, focusing on Workplace Improvement (1S, 2S, 3S activities) & Productivity Enhancement (Time & Motion Study, Line Balancing, Workplace Ergonomics).`
  },
  {
    title: "Zero Incidents, Zero Accidents: Safety Standards in Manufacturing",
    company: "Electrotherm (India) Limited",
    website: "https://www.electrotherm.com",
    description: `Electrotherm (India) Limited has been dedicated to developing the core sectors of the Indian economy through Greenfield and Brownfield investments. Tetrahedron achieves a ‘Zero Incident & Zero Accident‘ milestone at Electrotherm (India) Limited. Proven safety management systems result in a 20-40% reduction in injury and illness costs, as endorsed by OSHA.`
  },
  {
    title: "Manufacturing Excellence Through Time and Motion Study",
    company: "Bhurji Supertek",
    website: "https://www.bhurjisupertek.com",
    description: `Bhurji Supertek is a leading Gurgaon-based manufacturer offering services in Plastic Product Designing, Plastic Moulding Parts, Electric Irons, Water Heaters, and Hand Blenders, etc. Tetrahedron has successfully executed Time and Motion study project, enhancing Manufacturing Excellence at Bhurji. This initiative resulted in a remarkable 40% increase in production efficiency.`
  },
  {
    title: "Training Workshop – Daily Work Management",
    company: "Relaxo",
    website: "https://www.relaxofootwear.com",
    description: `Relaxo: Trendsetting footwear brand offering stylish, comfortable, and affordable options for men, women, and kids in India. Tetrahedron has provided comprehensive training to the Relaxo team on Daily Work Management (DWM), emphasizing a profound understanding of key principles and concepts essential for effective work management.`
  },
  {
    title: "Maximize Manufacturing Excellence for Efficiency, Quality, and Savings",
    company: "UNISOL",
    website: "https://unisolindia.com",
    description: `UNISOL brand has become a trusted name for world class quality footwear soles, not only in India but globally. Tetrahedron spearheaded a transformative project at Unisol, focusing on implementing 5S, Kaizen Strategy, OEE Improvement, and TPM-JH Pillar. These methodologies collectively maximized efficiency, enhanced quality, achieved significant cost savings.`
  },
  {
    title: "2 Days (4 Hr Each Training on ESG)",
    company: "Wipro",
    website: "https://www.wipro.com",
    description: `Wipro is an Indian multinational IT services company, providing technology solutions, consulting, and outsourcing services globally. Wipro Limited engaged in Tetrahedron’s intensive two-day Environmental, Social, and Governance (ESG) training, with four-hour sessions each day. Our program provides Wipro’s team with in-depth insights into ESG principles, promoting responsible business practices.`
  },
  {
    title: "Training on Industry 4.0",
    company: "HCL Technologies",
    website: "https://www.hcltech.com",
    description: `HCL Technologies is an Indian multinational IT services and consulting company, offering a range of technology solutions and services globally. Tetrahedron provided advanced Industry 4.0 training to HCL Technologies, empowering their workforce with the latest advancements in smart manufacturing and technology integration.`
  },
  {
    title: "Workshop: Data Warehousing & Project Selection",
    company: "Titan Company Limited",
    website: "https://www.titancompany.in",
    description: `Titan Company Limited is an Indian conglomerate renowned for its diverse consumer goods, including watches, jewelry, eyewear, and accessories. Titan Company Ltd engaged in our comprehensive Training Workshop in Delhi for Data Warehousing & Management (DWM) & Preliminary Project Selection Visit.`
  },
  {
    title: "Six Sigma Training for Green Belt and Yellow Belt",
    company: "MMTC – PAMP India Private Limited",
    website: "https://www.mmtcpamp.com",
    description: `MMTC – PAMP India Private Limited manufactures and refines precious metals. Tetrahedron has provided MMTC with two comprehensive training programs, namely Training Six Sigma Green Belt and Training Six Sigma Yellow Belt. Initiatives for operational efficiency, continuous improvement, and empowering employees for role excellence.`
  },
  {
    title: "Onsite Training 6 Sigma",
    company: "Subros",
    website: "https://www.subros.com",
    description: `Subros, a leading automotive air conditioning systems provider, prioritizes comfort & innovation globally. Subros Limited has significantly benefited from Tetrahedron’s on-site Six Sigma training program. Tailored to elevate operational efficiency & quality standards, our training equips Subros team with comprehensive Six Sigma tools & methodologies.`
  },
  {
    title: "Training : Daily Work Management",
    company: "Mitsubishi Heavy Industries",
    website: "https://www.mhi.com",
    description: `Mitsubishi Heavy Industries: Japanese automaker known globally for performance, innovation, and sustainability. Mitsubishi has participated in Tetrahedron’s training program on Daily Work Management. This comprehensive training equips their team with effective strategies for daily workflow optimization, productivity enhancement.`
  }
];

export default function OurClients() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <>
      <style jsx global>{`
        .section-padding {
          padding: 80px 0;
        }
        .section-bg-light {
          background-color: #f7faff;
        }
        .client-card {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          margin-bottom: 32px;
          padding: 32px 28px 24px 28px;
          transition: box-shadow 0.2s;
        }
        .client-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.13);
        }
        .client-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 8px;
          color: #eb7434;
        }
        .client-company {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 6px;
        }
        .client-link {
          color: #1a73e8;
          font-size: 0.98rem;
          margin-bottom: 10px;
          display: inline-block;
        }
        .client-description {
          font-size: 1rem;
          color: #333;
          margin-bottom: 0;
        }
        .clients-intro {
          font-size: 1.2rem;
          color: #333;
          margin-bottom: 18px;
        }
        .clients-header {
          font-size: 2.1rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: #222;
        }
        @media (max-width: 991px) {
          .section-padding {
            padding: 60px 0;
          }
          .clients-header {
            font-size: 1.5rem;
          }
        }
        @media (max-width: 767px) {
          .section-padding {
            padding: 40px 0;
          }
          .client-card {
            padding: 20px 12px 16px 12px;
          }
        }
      `}</style>
      <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Our Clients">
        <section className="section-padding section-bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-10">
                <div className="text-center">
                  <h1 className="clients-header">
                    Discover our contributions to our customers' business growth.
                  </h1>
                  <p className="clients-intro">
                    We’ve had the privilege of partnering with a diverse array of inspiring businesses driven by meaningful missions. Below, you’ll find a curated list of our top brand collaborations that we’re truly proud to showcase.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {clientsData.map((client, idx) => (
                <div className="col-lg-6" key={client.company + idx}>
                  <div className="client-card">
                    <div className="client-title">{client.title}</div>
                    <div className="client-company">
                      {client.company}
                      {client.website && (
                        <span>
                          {" "}
                          <a
                            href={client.website}
                            className="client-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {client.website.replace(/^https?:\/\//, "")}
                          </a>
                        </span>
                      )}
                    </div>
                    <div className="client-description">
                      {client.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/*Contact Two Start */}
        <section className="contact-two contact-four section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-two__left">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box"><span className="section-title__tagline" style={{fontSize:"80%"}}>Talk to Us</span></div>
                    <h2 className="section-title__title"
                      style={{ zoom: "90%" }}
                    >
                      Let's Discuss Your Project
                    </h2>
                  </div>
                  <p className="contact-two__text">We handle every detail with precision. Contact us today to discuss your project and see how we can bring your vision to life.</p>
                  <div className="contact-two__call-box" style={{zoom:"95%"}}>
                    <div className="icon"><span className="icon-call"></span></div>
                    <div className="content">
                      <span>Need help?</span><p style={{fontSize:"80%"}}><Link href="tel:8984189814">+91-8984189814</Link></p>
                    </div>
                    <div className="icon" style={{marginLeft:"10px"}}><span className="icon-email"></span></div>
                    <div className="content">
                      <span>Email us</span><p style={{fontSize:"80%"}}><Link href="mailto:marketing@tetrahedron.in">marketing@tetrahedron.in</Link></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-two__right">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Contact Two End */}
      </Layout>
    </>
  );
}