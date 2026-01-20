'use client'
import CounterUp from "@/components/elements/CounterUp"

export default function Counter() {
    return (
        <>
    
        {/* Counter Two Start */}
        <section className="counter-two">
            <div className="counter-two__bg-box">
                <div className="counter-two__bg"
                    style={{ backgroundImage: 'url(assets/images/backgrounds/counter-two-bg.png' }} ></div>
            </div>
            <div className="container">
                <div className="counter-two__top">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Best Roof rapairing</span>
                        </div>
                        <h2 className="section-title__title">Crafting Structures that a <br/> Stand the Test </h2>
                    </div>
                    <p className="counter-two__top-text">Dictum ultrices porttitor amet nec sollicit molestie adipiscing
                        netus. Lorem at ac ut morbi ullamcorper mol lacus. Euismod design by man loren ipsum</p>
                </div>
                <div className="counter-two__bottom">
                    <div className="row">
                        {/* Counter Two Single Start */}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="counter-two__single">
                                <div className="counter-two__icon">
                                    <span className="icon-settings"></span>
                                </div>
                                <div className="counter-two__count count-box">
                                <CounterUp end={200} />
                                    <span className="counter-two__plus">+</span>
                                </div>
                                <p className="counter-two__count-text">Team member</p>
                            </div>
                        </div>
                        {/* Counter Two Single End */}
                        {/* Counter Two Single Start */}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                            <div className="counter-two__single">
                                <div className="counter-two__icon">
                                    <span className="icon-paint"></span>
                                </div>
                                <div className="counter-two__count count-box">
                                <CounterUp end={20} />
                                    <span className="counter-two__plus">+</span>
                                </div>
                                <p className="counter-two__count-text">Team member</p>
                            </div>
                        </div>
                        {/* Counter Two Single End */}
                        {/* Counter Two Single Start */}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                            <div className="counter-two__single">
                                <div className="counter-two__icon">
                                    <span className="icon-mechanic-2"></span>
                                </div>
                                <div className="counter-two__count count-box">
                                <CounterUp end={10} />
                                    <span className="counter-two__plus">k+</span>
                                </div>
                                <p className="counter-two__count-text">Complete project</p>
                            </div>
                        </div>
                        {/* Counter Two Single End */}
                        {/* Counter Two Single Start */}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="900ms">
                            <div className="counter-two__single">
                                <div className="counter-two__icon">
                                    <span className="icon-analytics"></span>
                                </div>
                                <div className="counter-two__count count-box">
                                <CounterUp end={900} />
                                    <span className="counter-two__plus">+</span>
                                </div>
                                <p className="counter-two__count-text">Client review</p>
                            </div>
                        </div>
                        {/* Counter Two Single End */}
                    </div>
                </div>
            </div>
        </section>
        {/* Counter Two End */}
        </>
    )
}
