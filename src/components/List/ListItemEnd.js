import React from 'react'
import { clsList } from '../../constants/ui'
import classnames from 'classnames'

const ListItemEnd = ({ classname, children, icon, href }) => {
  let _cls = classnames(classname, `${clsList}-item__end-detail`)
  if (href) {
    return (
      <a href={href} className={_cls}>
        {icon}
      </a>
    )
  }
  return (
    <i className={_cls} aria-hidden="true">
      {icon}
    </i>
  )
}

export default ListItemEnd