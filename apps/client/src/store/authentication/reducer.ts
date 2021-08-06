import { Reducer } from 'redux'

import { Actions, ActionTypes, IReducerState } from './types'

const INITIAL_STATE: IReducerState = {
  error: false,
  loading: false,
  token: null
}

export const reducer: Reducer<IReducerState, Actions> = (
  state = INITIAL_STATE,
  action: Actions
) => {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return { ...state, loading: true }
    case ActionTypes.LOGIN_SUCCESS:
      return { ...state, loading: false, token: action.payload.token }
    case ActionTypes.LOGIN_FAILURE:
      return { ...state, loading: false, error: true }
    case ActionTypes.REGISTER_REQUEST:
      return { ...state, loading: true }
    case ActionTypes.REGISTER_SUCCESS:
      return { ...state, loading: false }
    case ActionTypes.REGISTER_FAILURE:
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}
