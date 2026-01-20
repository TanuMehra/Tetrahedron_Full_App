'use client'
import Link from "next/link"


export default function Team() {
    return (
        <>
    
            {/* Team Two Start */}
        <section className="team-two">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">active employes</span>
                    </div>
                    <h2 className="section-title__title">Excellence in Construction <br/> Every Project</h2>
                </div>
                <div className="row">
                    {/* Team Two Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="team-two__single">
                            <div className="team-two__img">
                                <img src="assets/images/team/team-2-1.jpg" alt=""/>
                            </div>
                            <div className="team-two__content">
                                <div className="team-two__social">
                                    <Link href="#"><span className="icon-facebook"></span></Link>
                                    <Link href="#"><span className="icon-twitter"></span></Link>
                                    <Link href="#"><span className="icon-link-in"></span></Link>
                                    <Link href="#"><span className="icon-pinterest"></span></Link>
                                </div>
                                <div className="team-two__info-box">
                                    <h3 className="team-two__name"><Link href="team">Savannah Nguyen</Link></h3>
                                    <p className="team-two__sub-title">Software Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Team Two Single End */}
                    {/* Team Two Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="team-two__single">
                            <div className="team-two__img">
                                <img src="assets/images/team/team-2-2.jpg" alt=""/>
                            </div>
                            <div className="team-two__content">
                                <div className="team-two__social">
                                    <Link href="#"><span className="icon-facebook"></span></Link>
                                    <Link href="#"><span className="icon-twitter"></span></Link>
                                    <Link href="#"><span className="icon-link-in"></span></Link>
                                    <Link href="#"><span className="icon-pinterest"></span></Link>
                                </div>
                                <div className="team-two__info-box">
                                    <h3 className="team-two__name"><Link href="team">Robert Fox</Link></h3>
                                    <p className="team-two__sub-title">UI/UX Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Team Two Single End */}
                    {/* Team Two Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="600ms">
                        <div className="team-two__single">
                            <div className="team-two__img">
                                <img src="assets/images/team/team-2-3.jpg" alt=""/>
                            </div>
                            <div className="team-two__content">
                                <div className="team-two__social">
                                    <Link href="#"><span className="icon-facebook"></span></Link>
                                    <Link href="#"><span className="icon-twitter"></span></Link>
                                    <Link href="#"><span className="icon-link-in"></span></Link>
                                    <Link href="#"><span className="icon-pinterest"></span></Link>
                                </div>
                                <div className="team-two__info-box">
                                    <h3 className="team-two__name"><Link href="team">Floyd Miles</Link></h3>
                                    <p className="team-two__sub-title">Project Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Team Two Single End */}
                </div>
            </div>
        </section>
        {/* Team Two End */}
        </>
    )
}
