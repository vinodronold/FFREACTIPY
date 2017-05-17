import React from 'react'
import Toolbar from './ui/Toolbar'

const Header = () => {
    return (
        <Toolbar  onClick={() => (console.log('clicked ! ! ! '))} />
    )
}

export default Header