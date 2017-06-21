import React from 'react'
import classnames from 'classnames'
import { clsList } from '../../constants/ui'
import './List.css'

const List = ({ avatar, children, className, href, twoline, role }) => {
  let _props = {}
  _props.className = classnames(className, clsList, { [`${clsList}--avatar-list`]: avatar, [`${clsList}--two-line`]: twoline })
  if (role) {
    _props.role = role
  }
  if (href) {
    return <div {..._props}>{children}</div>
  }
  return <ul {..._props}>{children}</ul>
}

export default List
