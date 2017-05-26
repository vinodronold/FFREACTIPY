import React, { PureComponent } from 'react'
import './TextField.css'

class TextField extends PureComponent {
  render = () => {
    const {style} = this.props
    return (
      <div style={style} className="mdc-textfield">
        <input type="text" id="my-textfield" className="mdc-textfield__input" />
      </div>
    )
  }
}

export default TextField