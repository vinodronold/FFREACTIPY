import React, { Component } from 'react'
import Header from './containers/Header'
import MenuSideBar from './containers/MenuSideBar'

class App extends Component {
    render() {
        return (
            <div>
                <MenuSideBar />
                <Header />
            </div>
        )
    }
}

export default App
