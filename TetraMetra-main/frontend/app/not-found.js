"use client";
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Error404() {
    return (
        <>
        <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="404 Error">
            
                {/*Error Page Start*/}
                <section className="error-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="error-page__inner">
                                    <div className="error-page__title-box">
                                        <h2 className="error-page__title">404</h2>
                                    </div>
                                    <h3 className="error-page__tagline">Sorry we can't find that page!</h3>
                                    <p className="error-page__text">The page you are looking for was never existed.</p>
                                    <form className="error-page__form">
                                        <div className="error-page__form-input">
                                            <input type="search" placeholder="Search here"/>
                                            <button type="submit"><i className="icon-search"></i></button>
                                        </div>
                                    </form>
                                    <Link href="/" className="thm-btn error-page__btn">Back to home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Error Page End*/}

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
                                type="submit"
                                className="cta-one__btn thm-btn"
                                style={{ width: "60%" }}
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

        </>
    )
}
