import { all, takeLatest } from 'redux-saga/effects'

import { getUserDataSaga, getUserPosition } from 'store/user/sagas'
import { UserActionTypes } from 'store/user/types'

import { login, register, verifyLogin } from './authentication/sagas'
import { AuthenticationActionTypes } from './authentication/types'

export function* rootSaga(): any {
	return yield all([
		takeLatest(AuthenticationActionTypes.LOGIN, login),
		takeLatest(AuthenticationActionTypes.REGISTER, register),
		takeLatest(AuthenticationActionTypes.VERIFY_LOGIN, verifyLogin),
		takeLatest(UserActionTypes.GET_DATA, getUserDataSaga),
		takeLatest(UserActionTypes.GET_POSITION, getUserPosition)
	])
}
