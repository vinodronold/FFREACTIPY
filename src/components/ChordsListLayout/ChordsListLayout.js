import React from 'react'
import List, { ListItem, ListItemStart, ListItemText, ListItemTextSecondary } from '../List'
import { Mobile, YTImg } from '../Utils'
import './ChordsListLayout.css'

const ChordsListItem = ({ id, title, subtitle }) =>{
  console.log(navigator.userAgent.match())
  return (
  <ListItem href={`/play/${id}`} className={'chord-list-item'}>
    {!Mobile && <ListItemStart className={'chord-list-item-img'} img={YTImg(id)} />}
    <ListItemText>
      {title}
      {subtitle ? <ListItemTextSecondary>{subtitle}</ListItemTextSecondary> : ''}
    </ListItemText>
  </ListItem>)}

const ChordsListLayout = ({ chordlist = [] }) =>
  <List href twoline className={'chord-list'}>
    {chordlist.map(c => <ChordsListItem key={c.id} {...c} />)}
  </List>

export default ChordsListLayout
