import React from 'react'
import { materialIcon, clsList } from '../../constants/ui'
import classNames from 'classnames'

import './List.css'

const List = ({ Items, activeClass }) => {
  return (
    <div className={clsList}>
      {Items.map(i => (
        <a key={i.id} className={classNames(`${clsList}-item`, { [activeClass]: false })} href="/">
          <i className={classNames(materialIcon, `${clsList}-item__start-detail`)} aria-hidden="true">
            {i.icon}
          </i>
          {i.label}
        </a>
      ))}
    </div>
  )
}

export default List
