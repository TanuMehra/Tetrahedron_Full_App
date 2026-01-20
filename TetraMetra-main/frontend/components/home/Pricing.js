import Link from "next/link"

export default function Pricing() {
    return (
        <>

        {/* Pricing Two Start */}
        <section className="pricing-one pricing-two">
            <div className="pricing-two__shape-1 float-bob-x">
                <img src="assets/images/shapes/pricing-two-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4">
                        <div className="pricing-one__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Our Prices plane</span>
                                </div>
                                <h2 className="section-title__title">Transform Ideas into Reality</h2>
                            </div>
                            <p className="pricing-one__text">Construction is the process of building or creating structures
                                such as buildings bridges roads and a dams It involves various activities </p>
                            <div className="pricing-one__call-box">
                                <div className="pricing-one__call-icon">
                                    <span className="icon-call"></span>
                                </div>
                                <div className="pricing-one__call-content">
                                    <span>Need help?</span>
                                    <p><Link href="tel:8984189814">+91-8984189814</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Pricing One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="100ms">
                        <div className="pricing-one__single">
                            <div className="pricing-one__tag">
                                <span>POPULAR</span>
                            </div>
                            <span className="pricing-one__title">Consult</span>
                            <p className="pricing-one__price">$29<span>/Day</span></p>
                            <ul className="pricing-one__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-check"></span>
                                    </div>
                                    <p>Mistakes To Avoid</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check"></span>
                                    </div>
                                    <p>Your Startup</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check"></span>
                                    </div>
                                    <p>Knew About Fonts</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check"></span>
                                    </div>
                                    <p>Winning Metric for Your Startup</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check"></span>
                                    </div>
                                    <p>Your Startup</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check"></span>
                                    </div>
                                    <p>Knew About Fonts</p>
                                </li>
                            </ul>
                            <div className="pricing-one__btn-box">
                                <Link href="pricing" className="pricing-one__btn thm-btn">Get Now<span
                                        className="icon-dabble-arrow-right"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*Pricing One Single End*/}
                    {/*Pricing One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="pricing-one__single">
                            <div className="pricing-one__tag">
                                <span>POPULAR</span>
                            </div>
                            <span className="pricing-one__title">Perfect</span>
                            <p className="pricing-one__price">$39<span>/Day</span></p>
                            <ul className="pricing-one__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-check"></span>
                                    </div>
                                    <p>Mistakes To Avoid</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check"></span>
                                    </div>
                                    <p>Your Startup</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check"></span>
                                    </div>
                                    <p>Knew About Fonts</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check"></span>
                                    </div>
                                    <p>Winning Metric for Your Startup</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check"></span>
                                    </div>
                                    <p>Your Startup</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-check"></span>
                                    </div>
                                    <p>Knew About Fonts</p>
                                </li>
                            </ul>
                            <div className="pricing-one__btn-box">
                                <Link href="pricing" className="pricing-one__btn thm-btn">Get Now<span
                                        className="icon-dabble-arrow-right"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*Pricing One Single End*/}
                </div>
            </div>
        </section>
        {/* Pricing Two End */}
            

        </>
    )
}
