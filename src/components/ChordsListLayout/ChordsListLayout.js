import React from 'react'
import List, { ListItem, ListItemStart } from '../List'
import './ChordsListLayout.css'

const YTImg = id => `https://i.ytimg.com/vi/${id}/default.jpg`
const ChordsListLayout = () => {
  // IarsrX60bZw
  return (
    <List twoline classname={'chord-list'}>
      <ListItem classname={'chord-list-item'}>
        <ListItemStart classname={'chord-list-item-img'} img={YTImg('IarsrX60bZw')} />
        <span className="mdc-list-item__text">
          Two-line item
          <span className="mdc-list-item__text__secondary">Secondary text</span>
        </span>
      </ListItem>
      <ListItem classname={'chord-list-item'}> Item 2 </ListItem>
      <ListItem classname={'chord-list-item'}> Item 3 </ListItem>
      <ListItem classname={'chord-list-item'}> Item 4 </ListItem>
    </List>
  )
}

export default ChordsListLayout
