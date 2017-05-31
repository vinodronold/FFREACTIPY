import React, { PureComponent } from 'react'
import { clsTextField } from '../../constants/ui'
import classNames from 'classnames'
import './TextField.css'

class TextField extends PureComponent {
  render = () => {
    const { fullWidth, style } = this.props
    return (
      <div style={style} className={classNames(clsTextField, { [`${clsTextField}--fullwidth`]: fullWidth })}>
        <input type="text" className={`${clsTextField}__input`} />
      </div>
    )
  }
}

export default TextField
