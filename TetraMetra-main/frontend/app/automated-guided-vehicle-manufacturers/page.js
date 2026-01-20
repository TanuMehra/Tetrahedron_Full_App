"use client";

import Layout from "@/components/layout/Layout";
import styles from "./style.module.css";
import { useState } from "react";
import ContactFormModal from "@/components/ContactFormModal";
import ContactForm from "@/components/ContactForm";

export default function Page() {
  const [openFAQs, setOpenFAQs] = useState({}); // Object to track multiple open states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalButtonText, setModalButtonText] = useState("");

  const toggleFAQ = (index) => {
    setOpenFAQs((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle only the selected FAQ
    }));
  };

  const openModal = (buttonText) => {
    setModalButtonText(buttonText);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalButtonText("");
  };

  return (
    <Layout>
      <div className={styles.container}>
        {/* Hero Section */}
        <section>
          <div className={styles.heroSection} style={{ display: 'flex', alignItems: 'stretch', minHeight: 400 }}>
            <div style={{ 
              flex: 1, 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              padding: '40px 24px 40px 6vw', 
              minWidth: 0 
            }}>
              <div style={{
                background: 'rgba(0,0,0,0.72)',
                borderRadius: '16px',
                padding: '32px 28px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
                maxWidth: 700,
                width: '100%',
                margin: '0 auto'
              }}>
                <h1 style={{
                  textAlign: "left", 
                  fontSize: "36px", 
                  marginTop: "0", 
                  color: 'white',
                  marginBottom: '18px'
                }}>
                  Automated Guided Vehicle Manufacturers | AGV | AMR | RGV
                </h1>
                <p style={{
                  color: 'white', 
                  fontSize: '18px', 
                  marginTop: '0'
                }}>
                  From repetitive tasks on the factory floor to activities in Agriculture, Logistics, Hospitality, and more, the use of Autonomous Mobile Robots is changing how business gets done
                </p>
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 0, padding: '40px 6vw 40px 24px' }}>
              <div style={{ width: '100%', maxWidth: 400, background: 'rgba(255,255,255,0.97)', borderRadius: 16, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}>
                <ContactForm buttonText="Contact Us" />
              </div>
            </div>
          </div>
        </section>

        {/* About Operational Excellence Consulting */}
        <section className={styles.agvSection}>
          <h1 className={styles.agvTitle}>Automated Guided Vehicle</h1>
          <p className={styles.agvDescription}>
            Automated Guided Vehicles are driverless vehicles that fundamentally perform transportation functions. As experts in Automated Guided Vehicles, we're here to help you implement these cutting-edge systems to enhance your operations.
            <br />
            Automated Guided Vehicles (AGVs) are material handling vehicles used to autonomously transport carriers throughout a warehouse, distribution center, or manufacturing facility without human operators. Automated Guided Vehicle manufacturers specialize in producing these advanced systems. We are leading AGV suppliers in India, providing advanced automated guided vehicles to enhance your material handling processes.
            <br />
            An Automated Guided Vehicle (AGV) is a mobile robot used for material transport in industrial settings. AGVs navigate via technologies like magnetic tape, lasers, or cameras, following predetermined routes. Commonly found in manufacturing, warehousing, and distribution, they enhance efficiency, reduce labor costs, and improve safety by automating repetitive material handling tasks. Capable of carrying various loads, from small parts to heavy pallets, AGVs streamline operations and boost productivity. Their integration into logistics systems exemplifies the advancements in automation and robotics, making them essential for modern industrial automation. Automated guided vehicle manufacturers play a crucial role in developing these advanced systems.
          </p>

          <div className={styles.agvGrid}>
            <div className={styles.agvCard}>
              <h3 className={styles.cardTitle}>Magnetic Tape Navigation</h3>
              <img src="/assets/images/amr1.png" alt="Magnetic Tape Navigation" className={styles.cardImage} />
              <p className={styles.cardDescription}>
                Magnetic tape-based navigation for AGVs uses magnetic tapes laid on the floor to guide vehicles. Equipped with magnetic sensors, AGVs detect and follow the tape, ensuring precise and reliable navigation. This method is cost-effective, easy to implement, and widely used in manufacturing and warehousing.
              </p>
            </div>

            <div className={styles.agvCard}>
              <h3 className={styles.cardTitle}>QR Code Navigation</h3>
              <img src="/assets/images/amr2.png" alt="QR Code Navigation" className={styles.cardImage} />
              <p className={styles.cardDescription}>
                QR code-based navigation for Automated Guided Vehicles (AGVs) involves using QR codes placed along the route. AGVs scan these codes to determine their position and receive navigation instructions. This method ensures precise navigation, easy route updates, and integration with digital systems for efficient material handling and logistics.
              </p>
            </div>

            <div className={styles.agvCard}>
              <h3 className={styles.cardTitle}>Rail Guided Navigation</h3>
              <img src="/assets/images/amr3.png" alt="Rail Guided Navigation" className={styles.cardImage} />
              <p className={styles.cardDescription}>
                Rail-guided navigation for Automated Guided Vehicles (AGVs) involves using physical rails or tracks embedded in or on the floor to guide the movement of the AGVs. This method provides a highly controlled and precise navigation system, ideal for environments that require strict adherence to predefined paths.
              </p>
            </div>
          </div>
        </section>

        {/* Serving Section */}
        <section className={styles.servingSection}>
          <h1>Serving These Manufacturing Industries</h1>
          <div className={styles.servingContainer}>
            <img src="/assets/images/m1.jpeg" alt="Industry 1" />
            <img src="/assets/images/m2.jpeg" alt="Industry 2" />
            <img src="/assets/images/m3.jpeg" alt="Industry 3" />
            {/* <img src="/assets/images/m4.jpeg" alt="Industry 4" /> */}
          </div>
        </section>

        {/* Auto mobile robot Section with Image */}
        <section className={styles.amrSection}>
          <h1 className={styles.amrTitle}>Autonomous Mobile Robot</h1>
          <div className={styles.amrContent}>
            {/* Left Side - Image */}
            <div className={styles.amrImageContainer}>
              <img
                src="/images/Autonomous-Mobile-Robots-10.png"
                alt="Autonomous Mobile Robot"
              />
            </div>

            {/* Right Side - Text */}
            <div className={styles.amrTextContainer}>
              <p>
                Autonomous Mobile Robots (AMRs) are advanced kinds of Guided Vehicles that can be navigated without any pre-defined path.
              </p>
              <p>
                AMRs are outfitted with cameras and sensors, so if they run into a falling object while navigating their environment, they will use navigation techniques to stop, slow down, or reroute their path around the object and continue with their task. These robots combine robotic intelligence with car-like mobility, allowing them to make decisions on their own and figure out the best routes to reach their goals.
              </p>
            </div>
          </div>

          {/* Centered Button */}
          <div className={styles.amrButtonContainer}>
            <button className={styles.amrButton} onClick={() => openModal("Schedule Demo")}>Schedule Demo</button>
          </div>
        </section>

        {/* Type of charger section */}
        <section className={styles.chargerSection}>
          <h1 className={styles.chargerTitle}>Types of Chargers for Mobile Robots</h1>
          <div className={styles.chargerGrid}>
            <div className={styles.chargerCard}>
              <img src="/assets/images/charger1.png" alt="Manual Charger" className={styles.chargerImage} />
              <p className={styles.chargerDescription}>
                A manual charger requires human intervention to connect the mobile robot to the charging station. This method is straightforward and cost-effective but can be time-consuming and dependent on human availability.
              </p>
            </div>

            <div className={styles.chargerCard}>
              <img src="/assets/images/charger2.png" alt="Contact Charger" className={styles.chargerImage} />
              <p className={styles.chargerDescription}>
                Contact chargers use physical connectors to transfer power from the charging station to the robot. This method ensures a reliable and efficient charge, typically employed in environments where robots return to a designated charging point.
              </p>
            </div>

            <div className={styles.chargerCard}>
              <img src="/assets/images/charger3.png" alt="Wireless Charger" className={styles.chargerImage} />
              <p className={styles.chargerDescription}>
                Wireless chargers leverage wireless charging technology, allowing mobile robots to charge without physical connectors. This method offers flexibility and convenience, enabling continuous operation without the need for precise docking.
              </p>
            </div>
          </div>
        </section>

        {/* Customised autonomous mobile robot soultions */}
        <section className={styles.amrSolutionSection}>
          <h1 className={styles.amrSolutionTitle}>Customised Autonomous Mobile Robot Solutions</h1>
          <div className={styles.amrSolutionGrid}>
            <div className={styles.amrSolutionCard}>
              <img src="/assets/images/custom1.png" alt="Mounted Conveyor" className={styles.amrSolutionImage} />
              <h3 className={styles.amrSolutionDescription}>MOUNTED CONVEYOR</h3>
            </div>

            <div className={styles.amrSolutionCard}>
              <img src="/assets/images/custom2.png" alt="Mounted Anemometer" className={styles.amrSolutionImage} />
              <h3 className={styles.amrSolutionDescription}>MOUNTED ANEMOMETER</h3>
            </div>

            <div className={styles.amrSolutionCard}>
              <img src="/assets/images/custom3.png" alt="Mounted 360 Degree Camera" className={styles.amrSolutionImage} />
              <h3 className={styles.amrSolutionDescription}>MOUNTED 360 DEGREE CAMERA</h3>
            </div>
          </div>
        </section>

        {/* Automated Solution for Reducing Material Handling Costs: AGV Manufacturers in India Section with Image */}
        <section className={styles.solutionSection}>
          <h1 className={styles.solutionTitle}>
            Automated Solution for Reducing Material Handling Costs: AGV Manufacturers in India
          </h1>
          <div className={styles.solutionContent}>


            {/* Left Side - Text */}
            <div className={styles.solutionTextContainer}>
              <p>
                Tetrahedron Manufacturing Services Pvt Ltd is dedicated to providing simple and cost-effective automation solutions to address complex business problems. As one of the leading AMR providers and AGV Manufacturers in India, we have successfully tackled material handling challenges in various industries.
              </p>
              <p>
                Through our experience working with diverse sectors, we have observed the significant variable costs and inconsistencies associated with manual labor in transporting heavy loads within manufacturing facilities. Whether it's moving raw materials, work in progress, or finished goods across the shop floor, the industry heavily relies on manual labor for these tasks.
              </p>
              <p>
                To overcome these challenges, we have developed Autonomous Mobile Robots (AMRs) that are equipped with intelligent sensors. These sensors enable our robots to detect obstacles along their path and navigate through them safely, ensuring a successful and efficient delivery to their destination. Our collaboration with AGV manufacturers in India has been instrumental in enhancing the capabilities of these robots.
              </p>
            </div>
            {/* Right Side - Image */}
            <div className={styles.solutionImageContainer}>
              <img src="/images/MOUNTED-CONVEYOR-1.png" alt="Autonomous Mobile Robot" />
            </div>
          </div>

        </section>

        {/* Benefits of Automated Guided Vehicle / Autonomous Mobile Robot */}
        <section className={styles.benefitsSection}>
          <h1 className={styles.benefitsTitle}>
            Benefits of Automated Guided Vehicle / Autonomous Mobile Robot
          </h1>
          <div className={styles.benefitsContent}>
            {/* Left Side - Text */}
            <div className={styles.benefitsTextContainer}>
              <p>
                We have been assisting manufacturing companies for years, helping them reduce operating costs with our highly effective and ROI-driven solutions. Introducing Hercules-1000 and Taurus-200, our innovative and cost-effective Autonomous Mobile Robots (AMRs). Our collaboration with AGV manufacturers in India has been instrumental in developing these advanced solutions.
              </p>
              <p>
                1. Hercules-1000 utilizes advanced AI and computer vision to map its environment and find the optimal path to its destination using our pioneering SLAM algorithm.
              </p>
              <p>
                2. Taurus-200 complements our automation solutions, offering simplicity and technological sophistication to enhance operational efficiency.
              </p>
              <p>
                By leveraging Hercules-1000 and Taurus-200, you can unlock numerous advantages and achieve substantial cost savings while optimizing your operations.
              </p>
              {/* Button */}
              <div className={styles.benefitsButtonContainer}>
                <button className={styles.benefitsButton} onClick={() => openModal("Download Brochure")}>Download Brochure</button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className={styles.benefitsImageContainer}>
              <img src="/assets/images/benefits.jpg" alt="Autonomous Mobile Robot" />
            </div>
          </div>
        </section>

        {/* Key Features of Autonomous Mobile Robot (AMR) */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresContainer}>
            <h1 className={styles.featuresTitle}>Key Features of Autonomous Mobile Robot (AMR)</h1>
            <div className={styles.featuresGrid}>
              <div className={styles.featuresCard}>
                <img src="/assets/images/key1.png" alt="Natural Navigation" className={styles.featuresImage} />
                <h3>Natural Navigation</h3>
                <p className={styles.featuresDescription}>
                  Unlock the power of advanced navigation for your autonomous mobile robots (AMRs). Our state-of-the-art system offers real-time job scheduling, dynamically tunes routes, and enables on-the-go destination changes.
                </p>
              </div>

              <div className={styles.featuresCard}>
                <img src="/assets/images/key2.webp" alt="Advanced Perception" className={styles.featuresImage} />
                <h3>Advanced Perception</h3>
                <p className={styles.featuresDescription}>
                  Elevate your navigation capabilities with our cutting-edge perception system. By utilizing Lidar technology and SLAM (Simultaneous Localization and Mapping) algorithms, our solution provides precise and reliable navigation for your autonomous systems.
                </p>
              </div>

              <div className={styles.featuresCard}>
                <img src="/assets/images/key3.png" alt="Rapid Charging" className={styles.featuresImage} />
                <h3>Rapid Charging</h3>
                <p className={styles.featuresDescription}>
                  Experience the pinnacle of convenience and efficiency with our cutting-edge rapid charging solution. Our fully automated system boasts an incredibly fast charging time of just 0.5 hours, providing a full 4 hours of uninterrupted operation.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section> {/* Table at the bottom */}
          <div className={styles.featuresTable}>
            <table>
              <thead>
                <tr>
                  <th>Series</th>
                  <th>Models/Payload (kg)</th>
                  <th>Speed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Taurus</td>
                  <td>100, 200,…. Upto 900</td>
                  <td>1-2 m/s</td>
                </tr>
                <tr>
                  <td>Hercules</td>
                  <td>1000, 1100,…. Upto 2000</td>
                  <td>1-2 m/s</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Autonomous Cleaning Robot */}
        <section className={styles.robotSection}>
          <h1 className={styles.robotTitle}>Autonomous Cleaning Robot</h1>
          <div className={styles.robotContent}>
            {/* Left Side - Features List */}
            <div className={styles.robotFeatures}>
              <ul>
                <li>Fully autonomous cleaning robot.</li>
                <li>Advanced sensors for obstacle detection.</li>
                <li>Programmable cleaning schedules.</li>
                <li>Efficient navigation algorithms.</li>
                <li>High-capacity dustbin.</li>
                <li>Quiet operation.</li>
                <li>Sleek design for easy mobility.</li>
                <li>Long-lasting battery life with auto-recharge capability.</li>
                <li>Compatible with smart home & Industrial systems.</li>
                <li>Remote control and monitoring capabilities.</li>
                <li>Multiple cleaning modes (sweep, vacuum, mop).</li>
                <li>App connectivity for remote control and scheduling.</li>
              </ul>
            </div>

            {/* Right Side - Image */}
            <div className={styles.robotImage}>
              <img src="/assets/images/bot.jpeg" alt="Autonomous Cleaning Robot" />
            </div>
          </div>
        </section>

        {/* Our Gallery */}
        <section className={styles.gallerySection}>
          <h1>Our Gallery</h1>
          <div className={styles.galleryContainer}>
            <div className={styles.galleryImage}>
              <img src="/images/servicesData/A_Autonomous_mo_1-transformed-300x300.png" alt="Gallery Image 1" />
            </div>
            <div className={styles.galleryImage}>
              <img src="/images/Create-a-Autono-0-1-1-300x300.webp" alt="Gallery Image 2" />
            </div>
            <div className={styles.galleryImage}>
              <img src="/images/servicesData/0975fea1-43f2-47a6-8895-3bdcf636f94a-300x300.png" alt="Gallery Image 3" />
            </div>
            <div className={styles.galleryImage}>
              <img src="/images/servicesData/A_Autonomous_mo_1-transformed-300x300.png" alt="Gallery Image 4" />
            </div>
            {/* <div className={styles.galleryImage}>
              <img src="/images/servicesData/Autonomous-Mobile-Robots-14.png" alt="Gallery Image 5" />
            </div> */}
          </div>
        </section>

        {/* Rail Guided Vehicles Section */}
