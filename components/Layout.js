import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Header from './Header'
import User from './User'

const Layout = () => (
  <div className="app-wrapper">
    <Header />

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/user" exact component={User} />
    </Switch>
  </div>
)

export default Layout
