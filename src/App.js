import React from 'react';

import { Route , Switch } from 'react-router-dom'

import { LandingPage , SigninPage , SignupPage } from './pages'
const App = () =>(
  <Switch>
    <Route path="/" exact  component={LandingPage} />
    <Route path="/signup" exact component={SignupPage} /> 
    <Route path="/signin" exact component={SigninPage} /> 
  </Switch>
)

export default App;
 