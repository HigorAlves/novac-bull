import * as Sentry from '@sentry/browser'
import { Severity } from '@sentry/browser'
import { call, put } from 'redux-saga/effects'

import { isTokenValid } from 'services/api/auth'
import { ILogin, IRegister, IVerifyLogin } from 'store/authentication/types'
import { openNotification } from 'store/notification/actions'

import { loggedIn, registerSuccess } from './actions'

export function* login(action: ILogin) {
	const { payload } = action
	try {
		yield call(console.log, payload)
		yield put(
			openNotification({
				open: true,
				type: 'success',
				message: 'Usuario logado com sucesso, redirecionando para dashboard'
			})
		)
		yield put(loggedIn('asd'))
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

export function* register(action: IRegister) {
	const { payload } = action
	try {
		yield call(console.log, payload)
		yield put(
			openNotification({
				open: true,
				type: 'success',
				message: 'New user registred, taking you to dashboard!'
			})
		)
		yield put(registerSuccess('asd'))
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