<section className={styles.rgvSection}>
  <h1 className={styles.rgvTitle}>Rail Guided Vehicles</h1>
  <div className={styles.rgvContent}>
    {/* Left Side - Text */}
    <div className={styles.rgvTextContainer}>
      <p>
        Rail-Guided Vehicles (RGVs) are advanced automated systems designed to transport materials with speed, safety, and precision along fixed tracks. They are widely used in warehouses, factories, and logistics hubs to handle repetitive tasks with consistency and reliability.
      </p>
      <p>
        By reducing manual labor and minimizing errors, RGVs not only save time but also cut operational costs. Their ability to integrate seamlessly with automated storage and retrieval systems makes them a smart choice for industries aiming to boost efficiency and productivity.
      </p>
      <div className={styles.rgvButtonContainer}>
        <button className={styles.rgvButton} onClick={() => openModal("Book a Call")}>
          Book a Call Now
        </button>
      </div>
    </div>
    
    {/* Right Side - Image */}
    <div className={styles.rgvImageContainer}>
      <img src="/assets/images/rgv-graphic.png" alt="Rail Guided Vehicle System" />
    </div>
  </div>
</section>



        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <h1>FAQs</h1>
          <div className={styles.faqContainer}>

            {/* FAQ 1 */}
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(1)}>
                <span>{openFAQs[1] ? "−" : "+"}</span> What is Operational Excellence in manufacturing?
              </div>
              {openFAQs[1] && <p className={styles.faqAnswer}>Operational Excellence is a philosophy of continuous improvement in efficiency, quality, and business processes to optimize performance.</p>}
            </div>

            {/* FAQ 2 */}
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(2)}>
                <span>{openFAQs[2] ? "−" : "+"}</span> Why is Manufacturing/Operational Excellence important?
              </div>
              {openFAQs[2] && <p className={styles.faqAnswer}>It enhances productivity, reduces costs, and improves overall competitiveness in the market.</p>}
            </div>

            {/* FAQ 3 */}
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(3)}>
                <span>{openFAQs[3] ? "−" : "+"}</span> What are the benefits of Operational Excellence?
              </div>
              {openFAQs[3] && <p className={styles.faqAnswer}>Key benefits include cost savings, better resource utilization, and improved product quality.</p>}
            </div>

            {/* FAQ 4 */}
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(4)}>
                <span>{openFAQs[4] ? "−" : "+"}</span> What are Operational Excellence goals?
              </div>
              {openFAQs[4] && <p className={styles.faqAnswer}>The goals focus on efficiency, waste reduction, employee engagement, and customer satisfaction.</p>}
            </div>

            {/* FAQ 5 */}
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(5)}>
                <span>{openFAQs[5] ? "−" : "+"}</span> What are the KPI for Operational Excellence?
              </div>
              {openFAQs[5] && <p className={styles.faqAnswer}>KPIs include Overall Equipment Effectiveness (OEE), production yield, cycle time, and defect rates.</p>}
            </div>

            {/* FAQ 6 */}
            <div className={styles.faqItem}>
              <div className={styles.faqQuestion} onClick={() => toggleFAQ(6)}>
                <span>{openFAQs[6] ? "−" : "+"}</span> Best Manufacturing consulting firms in India?
              </div>
              {openFAQs[6] && <p className={styles.faqAnswer}>Some top firms include Tetrahedron, McKinsey, and BCG specializing in manufacturing excellence.</p>}
            </div>

          </div>
        </section>

      </div>

      <ContactFormModal
        open={isModalOpen}
        onClose={closeModal}
        buttonText={modalButtonText || 'Contact Us'}
      />

    </Layout >
  );
}