import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";

const ClientsCarousel = () => {
    const logos = [c1, c2, c3, c4, c2];

    return (
        <section className="w-full text-center py-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Partners</h2>

            <div className="w-full mx-auto">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                        bulletClass: "swiper-pagination-bullet custom-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
                    }}
                    autoplay={{
                        delay: 1200,
                        disableOnInteraction: false,
                    }}
                    speed={900}
                    className="pb-10"
                >
                    {logos.map((img, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center">
                            <div className="w-32 h-32 md:w-36 md:h-36 flex justify-center items-center overflow-hidden">
                                <img
                                    src={img}
                                    alt={`client-${index}`}
                                    className="h-full w-full object-contain p-2"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ClientsCarousel;
