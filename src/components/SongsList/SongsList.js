import React from 'react'
import List, { ListItem, ListItemStart, ListItemText, ListItemTextSecondary } from '../List'
import { Mobile, YTImg } from '../Utils'
import './SongsList.css'

const Song = ({ id, title, subtitle }) =>
  <ListItem href={`/play/${id}`} className={'chord-list-item'}>
    {!Mobile && <ListItemStart className={'chord-list-item-img'} img={YTImg(id)} />}
    <ListItemText>
      {title}
      {subtitle ? <ListItemTextSecondary>{subtitle}</ListItemTextSecondary> : ''}
    </ListItemText>
  </ListItem>

const SongsList = ({ songs = [] }) =>
  <List href twoline className={'chord-list'}>
    {Object.keys(songs).map(key => <Song key={key} id={key} title={songs[key].title} subtitle={songs[key].subtitle} />)}
  </List>

export default SongsList
