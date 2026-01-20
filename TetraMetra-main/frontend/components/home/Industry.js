'use client'
import Link from "next/link"


export default function Services2() {
    return (
        <>

        {/* Services Four Start */}
        <section className="services-four">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Best Service</span>
                    </div>
                    <h2 className="section-title__title">Building Dreams Brick <br/> by Strenth
                    </h2>
                </div>
                <div className="row">
                    {/* Services Four Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
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
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
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
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="600ms">
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
                </div>
            </div>
        </section>
        {/* Services Four End */}

        </>
    )
}
