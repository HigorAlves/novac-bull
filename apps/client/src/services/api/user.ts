import { IResponse, IUser, IUserPosition } from '@jetpack/interfaces'
import { Severity } from '@sentry/browser'
import * as Sentry from '@sentry/browser'

import api from './api'

export async function getUserDataAPI(): Promise<IUser | boolean> {
	try {
		const { data }: { data: IResponse<IUser> } = await api.get('/user')
		return data.data as IUser
	} catch (e) {
		Sentry.withScope(scope => {
			scope.setTag('USER', 'GET_DATA')
			scope.setLevel(Severity.Critical)
			Sentry.captureException(e)
		})
		return false
	}
}

export async function getUserPositionAPI(): Promise<IUserPosition | null> {
	try {
		const { data }: { data: IResponse<IUserPosition> } = await api.get(
			'/user/position'
		)
		return data.data as IUserPosition
	} catch (e) {
		Sentry.withScope(scope => {
			scope.setTag('USER', 'GET_POSITION')
			scope.setLevel(Severity.Critical)
			Sentry.captureException(e)
		})
		return null
	}
}
