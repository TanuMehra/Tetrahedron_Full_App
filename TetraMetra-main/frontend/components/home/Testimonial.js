"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactForm from "../ContactForm";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Testimonial() {
  const testimonials = [
    {
      name: "Mr. Raduno Agrawal",
      subtitle: "(Director at Gopal Aromatics Private Limited)",
      text: "On behalf of GAPL, we sincerely appreciate Tetrahedron Manufacturing Services for their excellent support and expertise throughout our project.",
    },
    {
      name: "Mr. Mohit Nayar",
      subtitle: "(Owner at Modern Pipe Industries)",
      text: "M/S Tetrahedron Team was appointed as the Layout and Project Management Consultant. Their professionalism and technical insight helped us achieve strong project outcomes.",
    },
    {
      name: "Mr. Amit Goel",
      subtitle: "(Managing Director at Edgetech Air Systems Pvt. Ltd.)",
      text: "On behalf of Edgetech Air Systems Pvt. Ltd., I, Amit Goel, appreciate Tetrahedron’s team dedication and structured consulting support that improved our plant efficiency.",
    },
  ];

  return (
    <>
      {/* Testimonial Section Start */}
      <section className="testimonial-two1">
        <div className="container">
          {/* Section Title */}
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span
                className="section-title__tagline"
                ref={(el) => {
                  if (el) {
                    el.style.textTransform = "none";
                    el.style.fontSize = "0.95rem";
                    el.style.letterSpacing = "0.01em";
                    const text = el.textContent || "";
                    const newText = text
                      .toLowerCase()
                      .replace(/^c/, "C")
                      .replace(/ t/, " T");
                    el.textContent = newText;
                  }
                }}
              >
                Client testimonial
              </span>
            </div>
            <h2 className="section-title__title">
              Excellence Dynam Builders Every Project
            </h2>
          </div>

          <div className="row">
            {/* Swiper Section */}
            <div className="col-xl-8" style={{ maxWidth: "650px" }}>
              <div className="testimonial-two__right">
                <Swiper
                  {...swiperOptions}
                  className="thm-swiper__slider swiper-container"
                  style={{ borderRadius: "28px" }}
                >
                  <div className="swiper-wrapper">
                    {testimonials.map((item, i) => (
                      <SwiperSlide key={i}>
                        <div
                          style={{
                            background:
                              "linear-gradient(135deg, #f9f9ff, #eef2ff)",
                            padding: "45px",
                            borderRadius: "28px",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                            border: "1px solid rgba(255,255,255,0.9)",
                            fontFamily: "'Montserrat', 'Poppins', sans-serif",
                            transition:
                              "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                            minHeight: "370px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.boxShadow =
                              "0 25px 50px rgba(76,81,191,0.15)";
                            e.currentTarget.style.transform =
                              "translateY(-6px)";
                            e.currentTarget.style.borderColor =
                              "rgba(99,102,241,0.25)";
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.boxShadow =
                              "0 20px 40px rgba(0,0,0,0.12)";
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.borderColor =
                              "rgba(255,255,255,0.9)";
                          }}
                        >
                          <div
                            className="testimonial-two__quote-icon"
                            style={{
                              marginBottom: "30px",
                              position: "relative",
                              top: "-10px", // moves icon slightly upward
                            }}
                          >
                            <span className="icon-quote-2 text-primary text-4xl opacity-80"></span>
                          </div>

                          <p
                            className="testimonial-two__text"
                            style={{
                              color: "#4b5563",
                              fontSize: "16px",
                              lineHeight: "1.7",
                              marginBottom: "28px",
                              flexGrow: 1,
                            }}
                          >
                            “{item.text}”
                          </p>

                          <div
                            className="testimonial-two__client-info flex items-center gap-4 mt-auto"
                            style={{
                              borderTop: "1px solid rgba(0,0,0,0.05)",
                              paddingTop: "18px",
                            }}
                          >
                            <div
                              className="testimonial-two__client-img"
                              style={{
                                width: "54px",
                                height: "54px",
                                borderRadius: "50%",
                                background:
                                  "linear-gradient(135deg, #6366f1, #a5b4fc)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "white",
                                fontWeight: 600,
                                fontSize: "18px",
                              }}
                            >
                              {item.name.charAt(0)}
                            </div>

                            <div className="testimonial-two__client-content">
                              <h4
                                className="testimonial-two__client-name"
                                style={{
                                  margin: 0,
                                  fontWeight: 600,
                                  fontSize: "17px",
                                  color: "#111827",
                                }}
                              >
                                {item.name}
                              </h4>
                              <p
                                className="testimonial-two__client-sub-title"
                                style={{
                                  margin: "3px 0 0",
                                  fontSize: "14px",
                                  color: "#6b7280",
                                }}
                              >
                                {item.subtitle}
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>

                {/* Navigation Buttons */}
                <div
                  className="testimonial-two__right"
                  style={{ position: "relative" }}
                >
                  <div
                    className="testimonial-two__nav"
                    style={{
                      position: "absolute",
                      top: "-90%",
                      left: "-450px",
                      transform: "translateY(-40%)",
                      display: "flex",
                      flexDirection: "row",
                      gap: "6px",
                    }}
                  >
                    <div className="swiper-button-prev1 h1p">
                      <i className="icon-arrow-left"></i>
                    </div>
                    <div className="swiper-button-next1 h1n">
                      <i className="icon-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="col-xl-4" style={{ margin: "4px" }}>
              <div className="testimonial-two__left">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section End */}
    </>
  );
}
