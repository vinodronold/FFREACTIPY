import React, { Component } from 'react'
import Header from './containers/Header'
import MenuSideBar from './containers/MenuSideBar'
import ChordsPlayer from './containers/ChordsPlayer'
import ChordsList from './containers/ChordsList'
import Typography from './components/Typography'

class App extends Component {
  render() {
    return (
      <Typography>
        <MenuSideBar />
        <Header />
        <ChordsList />
        <ChordsPlayer />
      </Typography>
    )
  }
}

export default App
