import thunk from 'redux-thunk'
import reducer from '../../reducers'

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn()

  const invoke = action => thunk(store)(next)(action)

  return {store, next, invoke}
}

it(`passes through non-function action`, () => {
  const { next, invoke } = create()
  const action = {type: 'TEST'}
  invoke(action)
  expect(next).toHaveBeenCalledWith(action)
})

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      user: {}
    })
  })
})