import React from 'react'
import { Route } from 'react-router-dom'
import ChordsList from '../containers/ChordsList'
import ChordsPlayer from '../containers/ChordsPlayer'

const Routes = () =>
  <div>
    <Route exact path="/" component={ChordsList} />
    <Route path="/play/:id" component={ChordsPlayer} />
  </div>

export default Routes
