import React from 'react'
import ReactDOM from 'react-dom'
import Raven from 'raven-js'
import './index.css'
import App from './components/App'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, /* preloadedState, */ 
  composeEnhancers(applyMiddleware(thunk)))

Raven.config('https://f4d2108c87104ac3b08644313256b371@sentry.io/199054').install()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
