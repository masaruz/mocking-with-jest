import { getUser } from '../api/github'

export const actionType = {
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_FAILURE: 'GET_USER_FAILURE'
}

export const tryGetUser = (id) => {
  return async dispatch => {
    try {
      const user = await getUser(id)
      dispatch(getUserSuccess(user.entity))
    } catch (e) {
      dispatch(getUserFailure())
    }
  }
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