'use client'
import Link from "next/link";
import { useState } from "react";

export default function Services2() {
    // State to toggle read more/less for each service
    const [expanded, setExpanded] = useState([false, false, false]);

    // Function to toggle Read More / Less
    const toggleReadMore = (index) => {
        setExpanded(prevState => prevState.map((item, i) => (i === index ? !item : item)));
    };

    // Services data
    const services = [
        {
            title: "MANAGEMENT CONSULTING",
            img: "assets/images/services/business1.jpg",
            link: "service-details",
            text: "We are professional Manufacturing Consulting Firms in India, helping manufacturing organizations by improving...",
            fullText: "We are professional Manufacturing Consulting Firms in India, helping manufacturing organizations by improving up-to 10%-20% profitability, advising on how to improve their performance and solve complex problems as well as identifying opportunities of growth, increase energy efficiency, manufacturing and energy cost reduction, and improve the overall organizational operations. Under the Manufacturing Consulting we are offering Plant Layout Design, Safety Management System, Dojo Training Center."
        },
        {
            title: "SKILL TRAINING",
            img: "assets/images/services/business2.jpg",
            link: "service-details",
            text: "Manufacturing is a complex industry that requires a variety of skills and expertise. We have done 400+ Training & Skill Development Modules (On-Line)...",
            fullText: "Manufacturing is a complex industry that requires a variety of skills and expertise. We have done 400+ Training & Skill Development Modules (On-Line, On-Site, Hand-Hold, Mentoring) that focus on enabling clients’ employees to acquire relevant knowledge + practical + implementable skill for Senior, Middle, Line Managers as well as Supervisor, Workers and Operators to excel in their roles. Some of our focus key areas for manufacturing training and skill development are Process, Strategic, Behavioral, & Technical Training, DOJO Centers."
        },
        {
            title: "AUTOMATION: INDUSTRY 4.0",
            img: "assets/images/services/business3.jpg",
            link: "service-details",
            text: "Industry 4.0 involves the integration of advanced technologies such as automation, artificial intelligence, and IoT into...",
            fullText: "Industry 4.0 involves the integration of advanced technologies such as automation, artificial intelligence, and the Internet of Things (IoT) into manufacturing processes to revolutionize the manufacturing industry by reducing waste, increasing flexibility. Under the automation in Industry 4.0, we serve AR VR services. In-house developed AMR (Autonomous Mobile Robot) for material handling. Development & Design of Electric Vehicle, Qualification Packs & NOSs for EV Modules. Also we are leading in AGV manufacturers in India as well."
        }
    ];

    return (
        <section className="services-four">
            <div className="container">
                <div className="section-title text-center">
                    <h2 className="section-title__title">Tetrahedron Business Vertical</h2>
                </div>
                <div className="row">
                    {services.map((service, index) => (
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay={`${index * 200}ms`} key={index}>
                            <div className="services-four__single">
                                <div className="services-four__img">
                                    <img src={service.img} alt={service.title} />
                                </div>
                                <div className="services-four__content">
                                    <h5 className="services-four__title"
                                    ref={node=>{if(node) node.style.setProperty("line-height", "0.5", "important")}}>
                                        <Link href={service.link} style={{ lineHeight: "0.5" }}>{service.title}</Link>
                                    </h5>
                                    <p className="services-four__text">
                                        {expanded[index] ? service.fullText : `${service.text}`}
                                    </p>
                                    <button 
                                        className="services-four__btn"
                                        onClick={() => toggleReadMore(index)}
                                        style={{ background: "none", border: "none", color: "#007bff", cursor: "pointer" }}
                                    >
                                        {expanded[index] ? "Read Less" : "Read More"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
