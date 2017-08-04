import { actionType } from '../actions'

export default (state='', action) => {
  switch (action.type) {
    case actionType.TYPE_TEXT:
      return state.concat(action.payload)
    case actionType.SET_TEXT:
      return action.payload
    default:
      return state
  }
}