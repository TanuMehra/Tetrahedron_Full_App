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
        <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Blog Details">
        {/*Blog Details Start*/}
        <section className="blog-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8">
                        <div className="blog-details__left">
                            <div className="blog-details__img-box">
                                <div className="blog-details__img">
                                    <img src="assets/images/blog/Banner1.png" alt=""/>
                                </div>
                                <ul className="blog-details__meta list-unstyled">
                                    <li>
                                        <Link href="#"><span className="icon-calender"></span>October 19, 2022</Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="icon-user"></span>By admin</Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="icon-folder"></span>Category</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="blog-details__content">
                                <h3 className="blog-details__title-1">A Beginner's Guide to Running a Successful
                                    Agricultural</h3>
                                <p className="blog-details__text-1">It is a long established fact that a reader will be
                                    distracted by the readable content of a page when looking at its layout. The point
                                    of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                                    as opposed to using 'Content here, content here.It is a long established </p>
                                <h3 className="blog-details__title-2">For a strong economy, develop agriculture</h3>
                                <p className="blog-details__text-2">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                    since the 1500s, when an unknown printer took a galley</p>
                                <div className="blog-details__quote-box">
                                    <p className="blog-details__quote-text">It is a long established fact that a reader will
                                        be distracted by the readable content of a page when looking at its layout. The
                                        point of using Loreg at its layout. The point of using Lorem Ipsum is that it
                                        has a more-or-less normal distribution of letters</p>
                                    <span className="blog-details__quote-sub-title">Mark wood</span>
                                    <div className="blog-details__quote">
                                        <img src="assets/images/icon/banner2.png" alt=""/>
                                    </div>
                                </div>
                                <p className="blog-details__text-3">There are many variations of passages of Lorem Ipsum
                                    available, but the majority have suffered alteration in some form, by injected
                                    humour, or randomised words which don't look even slightly believable. If you are
                                    going to use a passage of Lorem Ipsum, you need</p>
                                <div className="blog-details__img-and-content">
                                    <div className="blog-details__text-img">
                                        <img src="assets/images/blog/banner3.jpg" alt=""/>
                                    </div>
                                    <div className="blog-details__text-box">
                                        <p className="blog-details__img-text">Contrary to popular belief, Lorem Ipsum is not
                                            simply random text. It has roots in a piece of classNameical Latin literature
                                            from
                                            45 BC, making it over 2000 years old. Richard McClintock, a aLatin professor
                                            at
                                            Hampden-</p>
                                        <div className="blog-details__img-btn-box">
                                            <Link href="#" className="blog-details__img-btn thm-btn">Read more<span
                                                    className="icon-dabble-arrow-right"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-details__bottom">
                                <p className="blog-details__tags">
                                    <span>Tags:</span>
                                    <Link href="#">Harvest</Link>
                                    <Link href="#">Agronegocio</Link>
                                    <Link href="#">Agro</Link>
                                </p>
                                <div className="blog-details__social-list">
                                    <Link href="#"><i className="icon-facebook"></i></Link>
                                    <Link href="#"><i className="icon-instagram"></i></Link>
                                    <Link href="#"><i className="icon-twitter"></i></Link>
                                    <Link href="#"><i className="icon-link-in"></i></Link>
                                </div>
                            </div>
                            <div className="blog-details__pagenation-box">
                                <ul className="list-unstyled blog-details__pagenation">
                                    <li>
                                        <div className="icon">
                                            <Link href="#"><span className="icon-arrow-left"></span></Link>
                                        </div>
                                        <p>We have Solutions<br/> for Agri Need</p>
                                    </li>
                                    <li>
                                        <p>MasterCraft<br/> Construction</p>
                                        <div className="icon">
                                            <Link href="#"><span className="icon-arrow-right"></span></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="comment-one">
                                <h3 className="comment-one__title">3 Comment</h3>
                                <div className="comment-one__single">
                                    <div className="comment-one__image">
                                        <img src="assets/images/blog/banner4.jpg" alt=""/>
                                    </div>
                                    <div className="comment-one__content">
                                        <h3>Stanio lainto<span>December 16, 2023</span></h3>
                                        <div className="comment-one__social">
                                            <Link href="#"><span className="icon-facebook"></span></Link>
                                            <Link href="#"><span className="icon-twitter"></span></Link>
                                            <Link href="#"><span className="icon-instagram"></span></Link>
                                        </div>
                                        <p>Ished fact that a reader will be distrol acted bioii the.ished fact that a
                                            reader will be distrol acted laoreet Aliquam fact that a reader will be
                                            distrol acted Aliquam eros justo.</p>
                                        <div className="comment-one__btn-box">
                                            <Link href="news-details" className="comment-one__btn">reply</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-one__single comment-one__single-2">
                                    <div className="comment-one__image">
                                        <img src="assets/images/blog/banner5.jpg" alt=""/>
                                    </div>
                                    <div className="comment-one__content">
                                        <h3>Court Henry<span>December 16, 2023</span></h3>
                                        <div className="comment-one__social">
                                            <Link href="#"><span className="icon-facebook"></span></Link>
                                            <Link href="#"><span className="icon-twitter"></span></Link>
                                            <Link href="#"><span className="icon-instagram"></span></Link>
                                        </div>
                                        <p>Ished fact that a reader will be distrol acted bioii the.ished fact that a
                                            reader will be distrol acted laoreet Aliquam fact that a reader will be
                                            distrol acted Aliquam eros justo.</p>
                                        <div className="comment-one__btn-box">
                                            <Link href="news-details" className="comment-one__btn">reply</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-details__icon-and-content-box">
                                <div className="blog-details__content-icon">
                                    <span className="icon-settings"></span>
                                </div>
                                <div className="blog-details__content-box">
                                    <h3>Transforming Ideas into Reality</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but th majority
                                        have suffered alteration in some form, by injected humour, or randomised words a
                                        which one of the most beatuiful design</p>
                                </div>
                            </div>
                            <div className="comment-form">
                                <form id="contact-from-one-box" name="contact_form"
                                    className="default-form1 comment-form__form">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="text" name="username" placeholder="Your Name" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="email" name="email" placeholder="Your Email" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="text" name="phone" placeholder="Phone Number" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <div className="select-box">
                                                    <select className="selectmenu wide">
                                                        <option>Choose a Option</option>
                                                        <option>Elite Builders</option>
                                                        <option>MasterCraft Construction</option>
                                                        <option>BuildTech Solutions</option>
                                                        <option>Constructive Innovations</option>
                                                        <option>Prestige Construction</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="comment-form__input-box text-message-box">
                                                <textarea name="message" placeholder="Message here.."></textarea>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="comment-form__btn-box">
                                                <button type="submit" className="thm-btn comment-form__btn">Read more<span
                                                        className="icon-dabble-arrow-right"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="sidebar">
                            <div className="sidebar__single sidebar__search">
                                <h3 className="sidebar__title">Search</h3>
                                <form action="#" className="sidebar__search-form">
                                    <input type="search" placeholder="Search..."/>
                                    <button type="submit"><i className="icon-search"></i></button>
                                </form>
                            </div>
                            <div className="sidebar__single sidebar__post">
                                <h3 className="sidebar__title">Recent Post</h3>
                                <ul className="sidebar__post-list list-unstyled">
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/banner6.png" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h3>
                                                <Link href="blog-details">Building Your Dreams Our the Priority</Link>
                                            </h3>
                                            <p className="sidebar__post-date"><i className="icon-calender-2"></i>20
                                                Aug,2022</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/banner7.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h3>
                                                <Link href="blog-details">Excellence in Construction the Every
                                                    Project</Link>
                                            </h3>
                                            <p className="sidebar__post-date"><i className="icon-calender-2"></i>20
                                                Aug,2022</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/banner8.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h3>
                                                <Link href="blog-details">Crafting Structures that Stand the Test of
                                                    Time</Link>
                                            </h3>
                                            <p className="sidebar__post-date"><i className="icon-calender-2"></i>20
                                                Aug,2022</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar__single sidebar__category">
                                <h3 className="sidebar__title">Category</h3>
                                <ul className="sidebar__category-list list-unstyled">
                                    <li>
                                        <Link href="#"><span className="icon-folder"></span>Elite Builders</Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="icon-folder"></span>MasterCraft Construction</Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="icon-folder"></span>BuildTech Solutions</Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="icon-folder"></span>Constructive Innovations</Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="icon-folder"></span>Prestige Construction</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar__single sidebar__tags">
                                <h3 className="sidebar__title">Tags</h3>
                                <div className="sidebar__tags-list">
                                    <Link href="#">Renovate</Link>
                                    <Link href="#">ConstructoPro</Link>
                                    <Link href="#">Harvest</Link>
                                    <Link href="#">PrimeBuild</Link>
                                    <Link href="#">BuildWise</Link>
                                    <Link href="#">Craftsmen</Link>
                                    <Link href="#">Builders</Link>
                                    <Link href="#">Construction</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Blog Details End*/}

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

            <ContactFormModal
              open={isModalOpen}
              onClose={closeModal}
              buttonText={modalButtonText}
            />
            </Layout>
        </>
    )
}