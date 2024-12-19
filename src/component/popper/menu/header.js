import PropTypes from 'prop-types'
import React from 'react'
import classname from 'classnames/bind'
import styles from './menu.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const cx = classname.bind(styles)

export default function Header({ title, handleBackClick }) {
  return (
    <>
      {title && (
        <div className={cx('menu')}>
          {handleBackClick && (
            <span onClick={handleBackClick} className={cx('icon-title-menu')}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </span>
          )}
          <span className={cx('title-menu')}>{title.trim()}</span>
        </div>
      )}
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  handleBackClick: PropTypes.func.isRequired,
}
