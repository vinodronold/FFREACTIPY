import React from 'react'
import List, { ListItem, ListItemStart, ListItemText, ListItemTextSecondary } from '../List'
import './ChordsListLayout.css'

const YTImg = id => `https://i.ytimg.com/vi/${id}/default.jpg`
const ChordsListLayout = ({ chordlist = [] }) =>
  <List twoline className={'chord-list'}>
    {chordlist.map(c =>
      <ListItem key={c.id} className={'chord-list-item'}>
        <ListItemStart className={'chord-list-item-img'} img={YTImg(c.id)} />
        <ListItemText>
          {c.title}
          {c.subtitle ? <ListItemTextSecondary>{c.subtitle}</ListItemTextSecondary> : ''}
        </ListItemText>
      </ListItem>
    )}
  </List>

export default ChordsListLayout
