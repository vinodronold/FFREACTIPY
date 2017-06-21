import React from 'react'
import List, { ListItem, ListItemStart } from '../List'
import { clsTempDrawer } from '../../constants/ui'

const DrawerItems = () => {
  let _items = [{ id: 1, label: 'Inbox', icon: 'inbox' }, { id: 2, label: 'Star', icon: 'star' }]
  return (
    <List href>
      {_items.map(i =>
        <ListItem key={i.id} href={'#'} className={i.id === 1 ? `${clsTempDrawer}--selected` : ''}>
          <ListItemStart icon={i.icon} />{i.label}
        </ListItem>
      )}
    </List>
  )
}

export default DrawerItems
