import React from "react";
import * as components from "../components";
import classnames from "classnames/bind";
import style from "./mainlayout.module.scss";
import HeaderAds from "../components/Header/headerAds";
import Listmovie from "~/component/listmovie/listmovie";

const cx = classnames.bind(style);

function Mainlayout() {
  return (
    <div className={cx("wrapper")}>
      <components.Header />
      <div className={cx("main")}>
        <HeaderAds />
        <components.MovieListTop />
        <div className={cx("content")}>
          <div className={cx("content-main")}>
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
                    title: 'Xem nhiều trong mùa',
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
          </div>
          <div className={cx("widget-area")}>
            <components.WidgetArea />
          </div>
        </div>
      </div>
      <components.Footer />
    </div>
  );
}

export default Mainlayout;
