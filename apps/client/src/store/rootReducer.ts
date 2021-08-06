import { combineReducers } from 'redux'

import { reducer as authReducer } from './authentication/reducer'
import { reducer as userReducer } from './user/reducer'

export const rootReducer = combineReducers({
  user: userReducer,
  authentication: authReducer
})

export type RootState = ReturnType<typeof rootReducer>
