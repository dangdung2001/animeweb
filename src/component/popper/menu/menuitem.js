//  menu item
import PropTypes from 'prop-types'
import React from 'react'
import Button from '~/components/button'
import classname from 'classnames/bind'
import styles from './menu.module.scss'

const cx = classname.bind(styles)

export default function Menuitem({ data, onClick, ...props }) {
  let dash_above = data.dash_above

  if (dash_above === undefined) {
    dash_above = false
  }

  return (
    <Button
      classname={cx('menu-item', {
        dash_above,
      })}
      to={data.to}
      iconleft={data.icon}
      onClick={onClick}
      {...props}
    >
      {data.title}
    </Button>
  )
}

Menuitem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
}
