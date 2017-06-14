import React, { Component } from 'react'
import Header from './containers/Header'
import MenuSideBar from './containers/MenuSideBar'
import ChordsPlayer from './containers/ChordsPlayer'
import Typography from './components/Typography'

class App extends Component {
  render() {
    return (
      <Typography>
        <MenuSideBar />
        <Header />
        <ChordsPlayer />
      </Typography>
    )
  }
}

export default App
