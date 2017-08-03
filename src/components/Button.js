import React, { Component } from 'react'

class Button extends Component {
  onClick () {
    throw new Error('BAAMMMMMMMM BAAMMMMMMMMM !!')
  }
  render () {
    return (
      <button onClick={this.onClick}>BAAMMMMMM !!</button>
    )
  }
}

export default Button