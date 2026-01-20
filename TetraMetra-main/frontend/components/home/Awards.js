'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useState, useCallback, useEffect } from 'react';

// Awards data array
const awardsData = [
  { id: 1, image: 'assets/images/project/award1.jpg', alt: 'Award 1' },
  { id: 2, image: 'assets/images/project/award5.jpg', alt: 'Award 5' },
  { id: 3, image: 'assets/images/project/award2.jpg', alt: 'Award 2' },
  { id: 4, image: 'assets/images/project/award3.jpg', alt: 'Award 3' },
  { id: 5, image: 'assets/images/project/award4.jpg', alt: 'Award 4' },
  { id: 6, image: 'assets/images/project/award6.jpg', alt: 'Award 6' },
  { id: 7, image: 'assets/images/project/award7.jpg', alt: 'Award 7' },
  { id: 8, image: 'assets/images/project/award8.jpg', alt: 'Award 8' },
  { id: 9, image: 'assets/images/project/award9.jpg', alt: 'Award 9' },
  { id: 10, image: 'assets/images/project/award10.jpg', alt: 'Award 10' },
  { id: 11, image: 'assets/images/project/award11.jpg', alt: 'Award 11' },
  //   { id: 12, image: 'assets/images/project/award12.jpg', alt: 'Award 12' },
  { id: 13, image: 'assets/images/project/award13.jpg', alt: 'Award 13' },
  { id: 14, image: 'assets/images/project/award14.jpg', alt: 'Award 14' },
  { id: 15, image: 'assets/images/project/award15.jpg', alt: 'Award 15' },
];

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
};

// Common styles
const containerStyles = {
  width: "100%",
  maxWidth: "100%",
  margin: "0 auto"
};

const cardContainerStyles = {
  padding: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'transparent',
  position: 'relative',
  zIndex: '1',
};

const cardStyles = {
  background: '#fff',
  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06)',
  transition: 'transform .4s cubic-bezier(.4,2,.6,1), box-shadow .4s',
  width: '100%',
  maxWidth: '320px',
  cursor: 'pointer',
  position: 'relative',
  borderRadius: '12px',
  border: '4px solid orange',
  zIndex: '120',
};

const imageStyles = {
  width: '100%',
  display: 'block',
  transition: 'transform .4s',
  borderRadius: '8px'
};

const lightboxStyles = {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.9)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
            transition: 'background 0.3s ease',
  zoom: "125%"
};

const lightboxImageStyles = {
                height: '90vh',
                width: 'auto',
                maxWidth: '90vw',
                objectFit: 'contain',
                borderRadius: '16px',
                boxShadow: '0 0 40px 8px rgba(0,0,0,0.8)',
                background: '#fff',
                zIndex: 100000,
                cursor: 'default',
                display: 'block',
                margin: 'auto',
};

const closeButtonStyles = {
                position: 'absolute',
                top: '32px',
                right: '32px',
                zIndex: 100001,
                background: 'rgba(0,0,0,0.8)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                fontSize: '24px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 12px rgba(0,0,0,0.5)',
                transition: 'all 0.2s ease',
};

// Award Card Component
const AwardCard = ({ award, onImageClick }) => {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 0 24px 4px orange';
    e.currentTarget.style.zIndex = '9999';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 2px 12px 0 rgba(0,0,0,0.06)';
    e.currentTarget.style.zIndex = '120';
  };

  return (
    <div className="swiper-slide">
      <div style={cardContainerStyles}>
        <div 
          style={cardStyles}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => onImageClick(award.image)}
        >
          <img
            src={award.image}
            alt={award.alt}
            style={imageStyles}
          />
        </div>
      </div>
    </div>
  );
};

// Lightbox Component
const Lightbox = ({ imageSrc, onClose }) => {
  if (!imageSrc) return null;

  const handleCloseButtonHover = (e, isHover) => {
    if (isHover) {
                e.target.style.background = 'rgba(0,0,0,0.9)';
                e.target.style.transform = 'scale(1.05)';
    } else {
                e.target.style.background = 'rgba(0,0,0,0.8)';
                e.target.style.transform = 'scale(1)';
    }
  };

  return (
    <div onClick={onClose} style={lightboxStyles}>
      <img
        src={imageSrc}
        alt="Award Preview"
        onClick={e => e.stopPropagation()}
        style={lightboxImageStyles}
      />
      <button
        onClick={onClose}
        style={closeButtonStyles}
        onMouseEnter={(e) => handleCloseButtonHover(e, true)}
        onMouseLeave={(e) => handleCloseButtonHover(e, false)}
            aria-label="Close"
        >
            ×
        </button>
    </div>
  );
};

