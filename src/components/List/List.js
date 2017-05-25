import React from 'react'
import ListItem from './ListItem'
import { clsList } from '../../constants/ui'

import './List.css'

const List = ({ Items, activeClass }) => {
  return (
    <div className={clsList}>
      {Items.map(item => <ListItem key={item.id} item={item} activeClass={activeClass} />)}
    </div>
  )
}

export default List
