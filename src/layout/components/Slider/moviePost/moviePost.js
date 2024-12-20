import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames/bind";

import style from "./moviepost.module.scss";
import {
  faClapperboard,
  faStar,
  faTimes,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarAlt,
  faTimesCircle,
} from "@fortawesome/free-regular-svg-icons";
import Button from "~/component/button";

const cx = classnames.bind(style);

function MoviePost({data}) {
    
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("movie-post")}
        src={data.poster}
        alt=""
      />
      <div className={cx("content")}>
        <h2 className={cx("movie-title")}>ONE PIECE</h2>
        <div className={cx("info")}>
          <div className={cx("info-item")}>
            <span className={cx("star")}>
              <FontAwesomeIcon icon={faStar} />
            </span>
            <p>532</p>
          </div>
          <div className={cx("info-item")}>
            <FontAwesomeIcon icon={faTimes} />
            <p>11/12</p>
          </div>
          <div className={cx("info-item")}>
            <FontAwesomeIcon icon={faCalendarAlt} />
            <p>2001</p>
          </div>
          <p className={cx("resolution")}>HD</p>
        </div>

        <p className={cx("describe")}>
          The One Piece is the driving goal of Monkey D. Luffy and his crew, as
          well as that of multiple other pirates, who all seek to claim the
          treasure in order to become the next Pirate King, following Roger's
          dying words at his execution.
        </p>

        <span className={cx("studio")}>
          <span>
            <FontAwesomeIcon icon={faVideoCamera} />
          </span>
          <p className={cx("studio-name")}>Studio XYZ</p>
        </span>
        <span className={cx("category")}>
          <span>
            <FontAwesomeIcon icon={faClapperboard} />
          </span>
          <p className={cx("category-name")}>Action</p>
        </span>
        <Button classname={cx("play-btn")} primary small>
          Xem Phim
        </Button>
      </div>
    </div>
  );
}

export default MoviePost;
