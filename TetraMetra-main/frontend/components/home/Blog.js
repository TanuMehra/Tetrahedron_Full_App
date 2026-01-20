'use client'
import Link from "next/link"


export default function Blog() {
    return (
        <>
    
        {/*Blog Two Start*/}
        <section className="blog-two">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Our LATEST BLOG AND NEWS</span>
                    </div>
                    <h2 className="section-title__title">Building Trust Structures<br/> that Stand the Test</h2>
                </div>
                <div className="row">
                    {/*Blog Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="blog-two__single">
                            <div className="blog-two__img-box">
                                <div className="blog-two__img">
                                    <img src="assets/images/blog/blog-2-1.jpg" alt=""/>
                                </div>
                                <div className="blog-two__date">
                                    <p>09
                                        <br/>Mar</p>
                                </div>
                            </div>
                            <div className="blog-two__content">
                                <ul className="blog-two__meta list-unstyled">
                                    <li>
                                        <Link href="#"><span className="icon-user"></span>By admin</Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="icon-comments-2"></span>Comments (05)</Link>
                                    </li>
                                </ul>
                                <h3 className="blog-two__title"><Link href="blog-details">Construction is the process
                                        Construction, Every</Link></h3>
                                <p className="blog-two__text">Business consulting involves providing man expert advice and
                                    guidance Infora
                                    Services information</p>
                                <div className="blog-two__read-more">
                                    <Link href="blog-details">Read more<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Two Single End*/}
                    {/*Blog Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="blog-two__single">
                            <div className="blog-two__img-box">
                                <div className="blog-two__img">
                                    <img src="assets/images/blog/blog-2-2.jpg" alt=""/>
                                </div>
                                <div className="blog-two__date">
                                    <p>09
                                        <br/>Mar</p>
                                </div>
                            </div>
                            <div className="blog-two__content">
                                <ul className="blog-two__meta list-unstyled">
                                    <li>
                                        <Link href="#"><span className="icon-user"></span>By admin</Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="icon-comments-2"></span>Comments (05)</Link>
                                    </li>
                                </ul>
                                <h3 className="blog-two__title"><Link href="blog-details">The process of building the a
                                        MasterCraft Construction</Link></h3>
                                <p className="blog-two__text">Business consulting involves providing man expert advice and
                                    guidance Infora
                                    Services information</p>
                                <div className="blog-two__read-more">
                                    <Link href="blog-details">Read more<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Two Single End*/}
                    {/*Blog Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="blog-two__single">
                            <div className="blog-two__img-box">
                                <div className="blog-two__img">
                                    <img src="assets/images/blog/blog-2-3.jpg" alt=""/>
                                </div>
                                <div className="blog-two__date">
                                    <p>09
                                        <br/>Mar</p>
                                </div>
                            </div>
                            <div className="blog-two__content">
                                <ul className="blog-two__meta list-unstyled">
                                    <li>
                                        <Link href="#"><span className="icon-user"></span>By admin</Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="icon-comments-2"></span>Comments (05)</Link>
                                    </li>
                                </ul>
                                <h3 className="blog-two__title"><Link href="blog-details">It involves various activities
                                        BuildTech Solutions</Link></h3>
                                <p className="blog-two__text">Business consulting involves providing man expert advice and
                                    guidance Infora
                                    Services information</p>
                                <div className="blog-two__read-more">
                                    <Link href="blog-details">Read more<span
                                            className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Two Single End*/}
                </div>
            </div>
        </section>
        {/*Blog Two End*/}
        </>
    )
}
