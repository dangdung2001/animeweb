import React, { useEffect, useRef, useState } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import {
  faSpinner,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import classname from "classnames/bind";
import styles from "./search.module.scss";

import { Popper as Popperwrapper } from "~/component/popper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Movie from "./movie";
import Button from "../button";
// import debounce from '~/hooks/debounce'
// import { searchService } from '~/services/searchService'

const cx = classname.bind(styles);
export default function Search() {

  const movies = [
    {
      id: 1,
      name: "Movie 1",
      poster:
        "https://cdn.animevietsub.info/data/poster/2024/10/08/animevsub-Zamz0ogXSH.jpg",
      rating: 4.5,
      episode : 12
      
    },
    {
      id: 2,
      name: "Movie 2",
      poster:
        "https://cdn.animevietsub.info/data/poster/2024/10/10/animevsub-IT2ME00Q9U.jpg",
      rating: 3.7,
      episode : 15
    },
    {
      id: 3,
      name: "Movie 3",
      poster:
        "https://cdn.animevietsub.info/data/poster/2024/09/30/animevsub-3BTNytMLlx.jpg",
      rating: 3.6,
      episode : 16
    },
    {
      id: 4,
      name: "Movie 4",
      poster:
        "https://cdn.animevietsub.info/data/poster/2024/10/08/animevsub-dzovA3gksj.jpg",
      rating: 3.6,
      episode : 8
    },
    
  ];

  const inputRef = useRef();

  const [visible, setVisible] = useState(true);
  const [searchresult, setsearchresult] = useState(movies);
  const [inputvalue, setInputvalue] = useState("");
  const [showloading, setShowloading] = useState(false);

  // let valueDebounced = debounce(inputvalue, 500)

  // useEffect(() => {
  //   if (!!valueDebounced?.trim() === false) {
  //     setShowloading(false)
  //     setVisible(false)
  //     return
  //   }
  //   const valueResult = async () => {
  //     setShowloading(true)
  //     const values = await searchService(inputvalue)
  //     setsearchresult(values)
  //     setShowloading(false)
  //   }
  //   valueResult()
  // }, [valueDebounced])

  return (
    <div>
      <HeadlessTippy
        visible={visible && searchresult?.length > 0 && inputvalue}
        interactive={true}
        delay={[1000, 1000]}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <Popperwrapper>
              
              {searchresult.map((item) => {
                return <Movie key={item.id} movie={item} />;
              })}
              <Button classname={cx('popper-btn')}>Enter để tìm kiếm</Button>
            </Popperwrapper>
          </div>
        )}
        onClickOutside={() => setVisible(false)}
      >
        <div className={cx("search")}>
          <input
            ref={inputRef}
            value={inputvalue}
            onInput={(e) => {
              setInputvalue(e.target.value);
              setVisible(true);
            }}
            onFocus={() => setVisible(true)}
            type="text"
            placeholder="Search Movies"
          />
          {!!inputvalue && !showloading && (
            <button
              onClick={(e) => {
                setInputvalue("");
                inputRef.current.focus();
              }}
              className={cx("clean")}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
          {showloading && (
            <button style={{ display: "flex" }} className={cx("loading")}>
              <FontAwesomeIcon icon={faSpinner} />
            </button>
          )}
        </div>
      </HeadlessTippy>
    </div>
  );
}
