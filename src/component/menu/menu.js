import React from 'react'
import classnames from 'classnames/bind';
import style from './menu.module.scss'

const cx = classnames.bind(style);

function Menu() {
  return (
    <div className={cx('wrapper')}>
        <ul className={cx('menu-list')}>
            <li className={cx('menu-item')}>TRANG CHỦ</li>
            <li className={cx('menu-item')}>DẠNG ANIMAL</li>
            <li className={cx('menu-item')}>TOP ANIMAL</li>
            <li className={cx('menu-item')}>THỂ LOẠI</li>
        </ul>
    </div>
  )
}

export default Menu;
