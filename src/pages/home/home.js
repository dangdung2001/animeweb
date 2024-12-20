import React from "react";
import classnames from "classnames/bind";
import style from "./home.module.scss";
import * as components from "~/layout/components";
import Listmovie from "~/component/listmovie/listmovie";

const cx = classnames.bind(style);

export default function Home() {
  return (
    <>
      <components.Slider />

      <Listmovie
        title="MỚI CẬP NHẬP"
        optionsTitle={{
          items: [
            {
              title: "Tất Cả",
              to: "/",
            },
            {
              title: "Mùa thu - 2024",
              to: "/",
            },
            {
              title: "Anime bộ",
              to: "/",
            },
            {
              title: "Anime lẽ",
              to: "/",
            },
          ],
        }}
      />

      <Listmovie title="SẮP CHIẾU" comicSoon />

      <Listmovie
        title="ĐỀ CỬ"
        optionsTitle={{
          items: [
            {
              title: "Xem nhiều hôm nay",
              to: "/",
            },
            {
              title: "Xem nhiều trong mùa",
              to: "/",
            },
            {
              title: "Yêu Thích",
              to: "/",
            },
            {
              title: "Tháng",
              to: "/",
            },
          ],
        }}
      />
    </>
  );
}
