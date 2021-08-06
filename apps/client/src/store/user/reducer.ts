import { Reducer } from 'redux'

import { Actions, ActionTypes, IReducerState } from './types'

const INITIAL_STATE: IReducerState = {
  data: null,
  error: false,
  loading: false
}

export const reducer: Reducer<IReducerState, Actions> = (
  state = INITIAL_STATE,
  action: Actions
) => {
  switch (action.type) {
    case ActionTypes.LOAD_REQUEST:
      return { ...state, loading: true }
    case ActionTypes.LOAD_SUCCESS:
      return { ...state, loading: false }
    case ActionTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}
