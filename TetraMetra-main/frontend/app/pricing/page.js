"use client";
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react";
import ContactFormModal from "@/components/ContactFormModal";

export default function Home() {
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
            <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Pricing">
                {/*Pricing Four Start */}
                <section className="pricing-four pricing-page">
                    <div className="container">
                        <div className="row">
                            {/*Pricing Four Single Start*/}
                            <div className="col-xl-4 col-lg-4">
                                <div className="pricing-four__single">
                                    <h4 className="pricing-four__title">Stater Plan</h4>
                                    <div className="pricing-four__price-box">
                                        <p>$19<span>/mo</span></p>
                                    </div>
                                    <div className="pricing-four__points-and-btn">
                                        <ul className="pricing-four__points list-unstyled">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Mistakes To Avoid</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Your Startup</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Knew About Fonts</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Winning Metric for Your Startup</p>
                                            </li>
                                        </ul>
                                        <div className="pricing-four__btn-box">
                                            <button onClick={() => openModal("Starter Plan")} className="thm-btn pricing-four__btn">Get Now<span
                                                    className="icon-dabble-arrow-right"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Pricing Four Single End*/}
                            {/*Pricing Four Single Start*/}
                            <div className="col-xl-4 col-lg-4">
                                <div className="pricing-four__single">
                                    <h4 className="pricing-four__title">Basic Plan</h4>
                                    <div className="pricing-four__price-box">
                                        <p>$29<span>/mo</span></p>
                                    </div>
                                    <div className="pricing-four__points-and-btn">
                                        <ul className="pricing-four__points list-unstyled">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Mistakes To Avoid</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Your Startup</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Knew About Fonts</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Winning Metric for Your Startup</p>
                                            </li>
                                        </ul>
                                        <div className="pricing-four__btn-box">
                                            <button onClick={() => openModal("Basic Plan")} className="thm-btn pricing-four__btn">Get Now<span
                                                    className="icon-dabble-arrow-right"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Pricing Four Single End*/}
                            {/*Pricing Four Single Start*/}
                            <div className="col-xl-4 col-lg-4">
                                <div className="pricing-four__single">
                                    <h4 className="pricing-four__title">Premium Plan</h4>
                                    <div className="pricing-four__price-box">
                                        <p>$89<span>/mo</span></p>
                                    </div>
                                    <div className="pricing-four__points-and-btn">
                                        <ul className="pricing-four__points list-unstyled">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Mistakes To Avoid</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Your Startup</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Knew About Fonts</p>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-2"></span>
                                                </div>
                                                <p>Winning Metric for Your Startup</p>
                                            </li>
                                        </ul>
                                        <div className="pricing-four__btn-box">
                                            <button onClick={() => openModal("Premium Plan")} className="thm-btn pricing-four__btn">Get Now<span
                                                    className="icon-dabble-arrow-right"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Pricing Four Single End*/}
                        </div>
                    </div>
                </section>
                {/*Pricing Four End */}

                {/*CTA One Start*/}
                <section
                    className="cta-one"
                    style={{ height: "auto", padding: "60px 0", boxSizing: "border-box", width: "100%" }}
                >
                    <div
                        className="container"
                        style={{
                            margin: "0 auto",
                            gap: "32px",
                            width: "100%",
                            maxWidth: "1200px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexDirection: "row",
                        }}
                    >
                        {/* Left Side: Text and Form */}
                        <div
                            style={{
                                flex: 1,
                                boxSizing: "border-box",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                height: "100%",
                                minHeight: "400px",
                                padding: "0 0 0 24px",
                            }}
                        >
                            <h3
                                className=""
                                style={{
                                    marginBottom: "20px",
                                    fontSize: "36px",
                                    fontWeight: 700,
                                    width: "200%",
                                    color: "white"
                                }}
                            >
                                Crafting Digital Experiences That Inspire
                            </h3>
                            <div className="cta-one__from-box">
                                <form className="cta-one__form">
                                    <div className="cta-one__input-box">
                                        <input type="email" placeholder="Your E-mail" name="email" />
                                    </div>
                                    <button
                                type="button"
                                        className="cta-one__btn thm-btn"
                                        style={{ width: "60%" }}
                                onClick={() => openModal("Subscribe Us")}
                                    >
                                        Subscribe Us
                                    </button>
                                </form>
                            </div>
                        </div>
                        {/* Right Side: Images */}
                        <div
                            style={{
                                flex: 1,
                                boxSizing: "border-box",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end",
                                justifyContent: "center",
                                height: "80%",
                                gap: "16px",
                                paddingRight: "24px",
                            }}
                        >
                            <img
                                src="/assets/images/case-studies/CS2.jpg"
                                alt="Inspiring Digital Experience"
                                style={{
                                    marginBottom: "8px",
                                    zIndex: 2,
                                    maxWidth: "350px",
                                    width: "90%",
                                    minHeight: "150px",
                                    maxHeight: "40%",
                                    borderRadius: "10px",
                                    objectFit: "cover",
                                    background: "none",
                                }}
                            />
                            <img
                                src="/assets/images/case-studies/CS6.jpg"
                                alt="Inspiring Digital Experience 2"
                                style={{
                                    zIndex: 2,
                                    maxWidth: "350px",
                                    width: "90%",
                                    minHeight: "150px",
                                    maxHeight: "40%",
                                    borderRadius: "10px",
                                    objectFit: "cover",
                                    background: "none",
                                }}
                            />
                        </div>
                    </div>
                </section>
                {/*CTA One End*/}

            </Layout>
            <ContactFormModal
                open={isModalOpen}
                onClose={closeModal}
                buttonText={modalButtonText}
            />
        </>
    )
}