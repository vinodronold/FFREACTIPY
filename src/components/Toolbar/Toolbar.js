import React from 'react'
import classNames from 'classnames'
import { clsToolbar, clsTheme } from '../../constants/ui'
import Icon from '../Icons'
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
            <Icon i={'menu'} onClick={toggleDrawer} />
          </section>
          <section className={classNames([`${clsToolbar}__section`, `${clsToolbar}__section--align-end`])}>
            {toolbar.buttons.map(b =>
              <Button className={`${clsTheme}--text-primary-on-primary`} key={b.label}>{b.label}</Button>
            )}
            <Icon i={'more_vert'} onClick={() => {console.log('more_vert')}}/>
          </section>
        </div>
      </header>
      <div className={`${clsToolbar}-fixed-adjust`} />
      <div style={{ padding: 10 }} />
    </div>
  )
}

export default Toolbar
