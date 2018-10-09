import React, { Component } from 'react';

import { Route , Switch } from 'react-router-dom'

import { LandingPage , SigninPage , SignupPage } from './pages'

const App = () =>{
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/signin" component={SigninPage} />
  </Switch>
}

export default App;
