'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ handleMobileMenu }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
        subMenuKey: "",
    });

    const handleToggle = (key, subMenuKey = "") => {
        if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
            // Close the menu if the same item is clicked again
            setIsActive({
                status: false,
                key: "",
                subMenuKey: "",
            });
        } else {
            // Close other open menus when a new one is clicked
            setIsActive({
                status: true,
                key,
                subMenuKey,
            });
        }
    };
    

    const handleLinkClick = () => {
        handleMobileMenu(); // Close the mobile menu
    };

    return (
        <div className="mobile-nav__wrapper">
            <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu}></div>
            <div className="mobile-nav__content">
                <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu}>
                    <i className="fa fa-times"></i>
                </span>

                {/* <div className="logo-box">
                    <Link href="/" aria-label="logo image">
                        <img src="assets/images/resources/logo.png" width="50" alt="Logo" />
                    </Link>
                </div> */}

                <div className="mobile-nav__container">
                    <ul className="main-menu__list">
                        <li><Link href="/" onClick={handleLinkClick}>Home</Link></li>

                        {/* About Menu */}
                        <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                            <Link href="#" onClick={() => handleToggle(1)}>About Us</Link>
                            <button onClick={() => handleToggle(1)} className={isActive.key == 1 ? "expanded open" : ""}>
                                <span className="fa fa-angle-right" />
                            </button>
                            <ul style={{ display: isActive.key == 1 ? "block" : "none" }}>
                                <li><Link href="/about-us/" onClick={handleLinkClick}>Who We Are</Link></li>
                                <li><Link href="/our-team/" onClick={handleLinkClick}>Our Leaders</Link></li>
                                <li className="dropdown">
                                    <Link href="#" onClick={() => handleToggle(1, "sub1")}>Policies</Link>
                                    <button onClick={() => handleToggle(1, "sub1")} className={isActive.key == 1 && isActive.subMenuKey == "sub1" ? "expanded open" : ""}>
                                        <span className="fa fa-angle-right" />
                                    </button>
                                    <ul style={{ display: isActive.key == 1 && isActive.subMenuKey == "sub1" ? "block" : "none" }}>
                                        <li><Link href="/privacy-policy/" onClick={handleLinkClick}>Privacy Policy</Link></li>
                                        <li><Link href="/terms-of-service/" onClick={handleLinkClick}>Terms of Service</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        {/* Consulting Menu */}
                        <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}>
                            <Link href="#" onClick={() => handleToggle(2)}>Consulting</Link>
                            <button onClick={() => handleToggle(2)} className={isActive.key == 2 ? "expanded open" : ""}>
                                <span className="fa fa-angle-right" />
                            </button>
                            <ul style={{ display: isActive.key == 2 ? "block" : "none" }}>
                                {/* Manufacturing Excellence Services */}
                                <li className="dropdown">
                                    <Link href="#" onClick={() => handleToggle(2, "sub1")}>Manufacturing Excellence Services</Link>
                                    <button
                                        onClick={() => handleToggle(2, "sub1")}
                                        className={isActive.key == 2 && isActive.subMenuKey == "sub1" ? "expanded open" : ""}
                                    >
                                        <span className="fa fa-angle-right" />
                                    </button>
                                    <ul style={{ display: isActive.key == 2 && isActive.subMenuKey == "sub1" ? "block" : "none" }}>
                                        <li><Link href="/manufacturing-operational-excellence-consulting/" onClick={handleLinkClick}>Operational Excellence Consulting</Link></li>
                                        <li><Link href="/tpm-consultants/" onClick={handleLinkClick}>TPM Consulting</Link></li>
                                        <li><Link href="/tqm-consultants/" onClick={handleLinkClick}>TQM Consulting</Link></li>
                                        <li><Link href="/lean-manufacturing-consultants/" onClick={handleLinkClick}>Lean Manufacturing Consulting</Link></li>
                                        <li><Link href="/manufacturing-excellence/" onClick={handleLinkClick}>Manufacturing Cost Reduction</Link></li>
                                        <li><Link href="/visual-management-consultants/" onClick={handleLinkClick}>Visual Management Consulting</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="/plant-layout-design/" onClick={handleLinkClick}>Plant Layout Design</Link></li>
                                <li className="dropdown">
                                    <Link href="#" onClick={() => handleToggle(2, "sub2")}>Dojo Training Center</Link>
                                    <button
                                        onClick={() => handleToggle(2, "sub2")}
                                        className={isActive.key == 2 && isActive.subMenuKey == "sub2" ? "expanded open" : ""}
                                    >
                                        <span className="fa fa-angle-right" />
                                    </button>
                                    <ul style={{ display: isActive.key == 2 && isActive.subMenuKey == "sub2" ? "block" : "none" }}>
                                        <li><Link href="/dojo-training-center/" onClick={handleLinkClick}>DOJO Training Center</Link></li>
                                        <li><Link href="/dojo-2-0/" onClick={handleLinkClick}>DOJO 2.0</Link></li>
                                        <li><Link href="/mini-dojo-training-center/" onClick={handleLinkClick}>AR/VR in Dojo</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="/digitization/" onClick={handleLinkClick}>Digitization</Link></li>
                                <li><Link href="/smart-factory/" onClick={handleLinkClick}>Digitization</Link></li>
                                {/* <li className="dropdown">
                                    <Link href="/iso-certification-consultants" onClick={() => handleToggle(2, "sub3")}>ISO Implementation</Link>
                                    <button
                                        onClick={() => handleToggle(2, "sub3")}
                                        className={isActive.key == 2 && isActive.subMenuKey == "sub3" ? "expanded open" : ""}
                                    >
                                        <span className="fa fa-angle-right" />
                                    </button>
                                    <ul style={{ display: isActive.key == 2 && isActive.subMenuKey == "sub3" ? "block" : "none" }}>
                                        <li><Link href="/iso-9001-qms/" onClick={handleLinkClick}>ISO 9001:2015 (Quality Management System)</Link></li>
                                        <li><Link href="/iso-45001-consultancy/" onClick={handleLinkClick}>ISO for Safety Management | ISO 45001 Consultancy | ISO 45001 Safety Management System</Link></li>
                                        <li><Link href="/?page_id=25434" onClick={handleLinkClick}>ISO 31000:2018 Enterprise Risk Management System Implementation ERM</Link></li>
                                        <li><Link href="/?page_id=23985" onClick={handleLinkClick}>ISO 14001:2015 (Environmental Management System)</Link></li>
                                        <li><Link href="/iso-50001-enms/" onClick={handleLinkClick}>ISO 50001 EnMS (Energy Management System)</Link></li>
                                    </ul>
                                </li> */}
                                {/* <li><Link href="/energy-audit-and-efficiency-services/" onClick={handleLinkClick}>Energy Cost Reduction Services</Link></li> */}
                            </ul>
                        </li>

                        {/* Skill Training Menu */}
                        <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}>
                            <Link href="#" onClick={() => handleToggle(3)}>Skill Training</Link>
                            <button onClick={() => handleToggle(3)} className={isActive.key == 3 ? "expanded open" : ""}>
                                <span className="fa fa-angle-right" />
                            </button>
                            <ul style={{ display: isActive.key == 3 ? "block" : "none" }}>
                                <li><Link href="/corporate-training-companies/" onClick={handleLinkClick}>Corporate Training Course In India</Link></li>
                                <li className="dropdown">
                                    <Link href="/corporate-training-companies/technical-trainings/" onClick={() => handleToggle(3, "sub1")}>Technical Training Courses</Link>
                                    <button
                                        onClick={() => handleToggle(3, "sub1")}
                                        className={isActive.key == 3 && isActive.subMenuKey == "sub1" ? "expanded open" : ""}
                                    >
                                        <span className="fa fa-angle-right" />
                                    </button>
                                    <ul style={{ display: isActive.key == 3 && isActive.subMenuKey == "sub1" ? "block" : "none" }}>
                                        <li><Link href="/corporate-training-companies/technical-trainings/advanced-product-quality-planning/" onClick={handleLinkClick}>Advanced Product Quality Planning Program-APQP</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/design-fmea/" onClick={handleLinkClick}>Design Failure Mode Effect Analysis – DFMEA</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/process-failure-mode-effect-analysis-pfmea/" onClick={handleLinkClick}>Process Failure Mode Effect Analysis – PFMEA</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/statistical-process-control/" onClick={handleLinkClick}>Statistical Process Control Training – SPC</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/measurement-system-analysis-msa/" onClick={handleLinkClick}>Measurement System Analysis (MSA)</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/geometric-dimensioning-and-tolerancing/" onClick={handleLinkClick}>GD&T Training | Geometric Dimensioning and Tolerancing</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/advanced-gd-and-t-training/" onClick={handleLinkClick}>Advanced GD&T Training Course | GD&T</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/inventory-management/" onClick={handleLinkClick}>Inventory Management Courses</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/production-part-approval-process/" onClick={handleLinkClick}>Production Part Approval Process – PPAP</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/industry-4-0-courses/" onClick={handleLinkClick}>Industry 4.0 Courses | Training</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/industry-5-0/" onClick={handleLinkClick}>Industry 5.0</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/virtual-reality/" onClick={handleLinkClick}>Virtual Reality – VR</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/design-of-experiment/" onClick={handleLinkClick}>Design Of Experiment – DOE</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/electric-vehicle/" onClick={handleLinkClick}>Electric Vehicle – EV</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/design-for-quality-training/" onClick={handleLinkClick}>Design For Quality | DFQ Training Courses</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/oee-calculation-and-improvement-action/" onClick={handleLinkClick}>Overall Equipment Effectiveness Training | OEE</Link></li>
                                        <li><Link href="/corporate-training-companies/technical-trainings/total-productive-maintenance-course-tpm/" onClick={handleLinkClick}>TPM In Manufacturing Training Courses</Link></li>
                                        <li><Link href="/ul-60335-2-40-csa-training-harmonised-iec-standard/" onClick={handleLinkClick}>UL 60335-2-40/CSA Training Harmonized IEC Standard'</Link></li>
                                        <li><Link href="/ul-508a-training/" onClick={handleLinkClick}>Industrial Control Panel Standard UL 508A Training</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link href="/corporate-training-companies/process-improvement-training-courses/" onClick={() => handleToggle(3, "sub2")}>Process Improvement Training Courses</Link>
                                    <button
                                        onClick={() => handleToggle(3, "sub2")}
                                        className={isActive.key == 3 && isActive.subMenuKey == "sub2" ? "expanded open" : ""}
                                    >
                                        <span className="fa fa-angle-right" />
                                    </button>
                                    <ul style={{ display: isActive.key == 3 && isActive.subMenuKey == "sub2" ? "block" : "none" }}>
                                        <li><Link href="/corporate-training-companies/process-improvement-training-courses/cost-reduction-strategies/" onClick={handleLinkClick}>Cost Reduction Strategies | Training Courses</Link></li>
                                        <li><Link href="/corporate-training-companies/process-improvement-training-courses/7-new-qctools/" onClick={handleLinkClick}>Problem Solving with new 7 QC Tools Training in India</Link></li>
                                        <li><Link href="/corporate-training-companies/process-improvement-training-courses/line-balancing/" onClick={handleLinkClick}>Line Balancing in Manufacturing | Training</Link></li>
                                        <li><Link href="/corporate-training-companies/process-improvement-training-courses/root-cause-analysis/" onClick={handleLinkClick}>Root Cause Analysis Training | RCA Training</Link></li>
                                        <li><Link href="/corporate-training-companies/process-improvement-training-courses/simple-low-cost-automation/" onClick={handleLinkClick}>Simple & Low-Cost Automation | Industrial Automation Course</Link></li>
                                        <li><Link href="/corporate-training-companies/process-improvement-training-courses/5s-training-program/" onClick={handleLinkClick}>5s Safety Training in Workplace | Lean Training</Link></li>
                                        <li><Link href="/corporate-training-companies/process-improvement-training-courses/value-engineering-value-analysis/" onClick={handleLinkClick}>Value Engineering & Value Analysis Training</Link></li>
                                        <li><Link href="/corporate-training-companies/process-improvement-training-courses/performance-management-and-improvement-plan/" onClick={handleLinkClick}>Performance Management and Improvement Plan</Link></li>
                                        <li><Link href="/corporate-training-companies/process-improvement-training-courses/total-quality-management-tqm/" onClick={handleLinkClick}>Total Quality Management (TQM) Training Course in India</Link></li>
                                        <li><Link href="/?page_id=12632" onClick={handleLinkClick}>Quality Control System</Link></li>
                                        <li><Link href="/corporate-training-companies/process-improvement-training-courses/cost-reduction-by-lean-manufacturing/" onClick={handleLinkClick}>Cost Reduction by Lean Manufacturing</Link></li>
                                        <li><Link href="/corporate-training-companies/process-improvement-training-courses/why-why-analysis-fish-born-5-why-training/" onClick={handleLinkClick}>Why Why Analysis | Fish-born | 5 why training</Link></li>
                                        <li><Link href="/corporate-training-companies/process-improvement-training-courses/kaizen-training-program/" onClick={handleLinkClick}>Kaizen Training Program| Kaizen Certification</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link href="#" onClick={() => handleToggle(3, "sub3")}>Strategic Management and Training Consultants</Link>
                                    <button
                                        onClick={() => handleToggle(3, "sub3")}
                                        className={isActive.key == 3 && isActive.subMenuKey == "sub3" ? "expanded open" : ""}
                                    >
                                        <span className="fa fa-angle-right" />
                                    </button>
                                    <ul style={{ display: isActive.key == 3 && isActive.subMenuKey == "sub3" ? "block" : "none" }}>
                                        <li><Link href="/corporate-training-companies/strategic-training/esg-certification-training/" onClick={handleLinkClick}>Environmental, Social and Governance (ESG) Training</Link></li>
                                        <li><Link href="/corporate-training-companies/strategic-training/daily-work-management/" onClick={handleLinkClick}>Daily Work Management</Link></li>
                                        <li><Link href="/corporate-training-companies/strategic-training/design-thinking/" onClick={handleLinkClick}>Design Thinking Course | Online Trainings</Link></li>
                                        <li><Link href="/corporate-training-companies/strategic-training/finance-for-non-finance-manager/" onClick={handleLinkClick}>Finanace For Non Finance Managers Training</Link></li>
                                        <li><Link href="/corporate-training-companies/strategic-training/theory-of-inventive-problem-solving/" onClick={handleLinkClick}>Theory Of Inventive Problem Solving (Triz)</Link></li>
                                        <li><Link href="/corporate-training-companies/strategic-training/balance-score-card/" onClick={handleLinkClick}>Balance Score Card</Link></li>
                                        <li><Link href="/corporate-training-companies/strategic-training/competency-mapping/" onClick={handleLinkClick}>Competency Mapping</Link></li>
                                        <li><Link href="/corporate-training-companies/strategic-training/productivity-focus-skill-mapping/" onClick={handleLinkClick}>Productivity Focus Skill Mapping</Link></li>
                                        <li><Link href="/corporate-training-companies/strategic-training/world-class-manufacturing/" onClick={handleLinkClick}>World Class Manufacturing</Link></li>
                                        <li><Link href="/dwm-and-time-management-techniques/" onClick={handleLinkClick}>DWM and Time Management Techniques</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link href="/corporate-training-companies/behavioural-training/" onClick={() => handleToggle(3, "sub4")}>Behavioural Training</Link>
                                    <button
                                        onClick={() => handleToggle(3, "sub4")}
                                        className={isActive.key == 3 && isActive.subMenuKey == "sub4" ? "expanded open" : ""}
                                    >
                                        <span className="fa fa-angle-right" />
                                    </button>
                                    <ul style={{ display: isActive.key == 3 && isActive.subMenuKey == "sub4" ? "block" : "none" }}>
                                        <li><Link href="/?page_id=12379" onClick={handleLinkClick}>Presentation Skills Training Courses</Link></li>
                                        <li><Link href="/corporate-training-companies/behavioural-training/art-of-delegation-training/" onClick={handleLinkClick}>The Art of Delegation Training</Link></li>
                                        <li><Link href="/corporate-training-companies/behavioural-training/planning-and-prioritization-skill/" onClick={handleLinkClick}>Planning & Prioritization Skills Training</Link></li>
                                        <li><Link href="/corporate-training-companies/behavioural-training/team-time-and-task-management/" onClick={handleLinkClick}>Team, Time and Task Management Training & Seminars</Link></li>
                                        <li><Link href="/?page_id=13155" onClick={handleLinkClick}>Non Verbal Communication Online Training</Link></li>
                                        <li><Link href="/corporate-training-companies/behavioural-training/team-development-motivation/" onClick={handleLinkClick}>Team Development & Motivation Training Programmes</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        {/* AMR/AGV Menu */}
                        <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}>
                            <Link href="/automated-guided-vehicle-manufacturers" onClick={() => handleToggle(4)}>AMR/AGV/RGV</Link>
                            {/* <button onClick={() => handleToggle(4)} className={isActive.key == 4 ? "expanded open" : ""}>
                                <span className="fa fa-angle-right" />
                            </button> */}
                            {/* <ul style={{ display: isActive.key == 4 ? "block" : "none" }}>
                                <li><Link href="/automated-guided-vehicle-manufacturers" onClick={handleLinkClick}>Autonomous Mobile Robot | AGV | AMR</Link></li>
                            </ul> */}
                        </li>

                        <li><Link href="/career" onClick={handleLinkClick}>Career</Link></li>
                        <li><Link href="/case-studies" onClick={handleLinkClick}>Case Studies</Link></li>
                        <li><Link href="/blog" onClick={handleLinkClick}>Blogs</Link></li>
                        <li><Link href="/contact-us" onClick={handleLinkClick}>Contact Us</Link></li>
                    </ul>
                </div>

                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <Link href="mailto:marketing@tetrahedron.in" onClick={handleLinkClick}>marketing@tetrahedron.in</Link>
                    </li>
                    <li>
                        <i className="fa fa-phone-alt"></i>
                        <Link href="tel:+91-8984189814" onClick={handleLinkClick}>+91-8984189814</Link>
                    </li>
                </ul>

                <div className="mobile-nav__top">
                    <div className="mobile-nav__social">
                        <Link href="#" className="fab fa-twitter"></Link>
                        <Link href="#" className="fab fa-facebook-square"></Link>
                        <Link href="#" className="fab fa-pinterest-p"></Link>
                        <Link href="#" className="fab fa-instagram"></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;