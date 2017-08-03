import React, { Component } from 'react'

class Button extends Component {
  onClick () {
    console.log('hello')
  }
  render () {
    return (
      <button onClick={this.onClick}>BAAMMMMMM !!</button>
    )
  }
}

export default Button