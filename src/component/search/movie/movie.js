import React from 'react'
import classnames from 'classnames/bind';
import style from './movie.module.scss'

const cx = classnames.bind(style);

 function Movie({movie}) {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('img')}>
            <img src={movie.poster} alt="Movie" />
        </div>
        <div className={cx('content')}>
            <h2 className={cx('title')}>{movie.name}</h2>
            <div className={cx('episodes')}>
              <p>Tập</p>
              <span>{movie.episode}</span>
            </div>
        </div>
    </div>
  )
}
export default Movie
