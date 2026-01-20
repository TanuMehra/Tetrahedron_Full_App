'use client';

import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Services2() {
    return (
        <section className="services-four">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Best Service</span>
                    </div>
                    <h2 className="section-title__title">Building Dreams Brick <br/> by Strength</h2>
                </div>
                <Swiper
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="services-slider"
                >
                    {/* Service 1 */}
                    <SwiperSlide>
                        <div className="services-four__single">
                            <div className="services-four__img">
                                <img src="assets/images/services/services-4-1.jpg" alt="Elite Structures" />
                            </div>
                            <div className="services-four__content">
                                <h5 className="services-four__title"><Link href="service-details">Elite Structures</Link></h5>
                                <p className="services-four__text">Et purus duis sollicit udin pur <br/> us duis sollicitudin</p>
                                <div className="services-four__btn-box">
                                    <Link href="service-details" className="services-four__btn">Read more <span className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Service 2 */}
                    <SwiperSlide>
                        <div className="services-four__single">
                            <div className="services-four__img">
                                <img src="assets/images/services/services-4-2.jpg" alt="Pixel Craft" />
                            </div>
                            <div className="services-four__content">
                                <h5 className="services-four__title"><Link href="service-details">Pixel Craft</Link></h5>
                                <p className="services-four__text">Et purus duis sollicit udin pur <br/> us duis sollicitudin</p>
                                <div className="services-four__btn-box">
                                    <Link href="service-details" className="services-four__btn">Read more <span className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Service 3 */}
                    <SwiperSlide>
                        <div className="services-four__single">
                            <div className="services-four__img">
                                <img src="assets/images/services/services-4-1.jpg" alt="Pro Build Innovations" />
                            </div>
                            <div className="services-four__content">
                                <h5 className="services-four__title"><Link href="service-details">Pro Build Innovations</Link></h5>
                                <p className="services-four__text">Et purus duis sollicit udin pur <br/> us duis sollicitudin</p>
                                <div className="services-four__btn-box">
                                    <Link href="service-details" className="services-four__btn">Read more <span className="icon-dabble-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
