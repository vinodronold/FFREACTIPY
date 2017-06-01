import React from 'react'
import { clsTypography } from '../../constants/ui'
import classNames from 'classnames'

import './Typography.css'

const Typography = ({ className, children, ...rest }) => (
  <div className={classNames(className, clsTypography)} {...rest}> {children} </div>
)

export default Typography