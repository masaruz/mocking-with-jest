import React, { Component } from 'react'
import { connect } from 'react-redux'
import { tryGetUser } from '../actions'
import '../css/User.css'

const renderLine = (user, key) => <li key={key}><b>{key}</b>: {user[key]}</li>

class User extends Component {
  componentDidMount () {
    this.props.tryGetUser('vnglst')
  }
  
  render () {
    const { user } = this.props
    return (
      <div className='User'>
        <ul style={{ listStyle: 'none' }}>
          {
            // Loop over the object keys and render each key
            Object.keys(user).map(key => renderLine(user, key))
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    tryGetUser: (id) => {
      dispatch(tryGetUser(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)