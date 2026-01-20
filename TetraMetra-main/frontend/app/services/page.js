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
        <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Services">
        {/*Services Page Start*/}
        <section className="services-page">
            <div className="container">
                <div className="row">
                    {/* Services Four Single Start */}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-four__single">
                            <div className="services-four__img">
                                <img src="assets/images/services/services-4-1.jpg" alt=""/>
                            </div>
                            <div className="services-four__content">
                                <h5 className="services-four__title"><Link href="service-details">Elite Structures</Link>
                                </h5>
                                <p className="services-four__text">Et purus duis sollicit udin pur <br/> us duis sollicitudin
                                </p>
                                <div className="services-four__btn-box">
                                    <Link href="service-details" className="services-four__btn">Read more <span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Services Four Single End */}
                    {/* Services Four Single Start */}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-four__single">
                            <div className="services-four__img">
                                <img src="assets/images/services/services-4-2.jpg" alt=""/>
                            </div>
                            <div className="services-four__content">
                                <h5 className="services-four__title"><Link href="service-details">Pixel Craft</Link>
                                </h5>
                                <p className="services-four__text">Et purus duis sollicit udin pur <br/> us duis sollicitudin
                                </p>
                                <div className="services-four__btn-box">
                                    <Link href="service-details" className="services-four__btn">Read more <span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Services Four Single End */}
                    {/* Services Four Single Start */}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-four__single">
                            <div className="services-four__img">
                                <img src="assets/images/services/services-4-1.jpg" alt=""/>
                            </div>
                            <div className="services-four__content">
                                <h5 className="services-four__title"><Link href="service-details">Pro Build
                                        Innovations</Link>
                                </h5>
                                <p className="services-four__text">Et purus duis sollicit udin pur <br/> us duis sollicitudin
                                </p>
                                <div className="services-four__btn-box">
                                    <Link href="service-details" className="services-four__btn">Read more <span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Services Four Single End */}
                    {/* Services Four Single Start */}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-four__single">
                            <div className="services-four__img">
                                <img src="assets/images/services/services-4-4.jpg" alt=""/>
                            </div>
                            <div className="services-four__content">
                                <h5 className="services-four__title"><Link href="service-details">Pixel Craft</Link>
                                </h5>
                                <p className="services-four__text">Et purus duis sollicit udin pur <br/> us duis sollicitudin
                                </p>
                                <div className="services-four__btn-box">
                                    <Link href="service-details" className="services-four__btn">Read more <span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Services Four Single End */}
                    {/* Services Four Single Start */}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-four__single">
                            <div className="services-four__img">
                                <img src="assets/images/services/services-4-5.jpg" alt=""/>
                            </div>
                            <div className="services-four__content">
                                <h5 className="services-four__title"><Link href="service-details">Pro Build
                                        Innovations</Link>
                                </h5>
                                <p className="services-four__text">Et purus duis sollicit udin pur <br/> us duis sollicitudin
                                </p>
                                <div className="services-four__btn-box">
                                    <Link href="service-details" className="services-four__btn">Read more <span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Services Four Single End */}
                    {/* Services Four Single Start */}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services-four__single">
                            <div className="services-four__img">
                                <img src="assets/images/services/services-4-6.jpg" alt=""/>
                            </div>
                            <div className="services-four__content">
                                <h5 className="services-four__title"><Link href="service-details">Elite Structures</Link>
                                </h5>
                                <p className="services-four__text">Et purus duis sollicit udin pur <br/> us duis sollicitudin
                                </p>
                                <div className="services-four__btn-box">
                                    <Link href="service-details" className="services-four__btn">Read more <span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Services Four Single End */}
                </div>
            </div>
        </section>
        {/*Services Page End*/}

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
                    {/* Use the existing images from the original selection */}
                    <div className="cta-one__shape-1" style={{ marginBottom: "16px" }}>
                        <img src="assets/images/shapes/cta-one-shape-1.png" alt="" style={{ maxWidth: "120px", width: "100%" }} />
                    </div>
                    <div className="cta-one__img">
                        <img
                            src="assets/images/resources/cta-one-img.png"
                            alt=""
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
                    </div>
                </div>
            </div>
        </section>
        {/*CTA One End*/}
            
            <ContactFormModal
          open={isModalOpen}
          onClose={closeModal}
          buttonText={modalButtonText}
        />
            </Layout>
        </>
    )
}