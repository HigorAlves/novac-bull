import { combineReducers } from 'redux'

import { userReducer } from 'store/user/reducer'

import { authenticationReducer } from './authentication/reducer'
import { notificationReducer } from './notification/reducer'

export const rootReducer = combineReducers({
	authentication: authenticationReducer,
	notification: notificationReducer,
	user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>
