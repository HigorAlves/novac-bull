import { combineReducers } from 'redux'

import { authenticationReducer } from './authentication/reducer'
import { notificationReducer } from './notification/reducer'

export const rootReducer = combineReducers({
	authentication: authenticationReducer,
	notification: notificationReducer
})

export type RootState = ReturnType<typeof rootReducer>
