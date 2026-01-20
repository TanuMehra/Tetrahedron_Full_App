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
        <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Gallery">
        {/*Gallery Page Start*/}
        <section className="gallery-page">
            <div className="container">
                <div className="masonary-layout">
                    {/*Gallery Page Single Start*/}
                    <div className="gallery-item">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <div className="gallery-page__img-box">
                                    <img src="/images/Capture6.png" alt=""/>
                                </div>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="assets/images/gallery/gallery-page-1-1.jpg"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                    {/*Gallery Page Single Start*/}
                    <div className="gallery-item">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <div className="gallery-page__img-box">
                                    <img src="/images/Capture6.png" alt=""/>
                                </div>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="assets/images/gallery/gallery-page-1-2.jpg"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                    {/*Gallery Page Single Start*/}
                    <div className="gallery-item">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <div className="gallery-page__img-box">
                                    <img src="/images/Capture7.png" alt=""/>
                                </div>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="/images/Capture7.png"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                    {/*Gallery Page Single Start*/}
                    <div className="gallery-item">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <div className="gallery-page__img-box">
                                    <img src="/images/Six-SIgma-Training.png" alt=""/>
                                </div>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="/images/Six-SIgma-Training.png"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                    {/*Gallery Page Single Start*/}
                    <div className="gallery-item">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <div className="gallery-page__img-box">
                                    <img src="/images/training-pic-768x432.jpg" alt=""/>
                                </div>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="/images/Capture2-1_bb72b4a606c59c6564021df7232071e1.png"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                    {/*Gallery Page Single Start*/}
                    <div className="gallery-item">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <div className="gallery-page__img-box">
                                    <img src="/images/training-pic.jpg" alt=""/>
                                </div>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="/images/Capture2-1.png"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                    {/*Gallery Page Single Start*/}
                    <div className="gallery-item">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <div className="gallery-page__img-box">
                                    <img src="/images/Capture5.png" alt=""/>
                                </div>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="/images/Capture4.png"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                    {/*Gallery Page Single Start*/}
                    <div className="gallery-item">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <div className="gallery-page__img-box">
                                    <img src="/images/2-7.png" alt=""/>
                                </div>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="/images/Capture6.png"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                    {/*Gallery Page Single Start*/}
                    <div className="gallery-item">
                        <div className="gallery-page__single">
                            <div className="gallery-page__img">
                                <div className="gallery-page__img-box">
                                    <img src="/images/Capture7.png" alt=""/>
                                </div>
                                <div className="gallery-page__icon">
                                    <Link className="img-popup" href="/images/Six-SIgma-Training.png"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Gallery Page Single End*/}
                </div>
            </div>
        </section>
        {/*Gallery Page End*/}

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
            {/* Right Side: Image */}
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
                src="/images/Capture2-1_bb72b4a606c59c6564021df7232071e1.png"
                alt="Gallery"
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