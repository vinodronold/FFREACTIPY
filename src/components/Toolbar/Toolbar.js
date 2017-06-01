import React from 'react'
import classNames from 'classnames'
import { materialIcon, clsToolbar } from '../../constants/ui'
import './Toolbar.css'

const Toolbar = ({ header, toggleDrawer }) => {
  return (
    <div>
      <header className={classNames([`${clsToolbar}`, `${clsToolbar}--fixed`])}>
        <div className={`${clsToolbar}__row`}>
          <section
            className={classNames(
              `${clsToolbar}__section`,
              `${clsToolbar}__section--align-start`,
              `${clsToolbar}__section--shrink-to-fit`
            )}>
            <a className={materialIcon} onClick={toggleDrawer}>menu</a>
            <span className={`${clsToolbar}__title`}>{header}</span>
          </section>
          <section className={classNames([`${clsToolbar}__section`, `${clsToolbar}__section--align-end`])}>
            <a className={materialIcon} aria-label="More Options" alt="options">more_vert</a>
          </section>
        </div>
      </header>
      <div className={`${clsToolbar}-fixed-adjust`} />
    </div>
  )
}

export default Toolbar
