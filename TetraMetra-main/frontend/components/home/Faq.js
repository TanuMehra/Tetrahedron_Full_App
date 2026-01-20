'use client'
import { useState } from 'react'
 
export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
    
            {/* Faq Two Start */}
        <section className="faq-two">
            <div className="faq-two__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/faq-two-bg.jpg' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6"></div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-two__content-box wow fadeInRight" data-wow-delay="300ms">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">FAQ</span>
                                </div>
                                <h2 className="section-title__title">Frequently Asked Questions</h2>
                            </div>
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                    <div className="accrodion-title">
                                        <h4>How does this service work?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Dictum ultrices porttitor amet nec sollicitudin mi molestie adipiscing
                                                netus. Lorem at ac ut morbi ullamcorper molestie lacus. Euismod design
                                                by man</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                    <div className="accrodion-title">
                                        <h4>How can I contact you?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Dictum ultrices porttitor amet nec sollicitudin mi molestie adipiscing
                                                netus. Lorem at ac ut morbi ullamcorper molestie lacus. Euismod design
                                                by man</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                    <div className="accrodion-title">
                                        <h4>What is the purpose of this service?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Dictum ultrices porttitor amet nec sollicitudin mi molestie adipiscing
                                                netus. Lorem at ac ut morbi ullamcorper molestie lacus. Euismod design
                                                by man</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Faq Two End */}
        </>
    )
}
