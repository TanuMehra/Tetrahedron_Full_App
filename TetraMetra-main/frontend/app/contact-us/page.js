"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  async function handleContactThreeSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      company: form.companyName.value,
      email: form.email.value,
      mobile: form.Phone.value,
      message: form.message.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Form submission successful:", result);
      // You can add success handling here (e.g., show success message, reset form)
      router.push("/thankyou");
    } catch (error) {
      console.error("Error submitting form:", error);
      // You can add error handling here (e.g., show error message to user)
    }
  }
  return (
    <>
      <Layout headerStyle={6} footerStyle={6} breadcrumbTitle="Contact">
        {/*Contact Page Start*/}
        <section className="contact-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="contact-page__left">
                  <div className="contact-page__img">
                    <img
                      src="assets/images/resources/contact-page-img-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="contact-page__right">
                  <h3
                    className="contact-page__title"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Contact us Now !
                  </h3>
                  <ul className="contact-page__contact-list list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-location"></span>
                      </div>
                      <div className="content">
                        <h3 style={{ fontFamily: "var(--font-poppins)" }}>
                          Main Office
                        </h3>
                        <p style={{ fontFamily: "var(--font-poppins)" }}>
                          204, Block A, Ecotech III, Noida, Khera Choganpur,{" "}
                          <br /> Uttar Pradesh 201306, India
                          <br />
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-location"></span>
                      </div>
                      <div className="content">
                        <h3 style={{ fontFamily: "var(--font-poppins)" }}>
                          Regional Office
                        </h3>
                        <p style={{ fontFamily: "var(--font-poppins)" }}>
                          Unit 630, Located at DLF Cybercity, Infocity Park,
                          Patia – 751024, <br /> Bhubaneswar, Odisha (India)
                          <br />
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-call"></span>
                      </div>
                      <div className="content">
                        <h3 style={{ fontFamily: "var(--font-poppins)" }}>
                          Phone number
                        </h3>
                        <p style={{ fontFamily: "var(--font-poppins)" }}>
                          <Link href="tel:+91-8984189814"></Link>+91-8984189814
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-email"></span>
                      </div>
                      <div className="content">
                        <h3 style={{ fontFamily: "var(--font-poppins)" }}>
                          Email
                        </h3>
                        <p style={{ fontFamily: "var(--font-poppins)" }}>
                          <Link href="mailto:marketing@tetrahedron.in">
                            marketing@tetrahedron.in
                          </Link>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Contact Page End*/}

        {/*Google Map Start*/}
        <section className="google-map-one">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14012.920949761317!2d77.391228!3d28.592869!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d06b651fd9ba1%3A0x619e5f2f4ab76585!2sTetrahedron%20Manufacturing%20Services!5e0!3m2!1sen!2sin!4v1739869007518!5m2!1sen!2sin"
            className="google-map__one"
          ></iframe>
        </section>
        {/*Google Map End*/}

        {/*Contact Three Start*/}
        <section className="contact-three">
          <div className="container">
            <div className="row">
              <div className="section-title text-center">
                <div className="section-title__tagline-box">
                  <span
                    className="section-title__tagline"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Get in touch
                  </span>
                </div>
                <h2
                  className="section-title__title"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Send us a message
                </h2>
              </div>
              <form
                action="#"
                className="contact-three__form contact-form-validated"
                onSubmit={handleContactThreeSubmit}
              >
                <div className="row">
                  <div className="col-xl-3 col-lg-6">
                    <div className="contact-three__input-box">
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        required
                        style={{ fontFamily: "var(--font-poppins)" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6">
                    <div className="contact-three__input-box">
                      <input
                        type="text"
                        placeholder="Company Name"
                        name="companyName"
                        required
                        style={{ fontFamily: "var(--font-poppins)" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6">
                    <div className="contact-three__input-box">
                      <input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        required
                        style={{ fontFamily: "var(--font-poppins)" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6">
                    <div className="contact-three__input-box">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        name="Phone"
                        required
                        style={{ fontFamily: "var(--font-poppins)" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12 col-lg-12">
                    <div className="contact-three__input-box text-message-box">
                      <textarea
                        name="message"
                        placeholder="Your requirements"
                        required
                        style={{ fontFamily: "var(--font-poppins)" }}
                      ></textarea>
                    </div>
                    <div className="contact-three__btn-box">
                      <button
                        type="submit"
                        className="thm-btn contact-three__btn"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        Send message
                        <span className="icon-dabble-arrow-right"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="result"></div>
            </div>
          </div>
        </section>
        {/*Contact Three End*/}
      </Layout>
    </>
  );
}
