import React from 'react'
import classNames from 'classnames'
import { materialIcon, clsToolbar, clsTheme } from '../../constants/ui'
import Button from '../Button'
import './Toolbar.css'

const Toolbar = ({ toolbar, toggleDrawer }) => {
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
            <a className={classNames(materialIcon, 'md-36')} onClick={toggleDrawer}>menu</a>
          </section>
          <section className={classNames([`${clsToolbar}__section`, `${clsToolbar}__section--align-end`])}>
            {toolbar.buttons.map(b =>
              <Button className={`${clsTheme}--text-primary-on-primary`} key={b.label}>{b.label}</Button>
            )}
            <a className={classNames(materialIcon, 'md-36')} aria-label="More Options" alt="options">more_vert</a>
          </section>
        </div>
      </header>
      <div className={`${clsToolbar}-fixed-adjust`} />
      <div style={{ padding: 10 }} />
    </div>
  )
}

export default Toolbar
