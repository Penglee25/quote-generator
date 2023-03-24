import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route } from 'wouter'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.Fragment>
    <Route path='/'>
      <App />
    </Route>
    <Route path="/list/:author">
      {(params) => <App author={params.author ?? ''} />}
    </Route>
  </React.Fragment>,
)
