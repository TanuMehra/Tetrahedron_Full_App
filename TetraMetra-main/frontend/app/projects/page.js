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
        <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Project">      
            {/*Project Page Start */}
            <section className="projects-page">
                <div className="container">
                    <div className="row">
                        {/*Project Three Single Start*/}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="project-three__single">
                                <div className="project-three__img-box">
                                    <div className="project-three__img">
                                        <img src="assets/images/project/project-3-1.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="project-three__content">
                                    <div className="project-three__title-box">
                                        <h3 className="project-three__title"><Link href="project-details">Build
                                                Construction</Link></h3>
                                        <p className="project-three__sub-title">Et purus duis sollicit</p>
                                    </div>
                                    <div className="project-three__plus">
                                        <Link href="assets/images/project/project-3-1.jpg" className="img-popup"><span
                                                className="icon-plus"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Project Three Single End*/}
                        {/*Project Three Single Start*/}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="project-three__single">
                                <div className="project-three__img-box">
                                    <div className="project-three__img">
                                        <img src="assets/images/project/project-3-2.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="project-three__content">
                                    <div className="project-three__title-box">
                                        <h3 className="project-three__title"><Link href="project-details">Precision
                                                Craftsmen</Link></h3>
                                        <p className="project-three__sub-title">Et purus duis sollicit</p>
                                    </div>
                                    <div className="project-three__plus">
                                        <Link href="assets/images/project/project-3-2.jpg" className="img-popup"><span
                                                className="icon-plus"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Project Three Single End*/}
                        {/*Project Three Single Start*/}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="project-three__single">
                                <div className="project-three__img-box">
                                    <div className="project-three__img">
                                        <img src="assets/images/project/project-3-3.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="project-three__content">
                                    <div className="project-three__title-box">
                                        <h3 className="project-three__title"><Link href="project-details">Hammer
                                                Construction</Link></h3>
                                        <p className="project-three__sub-title">Et purus duis sollicit</p>
                                    </div>
                                    <div className="project-three__plus">
                                        <Link href="assets/images/project/project-3-3.jpg" className="img-popup"><span
                                                className="icon-plus"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Project Three Single End*/}
                        {/*Project Three Single Start*/}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="project-three__single">
                                <div className="project-three__img-box">
                                    <div className="project-three__img">
                                        <img src="assets/images/project/project-3-4.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="project-three__content">
                                    <div className="project-three__title-box">
                                        <h3 className="project-three__title"><Link href="project-details">MasterCraft
                                                Construction</Link></h3>
                                        <p className="project-three__sub-title">Et purus duis sollicit</p>
                                    </div>
                                    <div className="project-three__plus">
                                        <Link href="assets/images/project/project-3-4.jpg" className="img-popup"><span
                                                className="icon-plus"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Project Three Single End*/}
                        {/*Project Three Single Start*/}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="project-three__single">
                                <div className="project-three__img-box">
                                    <div className="project-three__img">
                                        <img src="assets/images/project/project-3-5.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="project-three__content">
                                    <div className="project-three__title-box">
                                        <h3 className="project-three__title"><Link href="project-details">BuildTech
                                                Solutions</Link></h3>
                                        <p className="project-three__sub-title">Et purus duis sollicit</p>
                                    </div>
                                    <div className="project-three__plus">
                                        <Link href="assets/images/project/project-3-5.jpg" className="img-popup"><span
                                                className="icon-plus"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Project Three Single End*/}
                        {/*Project Three Single Start*/}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="project-three__single">
                                <div className="project-three__img-box">
                                    <div className="project-three__img">
                                        <img src="assets/images/project/project-3-6.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="project-three__content">
                                    <div className="project-three__title-box">
                                        <h3 className="project-three__title"><Link href="project-details">Renovate Right</Link>
                                        </h3>
                                        <p className="project-three__sub-title">Et purus duis sollicit</p>
                                    </div>
                                    <div className="project-three__plus">
                                        <Link href="assets/images/project/project-3-6.jpg" className="img-popup"><span
                                                className="icon-plus"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Project Three Single End*/}
                    </div>
                </div>
            </section>
            {/*Project Page End */}

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
                            src="assets/images/case-studies/CS2.jpg"
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
                            src="assets/images/case-studies/CS6.jpg"
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

            <ContactFormModal
                open={isModalOpen}
                onClose={closeModal}
                buttonText={modalButtonText}
            />

        </Layout>
        </>
    )
}