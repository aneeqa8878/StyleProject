import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import WomenShoes from "./WomenShoes";
import WomenApparels from "./WomenApparels";

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
                <Link class="" to="/womenshoes">
                  <img
                    src="https://stylo.pk/cdn/shop/collections/3_160x.jpg?v=1673865176"
                    style={{ width: "5rem" }}
                  />
                  <Link class="nav-link mt-2" to="/womenshoes">
                    View All
                  </Link>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="rounded-circle">
                <Link class="" to="/womenshoes">
                  <img
                    src="https://stylo.pk/cdn/shop/collections/Blog_IMG_3_160x.jpg?v=1673865148"
                    style={{ width: "5rem" }}
                  />

                  <Link class="nav-link mt-2" to="/womenshoes">
                    WomenShoes
                  </Link>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="rounded-circle">
                <Link class="" to="/womenshoes">
                  <img
                    src="https://stylo.pk/cdn/shop/collections/pw218913_160x.jpg?v=1673867219"
                    style={{ width: "5rem" }}
                  />
                  <Link class="nav-link mt-2" to="/womenshoes">
                    Women Apperarls
                  </Link>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="rounded-circle">
                <Link class="" to="/womenshoes">
                  <img
                    src="https://stylo.pk/cdn/shop/collections/Kids_160x.jpg?v=1673867202"
                    style={{ width: "5rem" }}
                  />
                  <Link class="nav-link mt-2 pl-4" to="/kids">
                    Kids
                  </Link>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="rounded-circle">
                <Link class="" to="/womenshoes">
                  <img
                    src="https://stylo.pk/cdn/shop/collections/Bag_blog_post_img_1_160x.jpg?v=1673865206"
                    style={{ width: "5rem" }}
                  />
                  <Link class="nav-link mt-2 pl-4" to="/bags">
                    Bags
                  </Link>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="rounded-circle">
                <Link class="" to="/womenshoes">
                  <img
                    src="https://stylo.pk/cdn/shop/collections/04_160x.png?v=1673865581"
                    style={{ width: "5rem" }}
                  />
                  <Link class="nav-link mt-2  pl-4" to="/womenshoes">
                    Jewlery
                  </Link>
                </Link>
              </SwiperSlide>

              <SwiperSlide className="rounded-circle">
                <Link class="" to="/womenshoes">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKekB2r06ZIlGPc0Jmo8zEtdjVfR-qIUWSkA&usqp=CAU"
                    style={{ width: "5rem" }}
                  />
                  <Link class="nav-link mt-2  pl-3" to="/womenshoes">
                    Fragrance
                  </Link>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="rounded-circle">
                <Link class="" to="/womenshoes">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuowRzzNHw2dpotZ7Jj6jcQZScJiR6E0ISBQ&usqp=CAU"
                    style={{ width: "5rem" }}
                  />
                  <Link class="nav-link mt-2  pl-3" to="/womenshoes">
                    Cushion
                  </Link>
                </Link>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <p className="pl-0 mt-5 text-center "style={{ color: "gray" }}>
        Stylo Pakistan brings to you Women Shoes that are not only top-quality in terms of design, but also fit comfort standards. Explore our wide range of summer and winter women shoes today to take your style up a notch. Finding women shoes that strike the right balance between comfort and style is not an easy task. Most of the ladies shoes we look at are either good at design or comfort. </p>
      </div>
    </div>
  );
}

export default Slider;
