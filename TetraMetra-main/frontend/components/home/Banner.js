'use client'
import Link from "next/link"
import { useState, useRef } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    watchSlidesProgress: true,

    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

export default function Banner() {
    const [isReady, setIsReady] = useState(false);
    const titleRef1 = useRef(null);
    const titleRef2 = useRef(null);
    const titleRef3 = useRef(null);

    return (
        <>
            <style jsx global>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeInFromRight {
                    from {
                        opacity: 0;
                        transform: translateX(100px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .main-slider-two {
                    line-height: 1.6;
                }

                .main-slider-two__sub-title {
                    line-height: 1.4;
                }

                .main-slider-two__title {
                    line-height: 1.3;
                }

                .main-slider-two__call-number p {
                    line-height: 1.5;
                }

                .main-slider-two__call-number h5 {
                    line-height: 1.4;
                }

                .main-slider-two .main-slider-two__img,
                .main-slider-two .main-slider-two__sub-title,
                .main-slider-two .main-slider-two__title,
                .main-slider-two .main-slider-two__btn-and-call-box {
                    opacity: 0;
                }
                
                .main-slider-two.slider-ready .swiper-slide-active .main-slider-two__img {
                    animation: fadeInFromRight 1s ease-out 0.2s 1 forwards;
                }
                
                .main-slider-two.slider-ready .swiper-slide-active .main-slider-two__sub-title {
                    animation: fadeInUp 0.8s ease 0.5s 1 forwards;
                }
                .main-slider-two.slider-ready .swiper-slide-active .main-slider-two__title {
                    animation: fadeInUp 0.8s ease 0.7s 1 forwards;
                }
                .main-slider-two.slider-ready .swiper-slide-active .main-slider-two__btn-and-call-box {
                    animation: fadeInUp 0.8s ease 0.9s 1 forwards;
                }
            `}</style>

            <section className={`main-slider-two ${isReady ? 'slider-ready' : ''}`}>
                <Swiper
                    onSwiper={() => setIsReady(true)}
                    {...swiperOptions}
                    className="swiper-container thm-swiper__slider"
                >
                    <div className="swiper-wrapper">
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="main-slider-two__shape-1"></div>
                            <div className="main-slider-two__shape-2"></div>
                            <div className="main-slider-two__shape-3"></div>
                            <div className="main-slider-two__shape-4 float-bob-x">
                                <img src="assets/images/shapes/main-slider-two-shape-4.png" alt="" />
                            </div>
                            <div className="main-slider-two__shape-5 float-bob-y">
                                <img src="assets/images/shapes/main-slider-two-shape-5.png" alt="" />
                            </div>
                            <div className="main-slider-two__shape-6 img-bounce">
                                <img src="assets/images/shapes/main-slider-two-shape-6.png" alt="" />
                            </div>
                            <div className="main-slider-two__img">
                                <img src="assets/images/resources/main-slider-two-img-1-1.jpg" alt="" />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="main-slider-two__content">
                                            <p className="main-slider-two__sub-title">Management Consulting</p>
                                            <h2 
                                                className="main-slider-two__title"
                                                ref={el => {
                                                    if (el) {
                                                        el.style.setProperty("font-size", "40px", "important");
                                                    }
                                                }}
                                            >
                                                Find the right <br /> manufacturing <br /> consulting for <br /> your business needs
                                            </h2>
                                            <div className="main-slider-two__btn-and-call-box">
                                                <div className="main-slider-two__btn-box">
                                                    <Link href="contact" className="main-slider-two__btn thm-btn">Read
                                                        more<span className="icon-dabble-arrow-right"></span></Link>
                                                </div>
                                                <div className="main-slider-two__call">
                                                    <div className="main-slider-two__call-icon">
                                                        <span className="icon-call"></span>
                                                    </div>
                                                    <div className="main-slider-two__call-number">
                                                        <p>Need Help</p>
                                                        <h5><Link href="tel:8984189814">(+91) 8984189814</Link></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className="main-slider-two__shape-1"></div>
                            <div className="main-slider-two__shape-2"></div>
                            <div className="main-slider-two__shape-3"></div>
                            <div className="main-slider-two__shape-4 float-bob-x">
                                <img src="assets/images/shapes/main-slider-two-shape-4.png" alt="" />
                            </div>
                            <div className="main-slider-two__shape-5 float-bob-y">
                                <img src="assets/images/shapes/main-slider-two-shape-5.png" alt="" />
                            </div>
                            <div className="main-slider-two__shape-6 img-bounce">
                                <img src="assets/images/shapes/main-slider-two-shape-6.png" alt="" />
                            </div>
                            <div className="main-slider-two__img">
                                <img src="assets/images/resources/main-slider-two-img-1-2.jpg" alt="" />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="main-slider-two__content">
                                            <p className="main-slider-two__sub-title">AMR/AGV/RGV</p>
                                            <h2 
                                                className="main-slider-two__title"
                                                ref={el => {
                                                    if (el) {
                                                        el.style.setProperty("font-size", "40px", "important");
                                                    }
                                                }}
                                            >
                                                Your Trusted<br /> Partner for<br /> Advanced Mobile <br /> Robotics Solutions
                                            </h2>
                                            <div className="main-slider-two__btn-and-call-box">
                                                <div className="main-slider-two__btn-box">
                                                    <Link href="contact" className="main-slider-two__btn thm-btn">Read
                                                        more<span className="icon-dabble-arrow-right"></span></Link>
                                                </div>
                                                <div className="main-slider-two__call">
                                                    <div className="main-slider-two__call-icon">
                                                        <span className="icon-call"></span>
                                                    </div>
                                                    <div className="main-slider-two__call-number">
                                                        <p>Need Help</p>
                                                        <h5><Link href="tel:8984189814">(+91) 8984189814</Link></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Slide 3 */}
                        <SwiperSlide>
                            <div className="main-slider-two__shape-1"></div>
                            <div className="main-slider-two__shape-2"></div>
                            <div className="main-slider-two__shape-3"></div>
                            <div className="main-slider-two__shape-4 float-bob-x">
                                <img src="assets/images/shapes/main-slider-two-shape-4.png" alt="" />
                            </div>
                            <div className="main-slider-two__shape-5 float-bob-y">
                                <img src="assets/images/shapes/main-slider-two-shape-5.png" alt="" />
                            </div>
                            <div className="main-slider-two__shape-6 img-bounce">
                                <img src="assets/images/shapes/main-slider-two-shape-6.png" alt="" />
                            </div>
                            <div className="main-slider-two__img">
                                <img src="assets/images/resources/main-slider-two-img-1-3.jpg" alt="" />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="main-slider-two__content">
                                            <p className="main-slider-two__sub-title">Skill Training</p>
                                            <h2 className="main-slider-two__title" style={{fontSize:"40px !important"}}>Upskill Your<br /> Workforce  & <br />Accelerate Growth<br /> with Our Corporate <br />Training Programs
                                            </h2>
                                            <div className="main-slider-two__btn-and-call-box">
                                                <div className="main-slider-two__btn-box">
                                                    <Link href="contact" className="main-slider-two__btn thm-btn">Read
                                                        more<span className="icon-dabble-arrow-right"></span></Link>
                                                </div>
                                                <div className="main-slider-two__call">
                                                    <div className="main-slider-two__call-icon">
                                                        <span className="icon-call"></span>
                                                    </div>
                                                    <div className="main-slider-two__call-number">
                                                        <p>Need Help</p>
                                                        <h5><Link href="tel:8984189814">(+91) 8984189814</Link></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </section>
        </>
    )
}