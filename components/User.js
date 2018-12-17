import React from 'react'

import { Link } from 'react-router-dom'

const User = () => (
  <section className="user">
    <div className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="msg-welcome">
              <p>
                Welcome, <div className="-blue"> Username</div>
              </p>
            </div>
            <div className="my-interests">
              <p>my interests</p>
            </div>
            <div className="main-btn">
              <button className="btn --red">politics</button>
              <button className="btn --purple">business</button>
              <button className="btn --blue">tech</button>
              <button className="btn --green">science</button>
              <button className="btn --orange">sports</button>
            </div>
            <div className="save">
              <button className="btn-big">save</button>
            </div>
            <div className="backhome">
              <Link to="/">
                <button className="btn-bh">back to home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default User
