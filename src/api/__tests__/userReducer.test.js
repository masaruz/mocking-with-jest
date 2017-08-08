import userReducer from 'reducers/userReducer'
import { actionType } from 'actions'

// A simple example test
describe('#getUser()', () => {
  it('should has user data after success', () => {
    const prevState = {}
    const nextState = userReducer(prevState, {
      type: actionType.GET_USER_SUCCESS,
      payload: {
        id: 18,
        name: 'stamp'
      }
    })
    expect(nextState).toEqual({
      id: 18,
      name: 'stamp'
    })
  })
})
