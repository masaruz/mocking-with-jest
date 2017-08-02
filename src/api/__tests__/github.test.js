import React from 'react'
import ReactDOM from 'react-dom'
/* eslint-env jest */

// This commands loads the mocked request.js as defined in __mocks__/request.js
jest.mock('../request')

const github = require('../github')

// A simple example test
describe('#getUser() using Promises', () => {
  it('should load user data', async () => {
    const data = await github.getUser('vnglst')
    expect(data).toBeDefined()
    expect(data.entity.name).toEqual('Koen van Gilst')
  })
})
