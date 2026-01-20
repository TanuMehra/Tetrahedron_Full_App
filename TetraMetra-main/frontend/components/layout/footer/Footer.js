"use client";
import Link from "next/link";
import { useState } from "react";
import ContactFormModal from "@/components/ContactFormModal";

const poppinsFont = {
  fontFamily: "Poppins, sans-serif !important"
};
const mainHeading = {
  ...poppinsFont,
  fontSize: "32px !important"
};
const widgetTitle = {
  ...poppinsFont,
  fontSize: "26px !important"
};
const bodyText = {
  ...poppinsFont,
  fontSize: "18px !important"
};
const smallText = {
  ...poppinsFont,
  fontSize: "16px !important"
};

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalButtonText, setModalButtonText] = useState("");

  const openModal = (buttonText) => {
    setModalButtonText(buttonText);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalButtonText("");
  };

  return (
    <>
      {/*Site Footer Two Start*/}
      <footer className="site-footer-two">
        <div
          className="site-footer-two__shape-1 img-bounce"
          style={{
            backgroundImage:
              "url(assets/images/shapes/site-footer-two-shape-1.png",
          }}
        ></div>
        <div className="site-footer-two__top">
          <div className="container">
            <div className="site-footer-two__top-inner">
              <div className="row">
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="footer-widget-two__column footer-widget-two__about">
                    <div className="footer-widget-two__logo">
                      <Link href="/">
                        <img
                          src="assets/images/Tetrahedron Logo.png"
                          alt=""
                          style={{ width: "150px", height: "auto" }}
                        />
                      </Link>
                    </div>
                    <p className="footer-widget-two__about-text" ref={el => el && el.style.setProperty("font-size", "18px", "important")}>
                      We believe in the best solution at the most competitive price. 
                    </p>
                    <div className="site-footer-two__social">
                      <Link href="#" ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                        <i className="icon-facebook"></i>
                      </Link>
                      <Link href="#" ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                        <i className="icon-twitter"></i>
                      </Link>
                      <Link href="#" ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                        <i className="icon-link-in"></i>
                      </Link>
                      <Link href="#" ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                        <i className="icon-pinterest"></i>
                      </Link>
                    </div>
                    <form className="footer-widget-two__about-form mc-form">
                      <div className="footer-widget-two__about-form-input-box">
                        <input
                          type="email"
                          placeholder="Your e-mail"
                          name="EMAIL"
                          ref={el => el && el.style.setProperty("font-size", "17px", "important")}
                        />
                        <button
                          type="button"
                          className="footer-widget-two__about-btn"
                          ref={el => el && el.style.setProperty("font-size", "17px", "important")}
                          onClick={() => openModal("Quick Support")}
                        >
                          <span className="icon-arrow-right"></span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="footer-widget-two__column footer-widget-two__service">
                    <div className="footer-widget-two__title-box">
                      <h3 className="footer-widget-two__title" ref={el => el && el.style.setProperty("font-size", "24px", "important")}>Expertise</h3>
                    </div>
                    <ul className="footer-widget-two__service-list list-unstyled">
                      <li ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                        <Link href="service-details" ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                          {" "}
                          <span className="icon-angle-left"></span>
                          Consulting Services
                        </Link>
                      </li>
                      <li ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                        <Link href="service-details" ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                          {" "}
                          <span className="icon-angle-left"></span>
                          Corporate Training
                        </Link>
                      </li>
                      <li ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                        <Link href="service-details" ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                          {" "}
                          <span className="icon-angle-left"></span>
                          Automation
                        </Link>
                      </li>
                      <li ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                        <Link href="service-details" ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                          {" "}
                          <span className="icon-angle-left"></span>
                          Sitemap
                        </Link>
                      </li>
                      <li ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                        <Link href="service-details" ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                          {" "}
                          <span className="icon-angle-left"></span>
                          DMCA PROTECTED
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="footer-widget-two__column footer-widget-two__links">
                    <div className="footer-widget-two__title-box">
                      <h3 className="footer-widget-two__title" ref={el => el && el.style.setProperty("font-size", "24px", "important")}>Quick Links</h3>
                    </div>
                    <ul className="footer-widget-two__service-list list-unstyled">
                      <li ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                        <Link href="" ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                          {" "}
                          <span className="icon-angle-left"></span> Home
                        </Link>
                      </li>
                      <li ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                        <Link href="about" ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                          {" "}
                          <span className="icon-angle-left"></span> About Us
                        </Link>
                      </li>
                      <li ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                        <Link href="contact" ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                          {" "}
                          <span className="icon-angle-left"></span> Contact Us
                        </Link>
                      </li>
                      <li ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                        <Link href="gallery" ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                          {" "}
                          <span className="icon-angle-left"></span> Gallery
                        </Link>
                      </li>
                      <li ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                        <Link href="resources" ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                          {" "}
                          <span className="icon-angle-left"></span> Resources
                          Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="footer-widget-two__column footer-widget-two__contact">
                    <div className="footer-widget-two__title-box">
                      <h3 className="footer-widget-two__title" ref={el => el && el.style.setProperty("font-size", "24px", "important")}>Contact Us</h3>
                    </div>
                    <ul className="footer-widget-two__contact-list list-unstyled">
                      <li ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                        <div className="icon">
                          <span className="icon-arrow-up-2"></span>
                        </div>
                        <div className="content">
                          <p ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                            <Link href="mailto:marketing@tetrahedron.in" ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                              marketing@tetrahedron.in
                            </Link>
                          </p>
                        </div>
                      </li>
                      <li ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                        <div className="icon">
                          <span className="icon-arrow-up-2"></span>
                        </div>
                        <div className="content">
                          <p ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                            <Link href="tel:918984189814" ref={el => el && el.style.setProperty("font-size", "17px", "important")}>+91-8984189814</Link>
                          </p>
                        </div>
                      </li>
                      <li ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                        <div className="icon">
                          <span className="icon-arrow-up-2"></span>
                        </div>
                        <div className="content">
                          <p ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                            Main Office:- 204, Block A, Ecotech III, Noida,
                            Khera Choganpur, Uttar Pradesh 201306, India
                          </p>
                        </div>
                      </li>
                      <li ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                        <div className="icon">
                          <span className="icon-arrow-up-2"></span>
                        </div>
                        <div className="content">
                          <p ref={el => el && el.style.setProperty("font-size", "17px", "important")}>
                            Regional Office (East):- Unit 630, Located at DLF
                            Cybercity, Infocity Park, Patia – 751024,
                            Bhubaneswar, Odisha (India)
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer-two__bottom">
          <div className="container">
            <div className="site-footer-two__bottom-inner">
              <p className="site-footer-two__bottom-text" ref={el => el && el.style.setProperty("font-size", "15px", "important")}>
                Copyright© 2025, Tetrahedron Manufacturing Services Pvt. Ltd.
                All Rights Reserved.
              </p>
              <ul className="list-unstyled site-footer-two__bottom-menu">
                <li ref={el => el && el.style.setProperty("font-size", "15px", "important")}>
                  <Link href="about" ref={el => el && el.style.setProperty("font-size", "15px", "important")}>Terms & Condition</Link>
                </li>
                <li ref={el => el && el.style.setProperty("font-size", "15px", "important")}>
                  <Link href="about" ref={el => el && el.style.setProperty("font-size", "15px", "important")}>Privacy Policy</Link>
                </li>
                <li ref={el => el && el.style.setProperty("font-size", "15px", "important")}>
                  <Link href="contact" ref={el => el && el.style.setProperty("font-size", "15px", "important")}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/*Site Footer End*/}
      <ContactFormModal
        open={isModalOpen}
        onClose={closeModal}
        buttonText={modalButtonText}
      />
    </>
  );
}
