import React from "react";
import classnames from "classnames/bind";
import style from "./movieItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "../button";
import { Link, useNavigate } from "react-router-dom";

const cx = classnames.bind(style);

export default function MovieItem({
  data,
  width = "122px",
  height = "182px",
  described,
  comicSoon
}) {

  const movie = useNavigate();

  const handleClickMovie = () => {
    movie("/movie");
  }


  return (
    <>
      
      <div onClick={handleClickMovie} style={{ width: width, height: height }} className={cx("wrapper")}>
      <img className={cx("movie-img")} src={data.poster} alt="" />
        <div className={cx("rate-movie")}>
          <span className={cx("star")}>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className={cx("rate")}>{data.rating}</span>
        </div>
        <span className={cx("movie-episode")}>
          Tập
          <li>11</li>
        </span>
        {!described && <p className={cx("movie-name")}>{data.name}</p>}
        {comicSoon && <Button classname={cx('comic-soon')} primary small>SẮP CHIẾU</Button>}
      </div>
      {described && (
        <>
          <p className={cx("movie-name-described")}>
            {data.name.length > 10
              ? data.name.substring(0, 15) + "..."
              : data.name}
          </p>
          <p className={cx("movie-view-described")}>lượt xem : 1366202</p>
        </>
      )}
    </>
  );
}
