import React, { Fragment } from 'react'

const Login = () => (
  <Fragment>
    <section className="user">
      <div className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="msg-welcome">
                <p>user area</p>
              </div>
              <form action="" className="form-login">
                <div className="log-user">
                  <label for="">username</label>
                  <input type="text" />
                </div>
                <div className="log-pass">
                  <label for="">password</label>
                  <input type="password" />
                </div>
              </form>

              <div className="save">
                <button className="btn-big">login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
)

export default Login
