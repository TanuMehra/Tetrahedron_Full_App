
export default function Joinus() {
    return (
        <>
        {/* Join Us One Start */}
        <section className="join-us-one">
            <div className="container">
                <div className="join-us-one__inner wow fadeInUp" data-wow-delay="300ms">
                    <div className="join-us-one__shape-1">
                        <img src="assets/images/shapes/join-us-one-shape-1.png" alt=""/>
                    </div>
                    <div className="join-us-one__shape-2">
                        <img src="assets/images/shapes/join-us-one-shape-2.png" alt=""/>
                    </div>
                    <div className="join-us-one__title-box">
                        <h2 className="join-us-one__title">Building Your Dreams <br/> Our Priority</h2>
                    </div>
                    <div className="join-us-one__form-box">
                        <form className="join-us-one__contact-form mc-form">
                            <div className="join-us-one__contact-form-input-box">
                                <input type="email" placeholder="Enter Your Email" name="EMAIL"/>
                                <button type="submit" className="join-us-one__btn thm-btn">Subscribe Now</button>
                            </div>
                        </form>
                        <div className="mc-form__response"></div>
                    </div>
                </div>
            </div>
        </section>
        {/* Join Us One End */}
        </>
    )
}
