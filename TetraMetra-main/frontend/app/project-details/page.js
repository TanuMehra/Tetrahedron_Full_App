'use client'
import Layout from "@/components/layout/Layout"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'

export default function Home() {

    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Project Details">      
        {/*Project Details Start*/}
        <section className="project-details">
            <div className="container">
                <div className="project-details__img">
                    <img src="assets/images/project/project-details-img-1.jpg" alt=""/>
                    <div className="project-details__information">
                        <div className="project-details__information-minus"></div>
                        <h3 className="project-details__information-title">Project Information</h3>
                        <p className="project-details__information-text">Aliquam eros justo, posuere loborti vive rra
                            laoreet matti ullamc orper.</p>
                        <ul className="project-details__information-list list-unstyled">
                            <li>
                                <p><span>Category:</span>Corporate, business</p>
                            </li>
                            <li>
                                <p><span>Customer:</span>Starline shimlasi</p>
                            </li>
                            <li>
                                <p><span>Start date: </span>21 January 2021</p>
                            </li>
                            <li>
                                <p><span>End date:</span>28 September 2023</p>
                            </li>
                            <li>
                                <p><span>Rating:</span><i className="icon-star"></i><i className="icon-star"></i><i
                                        className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project-details__content">
                    <h3 className="project-details__title">Building the Future Today</h3>
                    <p className="project-details__text">Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc
                        orper posu ere viverra the a<br/> .Aliquam eros justo, posuere lobortis non, vive rra laoreet
                        augue
                        mentum ullamcorper viverra <br/>Aliquam eros justo, posuere loborti vive rra laoreet mattirt</p>
                    <h3 className="project-details__title-2">Excellence in Construction Every Project</h3>
                    <p className="project-details__text-2">Aliquam eros justo, posuere loborti viverra laoreet matti
                        ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoree augue mattis
                        fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti
                        ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis,Aliquam eros justo, posuere
                        loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros.</p>
                    <p className="project-details__text-3">Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc
                        orper posu ere viverra .Aliquam eros justo, posuere lobo, vive rra laoreet augue mattis
                        fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet mat
                        ullamcorper posue viverra .Aliquam. </p>
                    <div className="project-details__bottom">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="project-details__bottom-left">
                                    <ul className="project-details__bottom-points list-unstyled">
                                        <li>
                                            <div className="project-details__points-bullet"></div>
                                            <p>We are starting some laoreet matti ullamcorper mat ulla posue viverra</p>
                                        </li>
                                        <li>
                                            <div className="project-details__points-bullet"></div>
                                            <p>Starting some laoreetmat ullamcorper posue viverra .Aliquam eros</p>
                                        </li>
                                        <li>
                                            <div className="project-details__points-bullet"></div>
                                            <p>Here is the biggest loborti vivea laoreet matti statemat ullamcorper
                                                posue </p>
                                        </li>
                                        <li>
                                            <div className="project-details__points-bullet"></div>
                                            <p>Aliquam eros justo, posuere loborti robart that </p>
                                        </li>
                                    </ul>
                                    <div className="project-details__client-box">
                                        <div className="project-details__client-img">
                                            <img src="assets/images/project/project-details-client-img.jpg" alt=""/>
                                        </div>
                                        <div className="project-details__client-content">
                                            <h3>Stanio lainto</h3>
                                            <p>justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra
                                                liquam eros justo, posuere lobortis non, viverra laoreet augue mattis.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="project-details__bottom-right">
                                    <div className="project-details__bottom-img">
                                        <img src="assets/images/project/project-details-bottom-img.jpg" alt=""/>
                                        <div className="project-details__video-link">
                                            <a onClick={() => setOpen(true)} className="video-popup">
                                                <div className="project-details__video-icon">
                                                    <span className="icon-play"></span>
                                                    <i className="ripple"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Project Details End*/}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />


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