'use client'
import Link from "next/link"


export default function Success() {
    return (
        <>
    
        {/* Success One Start */}
        <section className="success-one">
            <div className="success-one__shape-1">
                <img src="assets/images/shapes/success-one-shape-1.png" alt=""/>
            </div>
            <div className="success-one__img-box">
                <div className="success-one__img">
                    <img src="assets/images/resources/success-one-img-1.jpg" alt=""/>
                </div>
                <div className="success-one__counter">
                    <ul className="list-unstyled success-one__counter-list">
                        <li>
                            <div className="success-one__counter-count count-box">
                                <h3>100</h3>
                                <span className="success-one__counter-percent">%</span>
                            </div>
                            <p className="success-one__counter-text">Success Rate</p>
                        </li>
                        <li>
                            <div className="success-one__counter-count count-box">
                                <h3>250</h3>
                                <span className="success-one__counter-percent">+</span>
                            </div>
                            <p className="success-one__counter-text">Happy Clients</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="success-one__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Best Services</span>
                                </div>
                                <h2 className="section-title__title">Create Innovative sustain
                                    Place in the.</h2>
                            </div>
                            <p className="success-one__text">Lorem ipsum dolor sit amet consectetur adipiscing elit sociis
                                tempus magna vel, duis tincidunt fusce aenean lacus integer velit phasellus imperdiet
                                the a senectus, vestibulum ridiculus es</p>
                            <ul className="list-unstyled success-one__points">
                                <li>
                                    <div className="success-one__points-icon">
                                        <span className="icon-constructo-pro"></span>
                                    </div>
                                    <p className="success-one__points-text"><Link href="about">Master Craft
                                            Construction</Link></p>
                                </li>
                                <li>
                                    <div className="success-one__points-icon">
                                        <span className="icon-proconstruct"></span>
                                    </div>
                                    <p className="success-one__points-text"><Link href="about">Quality Construction Co</Link>
                                    </p>
                                </li>
                            </ul>
                            <div className="success-one__btn-box">
                                <Link href="about" className="success-one__btn thm-btn">Read more<span
                                        className="icon-dabble-arrow-right"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Success One End */}
        </>
    )
}
