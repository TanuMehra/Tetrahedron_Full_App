'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import ContactFormModal from "@/components/ContactFormModal"


export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalButtonText, setModalButtonText] = useState("")

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

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
            <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Faq">
                {/*Faq Page Start*/}
                <section className="faq-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="faq-page__left">
                                    <div className="faq-one__right">
                                        <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                            <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                                <div className="accrodion-title">
                                                    <h4>What is construction?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                            cras
                                                            sed
                                                            eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                            sollicitudin dignissim habitant</p>
                                                    </div>{/* /.inner */}
                                                </div>
                                            </div>
                                            <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                                <div className="accrodion-title">
                                                    <h4>How long does project typically take?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                            cras
                                                            sed
                                                            eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                            sollicitudin dignissim habitant</p>
                                                    </div>{/* /.inner */}
                                                </div>
                                            </div>
                                            <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                                <div className="accrodion-title">
                                                    <h4>What different of construction projects?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                            cras
                                                            sed
                                                            eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                            sollicitudin dignissim habitant</p>
                                                    </div>{/* /.inner */}
                                                </div>
                                            </div>
                                            <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                                <div className="accrodion-title">
                                                    <h4>What is the role of a construction manager?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                            cras
                                                            sed
                                                            eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                            sollicitudin dignissim habitant</p>
                                                    </div>{/* /.inner */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="faq-page__right">
                                    <div className="faq-one__right">
                                        <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-2">
                                            <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                                <div className="accrodion-title">
                                                    <h4>What is construction?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                            cras
                                                            sed
                                                            eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                            sollicitudin dignissim habitant</p>
                                                    </div>{/* /.inner */}
                                                </div>
                                            </div>
                                            <div className={isActive.key == 6 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(6)}>
                                                <div className="accrodion-title">
                                                    <h4>How long does project typically take?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                            cras
                                                            sed
                                                            eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                            sollicitudin dignissim habitant</p>
                                                    </div>{/* /.inner */}
                                                </div>
                                            </div>
                                            <div className={isActive.key == 7 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(7)}>
                                                <div className="accrodion-title">
                                                    <h4>What different of construction projects?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                            cras
                                                            sed
                                                            eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                            sollicitudin dignissim habitant</p>
                                                    </div>{/* /.inner */}
                                                </div>
                                            </div>
                                            <div className={isActive.key == 8 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(8)}>
                                                <div className="accrodion-title">
                                                    <h4>What is the role of a construction manager?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                            cras
                                                            sed
                                                            eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                            sollicitudin dignissim habitant</p>
                                                    </div>{/* /.inner */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Faq Page End*/}

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
                                src="assets/images/services/business2.jpg"
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
            {isModalOpen && (
                <ContactFormModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    buttonText={modalButtonText}
                />
            )}
        </>
    )
}