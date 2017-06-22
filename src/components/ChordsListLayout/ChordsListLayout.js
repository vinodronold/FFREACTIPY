import React from 'react'
import List, { ListItem, ListItemStart, ListItemText, ListItemTextSecondary } from '../List'
import './ChordsListLayout.css'

const YTImg = id => `https://i.ytimg.com/vi/${id}/default.jpg`
const ChordsListItem = ({ id, title, subtitle }) =>
  <ListItem href={`/play/${id}`} className={'chord-list-item'}>
      <ListItemStart className={'chord-list-item-img'} img={YTImg(id)} />
      <ListItemText>
        {title}
        {subtitle ? <ListItemTextSecondary>{subtitle}</ListItemTextSecondary> : ''}
      </ListItemText>
  </ListItem>

const ChordsListLayout = ({ chordlist = [] }) =>
  <List href twoline className={'chord-list'}>
    {chordlist.map(c => <ChordsListItem key={c.id} {...c} />)}
  </List>

export default ChordsListLayout
