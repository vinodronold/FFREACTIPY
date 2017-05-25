import React, { Component } from 'react'
import { materialIcon, clsList } from '../../constants/ui'
import classNames from 'classnames'

class ListItem extends Component {
  render = () => {
    const { item, activeClass } = this.props
    return (
      <a href="/" className={classNames(`${clsList}-item`, { [activeClass]: false })}>
        <i className={classNames(materialIcon, `${clsList}-item__start-detail`)} aria-hidden="true">
          {item.icon}
        </i>
        {item.label}
      </a>
    )
  }
}

export default ListItem
