import React from 'react'
import classnames from 'classnames/bind';

import style from './Header.module.scss'
import { Menu } from '~/component';
import Search from '~/component/search';
import Button from '~/component/button';

const cx = classnames.bind(style);

 function Header() {
  return (  
    <header className={cx('wrapper')}>
        <div className={cx('header')}>
            <img src='https://cdn.animevietsub.cx/data/logo/logoz.png' alt='animal'/>
            <Menu />
            <div className={cx('options-header')}>
              <Search/>
              <Button classname={cx('login-btn')} primary> Log In </Button>
            </div>
        </div>
    </header>
  )
}

export default Header;
