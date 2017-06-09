import React from 'react'
import classnames from 'classnames'
import { clsList } from '../../constants/ui'
import './List.css'

const List = ({ avatar, children, classname, href }) => {
  let _cls = classnames(classname, clsList, { [`${clsList}--avatar-list`]: avatar })
  if (href) {
    return <div className={_cls}>{children}</div>
  }
  return <ul className={_cls}>{children}</ul>
}

export default List
