import { all, takeLatest } from 'redux-saga/effects'

import { login, register } from './authentication/sagas'
import { AuthenticationActionTypes } from './authentication/types'

export function* rootSaga(): any {
	return yield all([
		takeLatest(AuthenticationActionTypes.LOGIN, login),
		takeLatest(AuthenticationActionTypes.REGISTER, register)
	])
}
