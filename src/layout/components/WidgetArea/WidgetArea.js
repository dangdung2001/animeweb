import React from 'react'
import classnames from 'classnames/bind';
import style from './widgetarea.module.scss'
import { Link } from 'react-router-dom';

const cx = classnames.bind(style);

const movieUpdated = [
  {
    title : 'DanMachi V',
    state : 'Tập 11'
  },
  {
    title : 'Đại Đạo Chiều Thiên',
    state : 'Tập 13'
  },
  {
    title : 'Võ Nghịc 3D',
    state : 'Tập 15'
  },
  {
    title : 'Vạn giới chí tôn',
    state : 'Tập 25'
  },
  {
    title : 'Vạn Cổ thần thoại',
    state : 'Tập 248'
  },
  {
    title : 'Thần vực vô tận',
    state : 'Tập 39'
  },
  {
    title : 'Sư huynh à sư huynh',
    state : 'Tập 68'
  },
  {
    title : 'Thần vực vô tận',
    state : 'Tập 39'
  },
  {
    title : 'Thần vực vô tận',
    state : 'Tập 39'
  },
  {
    title : 'Thần vực vô tận',
    state : 'Tập 39'
  },
]
 


 function WidgetArea() {

  return (
    <div className={cx('wrapper')}>
        <h4 className={cx('title')}>ANIME MỚI CẬP NHẬP</h4>
        {
          movieUpdated.map((movie , index) => {
            return (
              <div key={index} className={cx('movie')}>
                <p className={cx('title-movie')}>{movie.title}</p>
                <p className={cx('state')}>{movie.state}</p>
              </div>
            )
          })

        }
        <span className={cx('more')}>
          <Link className={cx('more-btn')} to='/123'>Xem thêm...</Link>
        </span>
    </div>
  )
}

export default WidgetArea;
