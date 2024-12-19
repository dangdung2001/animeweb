import React from 'react'
import classnames from 'classnames/bind';

import style from './headerAds.module.scss'

const cx = classnames.bind(style);

function HeaderAds() {
  return (
    <div className={cx('header-ads')}>
        headerADS
    </div>
  )
}

export default HeaderAds;
