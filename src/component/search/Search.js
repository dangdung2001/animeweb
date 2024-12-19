import React, { useEffect, useRef, useState } from 'react'
import HeadlessTippy from '@tippyjs/react/headless'
import {
  faMagnifyingGlass,
  faSpinner,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import classname from 'classnames/bind'
import styles from './search.module.scss'

import { Popper as Popperwrapper } from '~/component/popper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import debounce from '~/hooks/debounce'
// import { searchService } from '~/services/searchService'

const cx = classname.bind(styles)
export default function Search() {
  const inputRef = useRef()

  const [visible, setVisible] = useState(false)
  const [searchresult, setsearchresult] = useState([])
  const [inputvalue, setInputvalue] = useState('')
  const [showloading, setShowloading] = useState(false)

  // let valueDebounced = debounce(inputvalue, 500)

  // useEffect(() => {
  //   if (!!valueDebounced?.trim() === false) {
  //     setShowloading(false)
  //     setVisible(false)
  //     return
  //   }
  //   const valueResult = async () => {
  //     setShowloading(true)
  //     const values = await searchService(inputvalue)
  //     setsearchresult(values)
  //     setShowloading(false)
  //   }
  //   valueResult()
  // }, [valueDebounced])

  return (
    <div>
      <HeadlessTippy
        visible={visible && searchresult?.length > 0 && inputvalue}
        interactive={true}
        delay={[1000, 1000]}
        render={attrs => (
          <div className={cx('search-result')} tabIndex='-1' {...attrs}>
            <Popperwrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {searchresult.map(item => {
                return (
                  // <AccountItem
                  //   onClick={() => {
                  //     setsearchresult([])
                  //     setInputvalue('')
                  //   }}
                  //   key={item.id}
                  //   data={item}
                  // />
                  <>
                    {item}
                  </>
                )
              })}
            </Popperwrapper>
          </div>
        )}
        onClickOutside={() => setVisible(false)}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef}
            value={inputvalue}
            onInput={e => {
              setInputvalue(e.target.value)
              setVisible(true)
            }}
            onFocus={() => setVisible(true)}
            type='text'
            placeholder='Search accounts and videos'
          />
          {!!inputvalue && !showloading && (
            <button
              onClick={e => {
                setInputvalue('')
                inputRef.current.focus()
              }}
              className={cx('clean')}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
          {showloading && (
            <button style={{ display: 'flex' }} className={cx('loading')}>
              <FontAwesomeIcon icon={faSpinner} />
            </button>
          )}

          
        </div>
      </HeadlessTippy>
    </div>
  )
}
