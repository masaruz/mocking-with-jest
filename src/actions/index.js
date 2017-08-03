export const actionType = {
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_FAILURE: 'GET_USER_FAILURE'
}

export const getUserSuccess = user => {
  return {
    type: actionType.GET_USER_SUCCESS,
    payload: user
  }
}

export const getUserFailure = () => {
  return {
    type: actionType.GET_USER_FAILURE
  }
}