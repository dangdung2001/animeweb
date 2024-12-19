import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import classname from 'classnames/bind'
import styles from './button.module.scss'
const cx = classname.bind(styles)

export default function Button({
  to,
  href,
  primary = false,
  outline = false,
  rounded = false,
  small = false,
  large = false,
  disabled = false,
  onClick,
  children,
  iconleft = false,
  iconright = false,
  classname,
  text = false,
  ...passProps
}) {
  let Comp = 'button'
  const props = {
    onClick,
    ...passProps,
  }

  if (disabled) {
    Object.keys(props).forEach(key => {
      if (key.startsWith('on') && props[key] === 'function') {
        delete props[key]
      }
    })
  }

  const classes = cx('wrapper', {
    [classname]: classname,
    primary,
    outline,
    rounded,
    small,
    iconleft,
    iconright,
    large,
    text,
    disabled,
  })

  if (to) {
    props.to = to
    Comp = Link
  } else if (href) {
    props.href = href
    Comp = 'a'
  }

  return (
    <Comp className={classes} {...props}>
      {iconleft && <span className={cx('icon')}>{iconleft}</span>}
      <span>{children}</span>
      {iconright && <span className={cx('icon')}>{iconright}</span>}
    </Comp>
  )
}

Button.propTypes = {
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  small: PropTypes.bool,
  iconleft: PropTypes.node,
  iconright: PropTypes.node,
  large: PropTypes.bool,
  text: PropTypes.bool,
  disabled: PropTypes.bool,
}
