import * as Sentry from '@sentry/browser'
import { Severity } from '@sentry/browser'
import { call, put } from 'redux-saga/effects'

import { isTokenValid, loginAPI, registerUser } from 'services/api/auth'
import { ILogin, IRegister, IVerifyLogin } from 'store/authentication/types'
import { openNotification } from 'store/notification/actions'
import { getUserData } from 'store/user/actions'

import { errorLogin, errorRegister, loggedIn, registerSuccess } from './actions'

export function* login(action: ILogin): Generator {
	const { payload } = action
	const loginData = {
		email: payload.email,
		password: payload.password
	}
	try {
		const result = yield call(loginAPI, loginData)

		if (result != false) {
			yield put(
				openNotification({
					open: true,
					type: 'success',
					message: 'Logged with success, redirecting you!'
				})
			)
			localStorage.setItem('token', result as string)
			yield put(getUserData())
			yield put(loggedIn(result as string))
			payload.history.push('/dashboard')
		} else {
			yield put(errorLogin())
			yield put(
				openNotification({
					open: true,
					type: 'warning',
					message: 'Your user or password is wrong'
				})
			)
		}
	} catch (error) {
		openNotification({
			open: true,
			type: 'error',
			message: 'Something went wrong'
		})
		Sentry.withScope(scope => {
			scope.setTag('authentication', 'login')
			scope.setLevel(Severity.Critical)
			scope.setUser({
				email: payload.email
			})
			Sentry.captureException(error)
		})
	}
}

export function* register(action: IRegister): Generator {
	const { payload } = action
	try {
		const result = yield call(registerUser, payload)

		if (result) {
			yield put(
				openNotification({
					open: true,
					type: 'success',
					message: 'New user registred, taking you to dashboard!'
				})
			)
			yield put(registerSuccess('asd'))
		} else {
			yield put(
				openNotification({
					open: true,
					type: 'error',
					message: 'This user is already registered!'
				})
			)
			yield put(errorRegister())
		}
	} catch (error) {
		openNotification({
			open: true,
			type: 'error',
			message: 'Something went wrong'
		})
		Sentry.withScope(scope => {
			scope.setTag('authentication', 'login')
			scope.setLevel(Severity.Critical)
			scope.setUser({
				email: payload.email
			})
			Sentry.captureException(error)
		})
	}
}

export function* verifyLogin(action: IVerifyLogin): Generator {
	const { payload } = action
	try {
		const isValid = yield call(isTokenValid, payload.token)
		if (!isValid) {
			payload.history.push('/')
		}
	} catch (e) {
		openNotification({
			open: true,
			type: 'error',
			message: 'Something went wrong'
		})
		Sentry.withScope(scope => {
			scope.setTag('authentication', 'login')
			scope.setLevel(Severity.Critical)

			Sentry.captureException(e)
		})
	}
}
