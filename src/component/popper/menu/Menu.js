// popper => meunu

import PropTypes from 'prop-types'
import classname from 'classnames/bind'
import styles from './menu.module.scss'
import Tippy from '@tippyjs/react/headless'
import { Popper as Popperwrapper } from '~/components/popper'
import Menuitem from './menuitem'
import { useState } from 'react'
import Header from './header'

const cx = classname.bind(styles)

export default function Menu({ children, items = [], ...props }) {
  const [curItemList, setCurItemList] = useState([{ data: items }])

  let indexLastItemList = curItemList.length - 1
  let currentItems = curItemList[indexLastItemList]

  function handleItemClick(indexItem) {
    return () => {
      if (indexItem !== undefined) {
        setCurItemList(pre => [...pre, currentItems?.data[indexItem]?.children])
      }
    }
  }

  function handleBackClick() {
    if (curItemList.length > 0) {
      let newItemList = [...curItemList]
      newItemList.splice(indexLastItemList, 1)
      setCurItemList(pre => (pre = newItemList))
    }
  }

  let itemsContent = currentItems?.data?.map((item, index) => {
    if (item.children) {
      return (
        <Menuitem
          key={index}
          data={item}
          title={item.children.title}
          onClick={handleItemClick(index)}
        />
      )
    }
    return <Menuitem key={index} data={item} onClick={handleItemClick()} />
  })

  return (
    <div>
      <Tippy
        {...props}
        render={attrs => (
          <div className={cx('menu-list')} tabIndex='-1' {...attrs}>
            <Popperwrapper className={cx('menu-popper')}>
              <Header
                title={currentItems.title || ''}
                handleBackClick={handleBackClick}
              />
              {/* list item in popper */}
              <div className={cx('menu-content')}>{[...itemsContent]}</div>
            </Popperwrapper>
          </div>
        )}
        onHidden={() => setCurItemList(pre => pre.slice(0, 1))}
      >
        {children}
      </Tippy>
    </div>
  )
}

Menu.propTypes = {
  children: PropTypes.node,
  items: PropTypes.array,
}
