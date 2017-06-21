import React from 'react'
import { clsList } from '../../constants/ui'

const ListItem = ({ className, children, href, role, tabIndex }) => {
  let _props = {}
  _props.className = `${className} ${clsList}-item`
  if (role) {
    _props.role = role
  }
  if (tabIndex) {
    _props.tabIndex = tabIndex
  }

  if (href) {
    return <a href={href} {..._props}>{children}</a>
  }
  return <li {..._props}>{children}</li>
}

export default ListItem
