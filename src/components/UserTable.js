import React from 'react'
import '../css/User.css'

const renderLine = (user, key) => <li key={key}><b>{key}</b>: {user[key]}</li>

export default ({ user, tryGetUser }) => (
  <div className='User'>
    <button onClick={tryGetUser}>Get User</button>
    <ul style={{ listStyle: 'none' }}>
      {
        // Loop over the object keys and render each key
        Object.keys(user).map(key => renderLine(user, key))
      }
    </ul>
  </div>
)