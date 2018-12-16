import express from 'express'

import path from 'path'
import React from 'react'

// react ssr
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import Layout from '../../components/Layout'

const app = express()

// express app - server side rendering related
app.use(express.static(path.resolve(__dirname, '../../client/public')))

app.get('/*', (req, res) => {
  const context = {}
  const App = (
    <StaticRouter context={context} location={req.url}>
      <Layout />
    </StaticRouter>
  )

  const content = renderToString(App)
  const html = <Html content={content} />

  res.status(200)
  res.send(`<!DOCTYPE html>\n${renderToStaticMarkup(html)}`)
  res.end()
})

app.listen(process.env.PORT || 3000, () => {
  console.log('app is running!')
})

const Html = ({ content }) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Blogexample Frontend</title>
        <link rel="stylesheet" type="text/css" href="/styles.css" />
      </head>

      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: content }} />

        <script type="text/javascript" src="./bundle.js" />
      </body>
    </html>
  )
}
