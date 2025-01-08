import React, { useContext } from 'react'
import classnames from 'classnames/bind';

import style from './Header.module.scss'
import { Menu } from '~/component';
import Search from '~/component/search';
import Button from '~/component/button';
import { Link } from 'react-router-dom';
import { AuthContext } from '~/context/AuthContext';

const cx = classnames.bind(style);

 function Header() {

  const {user} = useContext(AuthContext);

  return (  
    <header className={cx('wrapper')}>
        <div className={cx('header')}>
            <Link className={cx('logo')} to='/'>
              <img src='https://cdn.animevietsub.cx/data/logo/logoz.png' alt='animal'/>
            </Link>
            <Menu />
            <div className={cx('options-header')}>
              <Search/>
              {/* <Button to='/login' classname={cx('login-btn')} primary> Log In </Button> */}
              {user ? <img className={cx('avatar')} src={user.avatar} alt="avatar" />  
                      : <Button to='/login' classname={cx('login-btn')} primary> Log In </Button>
              } 
            </div>
        </div>
    </header>
  )
}

export default Header;
