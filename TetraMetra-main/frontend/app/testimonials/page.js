'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import ContactFormModal from "@/components/ContactFormModal"

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalButtonText, setModalButtonText] = useState("")

    const openModal = (buttonText) => {
        setModalButtonText(buttonText)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setModalButtonText("")
    }

    return (
        <>
            <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Testimonial">
                {/*Testimonial Page Start*/}
                <section className="testimonial-page">
                    <div className="container">
                        <div className="row">
                            {/*Testimonial Two Single Start*/}
                            <div className="col-xl-6 col-lg-6">
                                <div className="testimonial-two__single">
                                    <div className="testimonial-two__quote-icon">
                                        <span className="icon-quote-2"></span>
                                    </div>
                                    <div className="testimonial-two__client-info">
                                        <div className="testimonial-two__client-img">
                                            <img src="assets/images/testimonial/testimonial-two-client-1-1.jpg" alt=""/>
                                        </div>
                                        <div className="testimonial-two__client-content">
                                            <h4 className="testimonial-two__client-name">James Anderson</h4>
                                            <p className="testimonial-two__client-sub-title">Software Engineer</p>
                                        </div>
                                    </div>
                                    <p className="testimonial-two__text">Working with this company has been a
                                        game-changer for my the a business. Their expertise and innovative Their
                                        expertise and approach have helped us achieve remarkable</p>
                                </div>
                            </div>
                            {/*Testimonial Two Single End*/}
                            {/*Testimonial Two Single Start*/}
                            <div className="col-xl-6 col-lg-6">
                                <div className="testimonial-two__single">
                                    <div className="testimonial-two__quote-icon">
                                        <span className="icon-quote-2"></span>
                                    </div>
                                    <div className="testimonial-two__client-info">
                                        <div className="testimonial-two__client-img">
                                            <img src="assets/images/testimonial/testimonial-two-client-1-2.jpg" alt=""/>
                                        </div>
                                        <div className="testimonial-two__client-content">
                                            <h4 className="testimonial-two__client-name">James Vince</h4>
                                            <p className="testimonial-two__client-sub-title">Software Engineer</p>
                                        </div>
                                    </div>
                                    <p className="testimonial-two__text">Working with this company has been a
                                        game-changer for my the a business. Their expertise and innovative Their
                                        expertise and approach have helped us achieve remarkable</p>
                                </div>
                            </div>
                            {/*Testimonial Two Single End*/}
                            {/*Testimonial Two Single Start*/}
                            <div className="col-xl-6 col-lg-6">
                                <div className="testimonial-two__single">
                                    <div className="testimonial-two__quote-icon">
                                        <span className="icon-quote-2"></span>
                                    </div>
                                    <div className="testimonial-two__client-info">
                                        <div className="testimonial-two__client-img">
                                            <img src="assets/images/testimonial/testimonial-two-client-1-3.jpg" alt=""/>
                                        </div>
                                        <div className="testimonial-two__client-content">
                                            <h4 className="testimonial-two__client-name">Alisa Brown</h4>
                                            <p className="testimonial-two__client-sub-title">Software Engineer</p>
                                        </div>
                                    </div>
                                    <p className="testimonial-two__text">Working with this company has been a
                                        game-changer for my the a business. Their expertise and innovative Their
                                        expertise and approach have helped us achieve remarkable</p>
                                </div>
                            </div>
                            {/*Testimonial Two Single End*/}
                            {/*Testimonial Two Single Start*/}
                            <div className="col-xl-6 col-lg-6">
                                <div className="testimonial-two__single">
                                    <div className="testimonial-two__quote-icon">
                                        <span className="icon-quote-2"></span>
                                    </div>
                                    <div className="testimonial-two__client-info">
                                        <div className="testimonial-two__client-img">
                                            <img src="assets/images/testimonial/testimonial-two-client-1-4.jpg" alt=""/>
                                        </div>
                                        <div className="testimonial-two__client-content">
                                            <h4 className="testimonial-two__client-name">Mike Hardson</h4>
                                            <p className="testimonial-two__client-sub-title">Software Engineer</p>
                                        </div>
                                    </div>
                                    <p className="testimonial-two__text">Working with this company has been a
                                        game-changer for my the a business. Their expertise and innovative Their
                                        expertise and approach have helped us achieve remarkable</p>
                                </div>
                            </div>
                            {/*Testimonial Two Single End*/}
                            {/*Testimonial Two Single Start*/}
                            <div className="col-xl-6 col-lg-6">
                                <div className="testimonial-two__single">
                                    <div className="testimonial-two__quote-icon">
                                        <span className="icon-quote-2"></span>
                                    </div>
                                    <div className="testimonial-two__client-info">
                                        <div className="testimonial-two__client-img">
                                            <img src="assets/images/testimonial/testimonial-two-client-1-5.jpg" alt=""/>
                                        </div>
                                        <div className="testimonial-two__client-content">
                                            <h4 className="testimonial-two__client-name">Mike Hussie</h4>
                                            <p className="testimonial-two__client-sub-title">Software Engineer</p>
                                        </div>
                                    </div>
                                    <p className="testimonial-two__text">Working with this company has been a
                                        game-changer for my the a business. Their expertise and innovative Their
                                        expertise and approach have helped us achieve remarkable</p>
                                </div>
                            </div>
                            {/*Testimonial Two Single End*/}
                            {/*Testimonial Two Single Start*/}
                            <div className="col-xl-6 col-lg-6">
                                <div className="testimonial-two__single">
                                    <div className="testimonial-two__quote-icon">
                                        <span className="icon-quote-2"></span>
                                    </div>
                                    <div className="testimonial-two__client-info">
                                        <div className="testimonial-two__client-img">
                                            <img src="assets/images/testimonial/testimonial-two-client-1-6.jpg" alt=""/>
                                        </div>
                                        <div className="testimonial-two__client-content">
                                            <h4 className="testimonial-two__client-name">Marco Jaonson</h4>
                                            <p className="testimonial-two__client-sub-title">Software Engineer</p>
                                        </div>
                                    </div>
                                    <p className="testimonial-two__text">Working with this company has been a
                                        game-changer for my the a business. Their expertise and innovative Their
                                        expertise and approach have helped us achieve remarkable</p>
                                </div>
                            </div>
                            {/*Testimonial Two Single End*/}
                        </div>
                    </div>
                </section>
                {/*Testimonial Page End*/}

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
                                src="assets/images/resources/cta-one-img.png"
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