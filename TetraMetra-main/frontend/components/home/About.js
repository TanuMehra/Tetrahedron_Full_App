'use client'

import React from 'react';

export default function About() {
    const containerRef = React.useRef(null);
    const textColRef = React.useRef(null);
    const imgColRef = React.useRef(null);
    const outerRef = React.useRef(null);

    React.useEffect(() => {
        const setFlexLayout = () => {
            if (outerRef.current) {
                outerRef.current.style.setProperty('max-width', '1280px', 'important'); // 7xl
                outerRef.current.style.setProperty('margin', '0 auto', 'important');
                outerRef.current.style.setProperty('padding-left', '20px', 'important');
                outerRef.current.style.setProperty('padding-right', '20px', 'important');
            }

            if (containerRef.current && textColRef.current && imgColRef.current) {
                if (window.innerWidth >= 1024) {
                    containerRef.current.style.setProperty('display', 'flex', 'important');
                    containerRef.current.style.setProperty('flex-direction', 'row', 'important');
                    containerRef.current.style.setProperty('justify-content', 'space-between', 'important');
                    containerRef.current.style.setProperty('gap', '20px', 'important');

                    textColRef.current.style.setProperty('order', '1', 'important');
                    textColRef.current.style.setProperty('width', '50%', 'important');
                    textColRef.current.style.setProperty('padding', '20px', 'important');

                    imgColRef.current.style.setProperty('order', '2', 'important');
                    imgColRef.current.style.setProperty('width', '50%', 'important');
                    imgColRef.current.style.setProperty('display', 'flex', 'important');
                    imgColRef.current.style.setProperty('align-items', 'center', 'important');
                    imgColRef.current.style.setProperty('justify-content', 'center', 'important');
                } else {
                    containerRef.current.style.setProperty('display', 'flex', 'important');
                    containerRef.current.style.setProperty('flex-direction', 'column', 'important');
                    containerRef.current.style.setProperty('gap', '15px', 'important');

                    textColRef.current.style.setProperty('width', '100%', 'important');
                    textColRef.current.style.setProperty('padding', '15px', 'important');

                    imgColRef.current.style.setProperty('width', '100%', 'important');
                    imgColRef.current.style.setProperty('display', 'block', 'important');
                }
            }
        };
        setFlexLayout();
        window.addEventListener('resize', setFlexLayout);
        return () => window.removeEventListener('resize', setFlexLayout);
    }, []);

    return (
        <section
            style={{
                fontFamily: 'Poppins, sans-serif',
                paddingTop: '40px',
                paddingBottom: '40px',
                width: '100%',
                backgroundColor: '#fff'
            }}
        >
            <div ref={outerRef}>
                <div ref={containerRef}>
                    {/* Text Column */}
                    <div ref={textColRef} style={{
                        backgroundColor: '#fff',
                        borderRadius: '10px',
                        // boxShadow: '0px 20px 20px rgba(0,0,0,0.3)',
                        minHeight: '450px'
                    }}>
                        <div>
                            <span style={{
                                color: '#ff5c00',
                                fontWeight: '600',
                                display: 'block',
                                marginBottom: '10px'
                            }}>
                                ABOUT US
                            </span>
                            <h1 style={{
                                color: '#0a1c4c',
                                fontWeight: '700',
                                fontSize: '28px',
                                marginTop: '0px',
                                marginBottom: '20px'
                            }}>
                                Tetrahedron Manufacturing Services Pvt Ltd
                            </h1>
                            <p style={{
                                color: '#333',
                                textAlign: 'justify',
                                marginBottom: '15px',
                                lineHeight: '1.6'
                            }}>
                                Tetrahedron provides manufacturing optimization consulting services. It is one of India's
                                fastest-growing end-to-end solution providers to 280+ manufacturing companies across 20
                                different industry segments. TMS supports its customers in improving profitability and
                                sustainability through 3 distinct service verticals.
                            </p>
                            <p style={{
                                color: '#333',
                                textAlign: 'justify',
                                lineHeight: '1.6'
                            }}>
                                Manufacturing Management Consulting, Automation & Industry 4.0, and Training & Skill
                                Development — by designing, developing, and implementing focused solutions.
                            </p>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div ref={imgColRef} style={{
                        borderRadius: '10px',
                        // boxShadow: '0px 20px 20px rgba(0,0,0,0.3)',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            minHeight: '300px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <img
                                src="assets/images/resources/about-two-img3.jpg"
                                alt="Tetrahedron Manufacturing Services"
                                style={{
                                    borderRadius: '20px',
                                    width: '80%',
                                    height: 'auto',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
