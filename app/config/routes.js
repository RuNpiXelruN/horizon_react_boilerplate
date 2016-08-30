import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { MainContainer, WelcomeContainer, DashboardContainer, LoginContainer } from 'containers'


const routes = (
  <Router history={hashHistory} >
    <Router path='/' component={MainContainer} >
      <Route path='dashboard' component={DashboardContainer} />
      <Route path='login' component={LoginContainer} />
      <IndexRoute component={WelcomeContainer} />
    </Router >
  </Router>
)

export default routes
