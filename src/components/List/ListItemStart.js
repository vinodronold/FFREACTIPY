import React from 'react'
import { clsList, materialIcon } from '../../constants/ui'
import classnames from 'classnames'

const ListItemStart = ({ classname, icon, img, width = '56', height = '56', alt = 'Picture' }) => {
  let _cls = classnames(classname, `${clsList}-item__start-detail`)
  if (icon) {
    return (
      <i className={classnames(_cls, materialIcon)} aria-hidden="true">
        {icon}
      </i>
    )
  }
  if (img) {
    return <img className={_cls} src={img} width={width} height={height} alt={alt} />
  }
  return
}

export default ListItemStart
