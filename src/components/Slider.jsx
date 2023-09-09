import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";

function Slider() {
  return (
    <div className="container">
      <div class="row">
        <div class="col-4 mt-5 text-center justify-content-center fs-2">
          <b>Sale</b>
        </div>
        <div className="col-8 mt-5">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <div>
              <SwiperSlide>
                <img
                  src="https://stylo.pk/cdn/shop/collections/3_160x.jpg?v=1673865176"
                  style={{ width: "5rem" }}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-circle">
                <img
                  src="https://stylo.pk/cdn/shop/collections/3_160x.jpg?v=1673865176"
                  style={{ width: "5rem" }}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-circle">
                <img
                  src="https://stylo.pk/cdn/shop/collections/3_160x.jpg?v=1673865176"
                  style={{ width: "5rem" }}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-circle">
                <img
                  src="https://stylo.pk/cdn/shop/collections/3_160x.jpg?v=1673865176"
                  style={{ width: "5rem" }}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-circle">
                <img
                  src="https://stylo.pk/cdn/shop/collections/3_160x.jpg?v=1673865176"
                  style={{ width: "5rem" }}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-circle">
                <img
                  src="https://stylo.pk/cdn/shop/collections/3_160x.jpg?v=1673865176"
                  style={{ width: "5rem" }}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-circle">
                <img
                  src="https://stylo.pk/cdn/shop/collections/3_160x.jpg?v=1673865176"
                  style={{ width: "5rem" }}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-circle">
                <img
                  src="https://stylo.pk/cdn/shop/collections/3_160x.jpg?v=1673865176"
                  style={{ width: "5rem" }}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-circle">
                <img
                  src="https://stylo.pk/cdn/shop/collections/3_160x.jpg?v=1673865176"
                  style={{ width: "5rem" }}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-circle">
                <img
                  src="https://stylo.pk/cdn/shop/collections/3_160x.jpg?v=1673865176"
                  style={{ width: "5rem" }}
                />
              </SwiperSlide>
              <SwiperSlide className="rounded-circle">
                <img
                  src="https://stylo.pk/cdn/shop/collections/3_160x.jpg?v=1673865176"
                  style={{ width: "5rem" }}
                />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Slider;
