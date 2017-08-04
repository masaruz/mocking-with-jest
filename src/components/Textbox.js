import React from 'react'

export default ({ text, typeText }) => (
  <form>
    <input onChange={typeText} type='text' value={text}/>
  </form>
)