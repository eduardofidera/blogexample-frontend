import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <div className="container">
      <div className="main-menu --desk">
        <Link to="/">
          <div className="menu-logo" />
        </Link>
        <div className="menu-items">
          <span>politics</span>
          <span>business</span>
          <span>tech</span>
          <span>science</span>
          <span>sports</span>
          <Link to="/login">
            <span>login</span>
          </Link>
        </div>
      </div>
      <div className="main-menu --mob">
        <div className="menu-mob" />
        <div className="menu-logo" />
        <div className="menu-items-mob">
          <span>politics</span>
          <span>business</span>
          <span>tech</span>
          <span>science</span>
          <span>sports</span>
          <span>login</span>
        </div>
      </div>
    </div>
  </header>
)

export default Header
