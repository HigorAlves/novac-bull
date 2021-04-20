import { IUser, IUserPosition } from '@jetpack/interfaces'
import * as Sentry from '@sentry/browser'
import { Severity } from '@sentry/browser'
import { call, put } from 'redux-saga/effects'

import { getUserDataAPI, getUserPositionAPI } from 'services/api/user'
import { openNotification } from 'store/notification/actions'
import {
	getUserDataFailure,
	getUserDataSuccess,
	getUserPositionFailure,
	getUserPositionSuccess
} from 'store/user/actions'

export function* getUserDataSaga(): Generator {
	try {
		const result = yield call(getUserDataAPI)
		if (result) {
			yield put(getUserDataSuccess(result as IUser))
		}
	} catch (e) {
		openNotification({
			open: true,
			type: 'error',
			message: 'Something went wrong'
		})
		yield put(getUserDataFailure())
		Sentry.withScope(scope => {
			scope.setTag('USER', 'GET_DATA')
			scope.setLevel(Severity.Critical)
			Sentry.captureException(e)
		})
	}
}

export function* getUserPosition(): Generator {
	try {
		const result = yield call(getUserPositionAPI)
		if (result) {
			yield put(getUserPositionSuccess(result as IUserPosition))
		}
	} catch (e) {
		openNotification({
			open: true,
			type: 'error',
			message: 'Something went wrong'
		})
		yield put(getUserPositionFailure())
		Sentry.withScope(scope => {
			scope.setTag('USER', 'GET_POSITION')
			scope.setLevel(Severity.Critical)
			Sentry.captureException(e)
		})
	}
}
