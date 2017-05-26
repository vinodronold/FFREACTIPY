import React, { Component } from 'react'
import Header from './containers/Header'
import MenuSideBar from './containers/MenuSideBar'
import TextField from './components/TextField'

class App extends Component {
    render() {
        return (
            <div>
                <MenuSideBar />
                <Header />
                <TextField style={{padding: 10}}/>
            </div>
        )
    }
}

export default App
