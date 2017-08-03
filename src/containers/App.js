import React, { Component } from 'react'
import User from './User'
import Button from '../components/Button'

class App extends Component {
  render () {
    return (
      <div>
        <User />
        <center><Button /></center>
        <center><Button /></center>
      </div>
    )
  }
}

export default App