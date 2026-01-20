import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul className="main-menu__list" role="menubar">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li className="dropdown">
          <Link href="/#" aria-haspopup="true">
            About Us
          </Link>
          <ul role="menu" style={{ left: "-70%", top: "100%", width: "70px" }}>
            <li>
              <Link href="/about-us/">Who We Are</Link>
            </li>
            <li>
              <Link href="/our-team/">Our Leaders</Link>
            </li>
            <li className="dropdown">
              <Link href="/#" aria-haspopup="true">
                Policies
              </Link>
              <ul role="menu">
                <li>
                  <Link href="/privacy-policy/">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-of-service/">Terms of Service</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <Link href="/#" aria-haspopup="true">
            Consulting
          </Link>
          <ul role="menu" style={{ left: "-50%", top: "100%", width: "70px" }}>
            <li className="dropdown">
              <Link href="/#" aria-haspopup="true">
                Manufacturing Excellence Services
              </Link>
              <ul
                role="menu"
                style={{
                  overflowY: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  color: "var(--elitecons-black)",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/manufacturing-operational-excellence-consulting/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Operational Excellence Consulting
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/tpm-consultants/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    TPM Consulting
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/tqm-consultants/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    TQM Consulting
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/lean-manufacturing-consultants/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Lean Manufacturing Consulting
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/manufacturing-excellence/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Manufacturing Cost Reduction
                  </Link>
                </li>
                <li className="hover-style">
                  <Link
                    href="/visual-management-consultants/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Visual Management Consulting
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/plant-layout-design/">Plant Layout Design</Link>
            </li>
            <li className="dropdown">
              <Link href="/#" aria-haspopup="true">
                Dojo Training Center
              </Link>
              <ul
                role="menu"
                style={{
                  overflowY: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  color: "var(--elitecons-black)",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/dojo-training-center/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    DOJO Training Center
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/dojo-2-0/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    DOJO 2.0
                  </Link>
                </li>
                <li className="hover-style">
                  <Link
                    href="/mini-dojo-training-center/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    AR/VR in Dojo
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/digitization/">Digitization</Link>
            </li>
            <li>
              <Link href="/smart-factory/">Smart Factory</Link>
            </li>
            {/* <li className="dropdown">
              <Link href="/iso-certification-consultants" aria-haspopup="true">
                ISO Implementation
              </Link>
              <ul
                role="menu"
                style={{
                  height: "400px",
                  overflowY: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  color: "var(--elitecons-black)",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/iso-9001-qms/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    ISO 9001:2015 (Quality Management System)
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/iso-45001-consultancy/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    ISO for Safety Management | ISO 45001 Consultancy | ISO
                    45001 Safety Management System
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/?page_id=25434"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    ISO 31000:2018 Enterprise Risk Management System
                    Implementation ERM
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/?page_id=23985"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    ISO 14001:2015 (Environmental Management System)
                  </Link>
                </li>
                <li className="hover-style">
                  <Link
                    href="/iso-50001-enms/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    ISO 50001 EnMS (Energy Management System)
                  </Link>
                </li>
              </ul>
            </li> */}
            {/* <li>
              <Link href="/energy-audit-and-efficiency-services/">Energy Cost Reduction Services</Link>
                </li> */}
          </ul>
        </li>

        <li className="dropdown">
          <Link href="/#" aria-haspopup="true">
            Skill Training
          </Link>
          <ul role="menu">
            <li>
              <Link href="/corporate-training-companies/">
                Corporate Training Course In India
              </Link>
            </li>
            <li className="dropdown">
              <Link
                href="/corporate-training-companies/technical-trainings/"
                aria-haspopup="true"
              >
                Technical Training Courses
              </Link>
              <ul
                role="menu"
                style={{
                  height: "400px",
                  overflowY: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  color: "var(--elitecons-black)",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/technical-trainings/advanced-product-quality-planning/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Advanced Product Quality Planning Program-APQP
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/technical-trainings/design-fmea/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Design Failure Mode Effect Analysis – DFMEA
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/technical-trainings/process-failure-mode-effect-analysis-pfmea/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Process Failure Mode Effect Analysis – PFMEA
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/technical-trainings/statistical-process-control/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Statistical Process Control Training – SPC
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/technical-trainings/measurement-system-analysis-msa/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Measurement System Analysis (MSA)
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/technical-trainings/geometric-dimensioning-and-tolerancing/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    GD&amp;T Training | Geometric Dimensioning and Tolerancing
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/technical-trainings/advanced-gd-and-t-training/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Advanced GD&amp;T Training Course | GD&amp;T
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/technical-trainings/inventory-management/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Inventory Management Courses
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/technical-trainings/production-part-approval-process/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Production Part Approval Process – PPAP
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/technical-trainings/industry-4-0-courses/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Industry 4.0 Courses | Training
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/technical-trainings/industry-5-0/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Industry 5.0
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/technical-trainings/virtual-reality/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Virtual Reality – VR
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/technical-trainings/design-of-experiment/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Design Of Experiment – DOE
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/technical-trainings/electric-vehicle/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Electric Vehicle – EV
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/technical-trainings/design-for-quality-training/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Design For Quality | DFQ Training Courses
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/technical-trainings/oee-calculation-and-improvement-action/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Overall Equipment Effectiveness Training | OEE
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/technical-trainings/total-productive-maintenance-course-tpm/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    TPM In Manufacturing Training Courses
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/ul-60335-2-40-csa-training-harmonised-iec-standard/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    UL 60335-2-40/CSA Training Harmonized IEC Standard'
                  </Link>
                </li>
                <li className="hover-style">
                  <Link
                    href="/ul-508a-training/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Industrial Control Panel Standard UL 508A Training
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link
                href="/corporate-training-companies/process-improvement-training-courses/"
                aria-haspopup="true"
              >
                Process Improvement Training Courses
              </Link>
              <ul
                role="menu"
                style={{
                  height: "400px",
                  overflowY: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  color: "var(--elitecons-black)",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/process-improvement-training-courses/cost-reduction-strategies/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Cost Reduction Strategies | Training Courses
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/process-improvement-training-courses/7-new-qctools/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Problem Solving with new 7 QC Tools Training in India
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/process-improvement-training-courses/line-balancing/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Line Balancing in Manufacturing | Training
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/process-improvement-training-courses/root-cause-analysis/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Root Cause Analysis Training | RCA Training
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/process-improvement-training-courses/simple-low-cost-automation/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Simple &amp; Low-Cost Automation | Industrial Automation
                    Course
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/process-improvement-training-courses/5s-training-program/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    5s Safety Training in Workplace | Lean Training
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/process-improvement-training-courses/value-engineering-value-analysis/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Value Engineering &amp; Value Analysis Training
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/process-improvement-training-courses/performance-management-and-improvement-plan/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Performance Management and Improvement Plan
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/process-improvement-training-courses/total-quality-management-tqm/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Total Quality Management (TQM) Training Course in India
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/?page_id=12632"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Quality Control System
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/process-improvement-training-courses/cost-reduction-by-lean-manufacturing/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Cost Reduction by Lean Manufacturing
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/process-improvement-training-courses/why-why-analysis-fish-born-5-why-training/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Why Why Analysis | Fish-born | 5 why training
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/process-improvement-training-courses/kaizen-training-program/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Kaizen Training Program| Kaizen Certification
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="/#" aria-haspopup="true">
                Strategic Management and Training Consultants
              </Link>
              <ul
                role="menu"
                style={{
                  height: "400px",
                  overflowY: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  color: "var(--elitecons-black)",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/strategic-training/esg-certification-training/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Environmental, Social and Governance (ESG) Training
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/strategic-training/daily-work-management/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Daily Work Management
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/strategic-training/design-thinking/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Design Thinking Course | Online Trainings
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/strategic-training/finance-for-non-finance-manager/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Finanace For Non Finance Managers Training
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/strategic-training/theory-of-inventive-problem-solving/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Theory Of Inventive Problem Solving (Triz)
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/strategic-training/balance-score-card/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Balance Score Card
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/strategic-training/competency-mapping/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Competency Mapping
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/strategic-training/productivity-focus-skill-mapping/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Productivity Focus Skill Mapping
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/strategic-training/world-class-manufacturing/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    World Class Manufacturing
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/dwm-and-time-management-techniques/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    DWM and Time Management Techniques
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link
                href="/corporate-training-companies/behavioural-training/"
                aria-haspopup="true"
              >
                Behavioural Training
              </Link>
              <ul
                role="menu"
                style={{
                  height: "400px",
                  overflowY: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  color: "var(--elitecons-black)",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/?page_id=12379"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Presentation Skills Training Courses
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/behavioural-training/art-of-delegation-training/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    The Art of Delegation Training
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/behavioural-training/planning-and-prioritization-skill/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Planning &amp; Prioritization Skills Training
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/behavioural-training/team-time-and-task-management/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Team, Time and Task Management Training &amp; Seminars
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/?page_id=13155"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Non Verbal Communication Online Training
                  </Link>
                </li>
                <li
                  className="hover-style"
                  style={{
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "11px",
                  }}
                >
                  <Link
                    href="/corporate-training-companies/behavioural-training/team-development-motivation/"
                    style={{ color: "var(--elitecons-black)" }}
                  >
                    Team Development &amp; Motivation Training Programmes
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <Link
            href="/automated-guided-vehicle-manufacturers"
            aria-haspopup="true"
          >
            AMR/AGV/RGV
          </Link>
          {/* <ul role="menu">
                <li className="hover-style">
              <Link href="/automated-guided-vehicle-manufacturers">
                    Autonomous Mobile Robot | AGV | AMR
                  </Link>
            </li>
          </ul> */}
        </li>

        <li>
          <Link href="/career">Career</Link>
        </li>

        <li>
          <Link href="/case-studies">Case Studies</Link>
        </li>

        <li>
          <Link href="/blog">Blogs</Link>
        </li>

        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>

      <style jsx>{`
        /* --- GENERAL LI STYLING FOR SCALING & BORDER RADIUS --- */
        .main-menu__list li {
          /* Apply transition for transform and border-radius properties to all li */
          transition: transform 0.25s ease-in-out,
            border-radius 0.25s ease-in-out;
          position: relative;
          /* You could define a base border-radius here if you want items to be slightly rounded always */
          /* border-radius: 4px; */
        }

        /* Default hover effect for ANY li in the menu */
        .main-menu__list li:hover {
          transform: scale(1.01); /* Moderate scale for dropdown/nested items */
          z-index: 15; /* Ensure hovered items are above siblings and dropdown backgrounds */
          border-radius: 6px; /* Applied border-radius on hover. Adjust as needed. */
        }

        /* --- TOP-LEVEL MENU ITEMS --- */
        .main-menu__list > li {
          display: inline-block;
          vertical-align: middle;
          padding: 0 5px; /* Spacing for top-level items */
        }

        /* Override hover effect for DIRECT children (top-level items) */
        .main-menu__list > li:hover {
          transform: scale(
            1.1
          ); /* Larger scale specifically for top-level items */
          z-index: 5; /* Above direct siblings, below dropdowns */
          /* border-radius from .main-menu__list li:hover will apply (e.g., 6px).
             If a different radius is needed for top-level items on hover, specify it here:
             border-radius: 8px; 
          */
        }

        .main-menu__list > li > a {
          display: inline-block;
          padding: 10px 5px; /* Padding for the link itself */
        }

        /* --- DROPDOWN STRUCTURE --- */
        .dropdown > ul {
          display: none;
          position: absolute;
          top: 0;
          left: 100%;
          background: #fff;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
          min-width: 250px;
          z-index: 10;
          list-style-type: none;
          text-align: left;
          border-radius: 4px; /* Existing radius for the dropdown box itself */
          padding: 5px 0;
        }

        .dropdown:hover > ul {
          display: block;
        }

        /* --- STYLING FOR ITEMS WITHIN DROPDOWNS (.hover-style) --- */
        .hover-style {
          /* Transitions for background and text color */
          transition: background-color 0.3s ease, color 0.3s ease;
          min-width: 150px;
          margin-bottom: 10px;
          font-size: 18px;
          margin-top: 10px;
          /* border-radius, transform, and z-index on hover are inherited from .main-menu__list li:hover */
        }

        .hover-style a {
          display: block;
          padding: 8px 15px;
          text-decoration: none;
          transition: color 0.3s ease; /* Link color transition */
        }

        .hover-style:hover {
          // background-color: var(--elitecons-base);
          background-color: var(--elitecons-base);
          color: var(--elitecons-white);
          border-radius: 10px;
          /* border-radius, transform, and z-index are handled by .main-menu__list li:hover */
        }

        .hover-style:hover a {
          // color: var(--elitecons-white) !important;
          background-color: var(--elitecons-base);
          color: var(--elitecons-white);
          border-radius: 10px;
        }

        /* General styling for ALL links within dropdown list items */
        .dropdown ul li a {
          display: block;
          padding: 8px 15px;
          text-decoration: none;
        }

        /* Specific hover for non-.hover-style list items in dropdowns, if needed */
        .dropdown ul li:not(.hover-style):hover {
          /* If these items should also get a background to make the border-radius visible, add it here. */
          /* background-color: #f0f0f0; */ /* Example */
          /* transform, border-radius, and z-index are inherited from .main-menu__list li:hover */
        }
        /* Specific hover for links inside non-.hover-style list items */
        .dropdown ul li:not(.hover-style) a:hover {
          /* color: var(--elitecons-base); */ /* Example text color change */
        }
      `}</style>
    </>
  );
}
