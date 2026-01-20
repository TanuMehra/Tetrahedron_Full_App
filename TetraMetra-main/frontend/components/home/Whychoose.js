'use client'
import Link from "next/link"


export default function Whychoose() {
    return (
        <>
    
            {/* Why Choose Two Start */}
        <section className="why-choose-two">
            <div className="why-choose-two__shape-1 float-bob-x">
                <img src="assets/images/shapes/why-choose-two-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="why-choose-two__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Why Choose Us</span>
                                </div>
                                <h2 className="section-title__title">Creating Spaces for a the Better Tomorrow
                                </h2>
                            </div>
                            <p className="why-choose-two__text">Lorem ipsum dolor sit amet consectetur. Amet lectus mi
                                ultricies dictum facilisis sem. Imperdiet massa turpis sit proin metus volutpat.</p>
                            <ul className="list-unstyled why-choose-two__points">
                                <li>
                                    <div className="why-choose-two__points-icon">
                                        <span className="icon-engineer-2"></span>
                                    </div>
                                    <div className="why-choose-two__points-content">
                                        <h5 className="why-choose-two__points-title"><Link href="about">BuildWise</Link></h5>
                                        <p className="why-choose-two__points-text">Customer satisfaction is crucial for
                                            amohlodi <br/> business as it leads</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="why-choose-two__points-icon">
                                        <span className="icon-buildings"></span>
                                    </div>
                                    <div className="why-choose-two__points-content">
                                        <h5 className="why-choose-two__points-title"><Link href="about">Buildings</Link></h5>
                                        <p className="why-choose-two__points-text">Customer satisfaction is crucial for
                                            amohlodi <br/> business as it leads</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="why-choose-two__right">
                            <div className="why-choose-two__img wow slideInRight" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <img src="assets/images/resources/why-choose-two-img-1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Why Choose Two End */}
        </>
    )
}
