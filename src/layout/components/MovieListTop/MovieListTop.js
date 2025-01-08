import React, { useEffect } from "react";
import classnames from "classnames/bind";
import style from "./movieListTop.module.scss";
import Swipper from "~/component/swipper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { getMovie } from "~/services/movieService";

const cx = classnames.bind(style);

function MovieListTop() {


  useEffect(() => {
    getMovies();
  }, [])

  const getMovies = async () => {

    const response = await getMovie();
    if (response.status === 200) {
      console.log(response.data.content);
    }
  }


  const movies = [
    {
      id: 1,
      name: "Movie 1",
      poster:
        "https://cdn.animevietsub.info/data/poster/2024/10/08/animevsub-Zamz0ogXSH.jpg",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Movie 2",
      poster:
        "https://cdn.animevietsub.info/data/poster/2024/10/10/animevsub-IT2ME00Q9U.jpg",
      rating: 3.7,
    },
    {
      id: 3,
      name: "Movie 3",
      poster:
        "https://cdn.animevietsub.info/data/poster/2024/09/30/animevsub-3BTNytMLlx.jpg",
      rating: 3.6,
    },
    {
      id: 4,
      name: "Movie 4",
      poster:
        "https://cdn.animevietsub.info/data/poster/2024/10/08/animevsub-dzovA3gksj.jpg",
      rating: 3.6,
    },
    {
      id: 5,
      name: "Movie 5",
      poster:
        "https://cdn.animevietsub.info/data/poster/2024/09/29/animevsub-DkxfU5x1v2.jpg",
      rating: 3.6,
    },
    {
      id: 6,
      name: "Movie 6",
      poster:
        "https://cdn.animevietsub.info/data/poster/2024/09/29/animevsub-ahvnEEBOdj.jpg",
      rating: 3.6,
    },
    {
      id: 7,
      name: "Movie 7",
      poster:
        "https://cdn.animevietsub.info/data/poster/2024/10/06/animevsub-3y1TWMYcIQ.jpg",
      rating: 3.6,
    },
    {
      id: 8,
      name: "Movie 8",
      poster:
        "https://cdn.animevietsub.info/data/poster/2024/10/13/animevsub-TIHly52n6l.jpg",
      rating: 3.6,
    },
    {
      id: 9,
      name: "Movie 8",
      poster:
        "https://cdn.animevietsub.info/data/poster/2024/10/13/animevsub-TIHly52n6l.jpg",
      rating: 3.6,
    },
    {
      id: 10,
      name: "Movie 8",
      poster:
        "https://cdn.animevietsub.info/data/poster/2024/10/13/animevsub-TIHly52n6l.jpg",
      rating: 3.6,
    },
    {
      id: 11,
      name: "Movie 8",
      poster:
        "https://cdn.animevietsub.info/data/poster/2024/10/13/animevsub-TIHly52n6l.jpg",
      rating: 3.6,
    },
    {
      id: 12,
      name: "Movie 8",
      poster:
        "https://cdn.animevietsub.info/data/poster/2024/10/13/animevsub-TIHly52n6l.jpg",
      rating: 3.6,
    },
    {
      id: 13,
      name: "Movie 8",
      poster:
        "https://cdn.animevietsub.info/data/poster/2024/10/13/animevsub-TIHly52n6l.jpg",
      rating: 3.6,
    },
  ];

  return (
    <div className={cx("wrapper")}>
      <Swipper
        data={movies}
        slidersPerview='8'
        spaceSilder='30'
        prevEl={cx("swiper-button-prev")}
        nextEl={cx("swiper-button-next")}
      />
      <span className="swiper-button-prev">
        <FontAwesomeIcon className={cx("icon")} icon={faCaretLeft} />
      </span>
      <span className="swiper-button-next">
        <FontAwesomeIcon className={cx("icon")} icon={faCaretRight} />
      </span>
    </div>
  );
}

export default MovieListTop;
