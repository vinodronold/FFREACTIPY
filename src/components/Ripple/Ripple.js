import React, { PureComponent } from 'react'
import { MDCRipple } from '@material/ripple/dist/mdc.ripple'

// import './Ripple.css'

export default function Ripple(WrappedComponent) {

  return class extends PureComponent {

    constructor(props) {
      super(props)
      this.ripple = null
    }

    componentDidMount = () => {
      if (this.rippleNode.node) {
        this.ripple = new MDCRipple(this.rippleNode.node)
      }
    }

    componentWillUnmount = () => {
      if (this.rippleNode.node) {
        this.ripple.destroy()
      }
    }

    render() {
      return <WrappedComponent ref={node => this.rippleNode = node} {...this.props} />
    }
  }
}