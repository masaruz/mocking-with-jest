import { actionType } from 'actions'

export default (state={}, action) => {
  switch (action.type) {
    case actionType.GET_USER_SUCCESS:
      return action.payload
    default:
      return state
  }
}