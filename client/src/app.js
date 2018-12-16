import React from 'react'
import ReactDOM from 'react-dom'
import Layout from '../../components/Layout'
import 'normalize.css/normalize.css'
import './styles/app.scss'

import { BrowserRouter } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'))
