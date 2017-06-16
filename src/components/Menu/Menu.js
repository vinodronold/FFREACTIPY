import React, { Component } from 'react'

import './Menu.css'

class Menu extends Component {
  render() {
    return (
      <div className="mdc-simple-menu" tabindex="-1">
        <ul className="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
          <li className="mdc-list-item" role="menuitem" tabindex="0">
            A Menu Item
          </li>
          <li className="mdc-list-item" role="menuitem" tabindex="0">
            Another Menu Item
          </li>
        </ul>
      </div>
    )
  }
}
