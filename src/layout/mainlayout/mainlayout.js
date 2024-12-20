import React from "react";
import * as components from "../components";
import classnames from "classnames/bind";
import style from "./mainlayout.module.scss";
import HeaderAds from "../components/Header/headerAds";
import Listmovie from "~/component/listmovie/listmovie";

const cx = classnames.bind(style);

function Mainlayout({movieListsTop , children}) {
  return (
    <div className={cx("wrapper")}>
      <components.Header />
      <div className={cx("main")}>
        <HeaderAds />
        {movieListsTop && <components.MovieListTop />}
        <div className={cx("content")}>
            <div className={cx("content-main")}>
              {children}
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
