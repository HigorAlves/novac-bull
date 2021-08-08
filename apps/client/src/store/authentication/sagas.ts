import { call, put } from 'redux-saga/effects'

import { loginSuccess, loginFailure, registerSuccessAction } from './actions'
import { login, register } from '~/services/api/user'
import { ILogin, IRegisterRequest } from '~/store/authentication/types'
import { AuthToken } from '~/utils/authToken'

export function* loginUserSaga(action: ILogin): Generator {
	try {
		const { username, password } = action.payload
		const response = yield call(login, username, password)

		if (typeof response === 'string') {
			AuthToken.storeToken(response)
			yield put(loginSuccess(response))
			return
		}

		yield put(loginFailure())
	} catch (e) {
		yield put(loginFailure())
	}
}

export function* registerNewUserSaga(action: IRegisterRequest): Generator {
	try {
		const { username, password } = action.payload
		const response = yield call(register, username, password)

		if (response) {
			yield put(registerSuccessAction())
		}

		yield put(loginFailure())
	} catch (e) {
		yield put(loginFailure())
	}
}
