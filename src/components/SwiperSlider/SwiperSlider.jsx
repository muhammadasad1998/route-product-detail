import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import Swiper JS
// import Swiper styles
import "swiper/css";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function SwiperSlider(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="container">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {props.images.map((current_object) => {
            return (
              <>
                <SwiperSlide>
                  <img src={current_object} />
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper mt-5"
        >
          {props.images.map((current_object) => {
            return (
              <>
                <SwiperSlide>
                  <img src={current_object} />
                </SwiperSlide>
              </>
            );
          })}
         
        </Swiper>
      </div>
    </>
  );
}
