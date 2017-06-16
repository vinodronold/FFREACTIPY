import React, { PureComponent } from 'react'
import { clsTextField } from '../../constants/ui'
import classNames from 'classnames'
import './TextField.css'

class TextField extends PureComponent {
  render = () => {
    const { fullWidth, dense, style } = this.props
    return (
      <div
        style={style}
        className={classNames(clsTextField, {
          [`${clsTextField}--fullwidth`]: fullWidth,
          [`${clsTextField}--dense`]: dense
        })}>
        <input type="text" className={`${clsTextField}__input`} />
      </div>
    )
  }
}

export default TextField
