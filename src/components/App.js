import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../containers/Header'
import MenuSideBar from '../containers/MenuSideBar'
import Typography from '../components/Typography'
import Routes from './Routes'

const App = () =>
  <Router>
    <Typography>
      <MenuSideBar />
      <Header />
      <Routes />
    </Typography>
  </Router>
export default App
