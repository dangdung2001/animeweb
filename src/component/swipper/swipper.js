import PropTypes from "prop-types";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import React from "react";
import MovieItem from "../movieItem/movieItem";

import classnames from "classnames/bind";
import style from "./swipper.module.scss";
import MoviePost from "~/layout/components/Slider/moviePost";

const cx = classnames.bind(style);

function Swipper({
  data = [],
  slider = false,
  slidersPerview = 1,
  spaceSilder = 0,
  pagiable = false,
  width,
  height,
  described,
  comicSoon,
}) {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={spaceSilder}
        slidesPerView={slidersPerview}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={pagiable}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              {slider ? (
                <MoviePost data={item} />
              ) : (
                <MovieItem
                  data={item}
                  width={width}
                  height={height}
                  described={described}
                  comicSoon={comicSoon}
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

Swipper.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Swipper;
