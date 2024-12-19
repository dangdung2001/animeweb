// popper wrapper

import React from 'react'
import classNames from 'classnames/bind'
import styles from './popper.module.scss'

const cx = classNames.bind(styles)

export default function Popper({ children, className }) {
  return <div className={cx('wrapper', className)}>{children}</div>
}
