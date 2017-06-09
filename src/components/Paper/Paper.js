import React from 'react'
import classNames from 'classnames'
import { clsElevation } from '../../constants/ui'
import './Paper.css'
const Paper = ({ children, className, style, transition, z = 5 }) =>
  <div
    className={classNames(className, { [`${clsElevation}-transition`]: transition }, `${clsElevation}--z${z}`)}
    style={style}>
    {children}
  </div>
export default Paper
