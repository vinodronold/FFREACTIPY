import React, { Component } from 'react'
import Header from './containers/Header'
import MenuSideBar from './containers/MenuSideBar'
import Typography, { Display4, Display3, Display2, Display1, Title, Headline, SubHeading2, SubHeading1, Body2, Body1, Caption } from './components/Typography'
//import TextField from './components/TextField'

class App extends Component {
  render() {
    return (
      <Typography>
        <MenuSideBar />
        <Header />
        <br />
        <br />
        <br />
        <Display4>Display4</Display4>
        <Display3>Display3</Display3>
        <Display2>Display2</Display2>
        <Display1>Display1</Display1>
        <Title>Title</Title>
        <Headline>Headline</Headline>
        <SubHeading2>SubHeading2</SubHeading2>
        <SubHeading1>SubHeading1</SubHeading1>
        <Body2>Body2</Body2>
        <Body1>Body1</Body1>
        <Caption>Caption</Caption>
      </Typography>
    )
  }
}

export default App
