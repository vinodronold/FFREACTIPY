import React from 'react'
import { clsList } from '../../constants/ui'
import classnames from 'classnames'

// const ListItem = ({ item, activeClass }) =>
//   <a href="/" className={classNames(`${clsList}-item`, { [activeClass]: false })}>
//     <i className={classNames(materialIcon, `${clsList}-item__start-detail`)} aria-hidden="true">
//       {item.icon}
//     </i>
//     {item.label}
//   </a>

const ListItem = ({ classname, children, href }) => {
  let _cls = classnames(classname, `${clsList}-item`)
  if (href) {
    return <a href={href} className={_cls}>{children}</a>
  }
  return <li className={_cls}>{children}</li>
}

export default ListItem
