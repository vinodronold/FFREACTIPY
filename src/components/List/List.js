import React from 'react'
import classnames from 'classnames'
import { clsList } from '../../constants/ui'
import './List.css'

const List = ({ children, classname, href }) => {
  let _cls = classnames(clsList, classname)
  if (href) {
    return <div className={_cls}>{children}</div>
  }
  return <ul className={_cls}>{children}</ul>
}

export default List



// import React from 'react'
// import ListItem from './ListItem'
// import { clsList } from '../../constants/ui'

// import './List.css'

// const List = ({ Items, activeClass }) => {
//   return (
//     <div className={clsList}>
//       {Items.map(item => <ListItem key={item.id} item={item} activeClass={activeClass} />)}
//     </div>
//   )
// }

// export default List