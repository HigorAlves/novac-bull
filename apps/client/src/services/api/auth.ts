import { ILogin, IResponse, IUser } from '@jetpack/interfaces'
import { Severity } from '@sentry/browser'
import * as Sentry from '@sentry/browser'

import api from './api'

export async function isTokenValid(token: string): Promise<boolean> {
	const { data } = await api.post('/auth/verifytoken', {
		token
	})

	return data.data as boolean
}

export async function loginAPI(payload: ILogin): Promise<string | boolean> {
	const { email, password } = payload
	try {
		const { data }: { data: IResponse<void> } = await api.post('/auth/login', {
			email,
			password
		})

		return data.token as string
	} catch (e) {
		Sentry.withScope(scope => {
			scope.setTag('AUTHENTICATION', 'LOGIN')
			scope.setLevel(Severity.Critical)
			scope.setUser({ email })
			Sentry.captureException(e)
		})
		return false
	}
}

export async function registerUser(user: IUser): Promise<boolean> {
	try {
		const { status }: IResponse<void> = await api.post('/auth/register', user)
		return status === 201
	} catch (e) {
		Sentry.withScope(scope => {
			scope.setTag('authentication', 'register')
			scope.setLevel(Severity.Critical)
			scope.setUser({
				email: user.email
			})
			Sentry.captureException(e)
		})
		return false
	}
}