// Helper to render "Our Latest Awards" with each first letter in a span and capitalized
function RenderTagline() {
  const tagline = "Our Latest Awards";
  return (
    <>
      {tagline.split(' ').map((word, idx) => (
        <span key={idx} style={{ marginRight: idx !== tagline.split(' ').length - 1 ? 4 : 0 }}>
          <span style={{ textTransform: 'uppercase', fontWeight: 900 }}>{word[0]}</span>
          <span style={{ textTransform: 'lowercase' }}>{word.slice(1)}</span>
        </span>
      ))}
    </>
  );
}

export default function Awards() {
  const [lightboxImg, setLightboxImg] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop only
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(true);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const openLightbox = useCallback((src) => {
    if (isDesktop) setLightboxImg(src);
  }, [isDesktop]);

  const closeLightbox = useCallback(() => setLightboxImg(null), []);

  return (
    <>
      {/* Lightbox Overlay */}
      {lightboxImg && isDesktop && (
        <Lightbox imageSrc={lightboxImg} onClose={closeLightbox} />
      )}

      {/* Project Two Start */}
      <section className="project-two" style={containerStyles}>
        <div className="container" style={containerStyles}>

          {/* Centered Tagline Above Awards Section */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 10 }}>
            <div
              className="section-title__tagline"
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '30px',
                color: '#ff5e14',
                fontWeight: '700',
                marginBottom: '10px',
                textAlign: 'center',
                gap: '16px'
              }}
            >
             <div className="project-two__nav" 
                  style={{ 
                                display: 'flex',
                                gap: '20px',
                                width: 'auto',
                                margin: '0',
                                padding: '0',
                                pointerEvents: 'none'
                  }}
                >
              {/* Blue left arrow */}
              <div className="swiper-button-prev1 h1p" 
                    style={{ 
                                    pointerEvents: 'auto',
                                    cursor: 'pointer',
                                    zIndex: 10
                    }}
                  >
                    <i className="icon-arrow-left" style={{ fontSize: '24px' }}></i>
                                </div>
                                </div>
              {/* Tagline with first letters in span */}
              <span>
                <RenderTagline />
              </span>
              <div className="project-two__nav" 
                  style={{ 
                                display: 'flex',
                                gap: '20px',
                                width: 'auto',
                                margin: '0',
                                padding: '0',
                                pointerEvents: 'none'
                  }}
                >
              {/* Blue right arrow */}
              <div className="swiper-button-next1 h1n" 
                    style={{ 
                                    pointerEvents: 'auto',
                                    cursor: 'pointer',
                                    zIndex: 10
                    }}
                  >
                    <i className="icon-arrow-right" style={{ fontSize: '24px' }}></i>
                        </div>
                        </div>
            </div>
            <h2
              className="section-title__title"
              style={{
                textAlign: 'center',
                width: '100%',
                maxWidth: '1200px',
                fontSize: '40px',
                fontWeight: '700',
                color: '#0a1c4c',
                margin: '0',
              }}
            >
              Awards & Recognition
            </h2>
          </div>
          {/* Navigation and rest of the section remain unchanged */}
          <div className="project-two__top" style={{
            position: 'relative',
            width: '100%',
            margin: '0 auto',
            padding: '20px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div className="section-title text-left"
              style={{
                textAlign: 'left',
                width: '100%',
                maxWidth: '7xl',
                padding: '0 20px',
                marginBottom: '20px'
              }}
            >
              <div className="section-title__tagline-box" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}>
                {/* Navigation is now handled in tagline above, so this is empty */}
                <div style={{ width: 'auto', margin: 0, padding: 0 }}></div>
              </div>
            </div>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              maxWidth: '100vw',
              margin: "0 auto",
              padding: "0 20px"
            }}>
              {/* Awards & Recognition heading moved above */}
            </div>
          </div>

          <div className="project-two__bottom"
            style={{
              marginTop: "10px",
              zoom: "80%",
              maxWidth: "7xl",
              width: "60%",
              margin: "0 auto"
            }}
          >
            <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
              <div className="swiper-wrapper">
                {awardsData.map((award) => (
                  <SwiperSlide key={award.id}>
                    <AwardCard award={award} onImageClick={openLightbox} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </section>
      {/* Project Two End */}
    </>
  )
}