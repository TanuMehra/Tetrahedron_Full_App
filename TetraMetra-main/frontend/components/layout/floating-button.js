'use client';

import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const FloatingButton = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Show scroll to top button when user scrolls down
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // WhatsApp contact function
    const openWhatsApp = () => {
        const phoneNumber = '+91-8984189814';
        const message = 'Hello! I would like to know more about your services.';
        const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="floating-buttons">
            {/* WhatsApp Button */}
            <button
                className="floating-btn whatsapp-btn"
                onClick={openWhatsApp}
                title="Contact us on WhatsApp"
                aria-label="whatsapp"
            >
                <FaWhatsapp />
            </button>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    className="floating-btn scroll-top-btn"
                    onClick={scrollToTop}
                    title="Scroll to top"
                    aria-label="scroll-to-top"
                >
                    <FaArrowUp />
                </button>
            )}

            <style jsx>{`
                .floating-buttons {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    z-index: 1000;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .floating-btn {
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    color: white;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }

                .floating-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
                }

                .floating-btn:active {
                    transform: translateY(0);
                }

                .whatsapp-btn {
                    background-color: #25D366;
                }

                .whatsapp-btn:hover {
                    background-color: #128C7E;
                }

                .scroll-top-btn {
                    background-color: #1976d2;
                }

                .scroll-top-btn:hover {
                    background-color: #1565c0;
                }

                /* Animation for scroll to top button */
                .scroll-top-btn {
                    animation: fadeInUp 0.3s ease;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Responsive design */
                @media (max-width: 768px) {
                    .floating-buttons {
                        bottom: 15px;
                        right: 15px;
                    }
                    
                    .floating-btn {
                        width: 50px;
                        height: 50px;
                        font-size: 20px;
                    }
                }
            `}</style>
        </div>
    );
};

export default FloatingButton;