import React from 'react'
import { clsList } from '../../constants/ui'
import Icon from '../Icons'
import classnames from 'classnames'

const ListItemStart = ({ classname, icon, img, width = '56', height = '56', alt = 'Picture' }) => {
  let _cls = classnames(classname, `${clsList}-item__start-detail`)
  if (icon) {
    return (
      <Icon className={_cls} i={icon} />
    )
  }
  if (img) {
    return <img className={_cls} src={img} width={width} height={height} alt={alt} />
  }
  return
}

export default ListItemStart
