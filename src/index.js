import React from 'react'
import ReactDOM from 'react-dom'
import Raven from 'raven-js'
import './index.css'
import App from './containers/App'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(reducer, applyMiddleware(thunk, logger))

Raven.config('https://f4d2108c87104ac3b08644313256b371@sentry.io/199054').install()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
