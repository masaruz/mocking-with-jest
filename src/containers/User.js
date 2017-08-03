import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserSuccess, getUserFailure } from '../actions'
import { getUser } from '../api/github'

const renderLine = (user, key) => <li key={key}><b>{key}</b>: {user[key]}</li>

class User extends Component {
  componentDidMount () {
    const { get } = this.props
    get('vnglst')
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
    get: async id => {
      try {
        const user = await getUser(id)
        dispatch(getUserSuccess(user.entity))
      } catch (ee) {
        dispatch(getUserFailure())
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)