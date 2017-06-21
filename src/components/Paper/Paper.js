import React from 'react'
import classnames from 'classnames'
import { clsElevation } from '../../constants/ui'
import './Paper.css'
const Paper = ({ children, className, style, transition, z = 4 }) =>
  <div
    className={classnames(className, { [`${clsElevation}-transition`]: transition }, `${clsElevation}--z${z}`)}
    style={style}>
    {children}
  </div>
  
export default Paper
