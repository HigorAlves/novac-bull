import { IUser, IUserPosition } from '@jetpack/interfaces'

import * as Types from './types'

export function getUserData(): Types.IGetData {
	return {
		type: Types.UserActionTypes.GET_DATA
	}
}

export function getUserDataSuccess(data: IUser): Types.IGetDataSuccess {
	return {
		type: Types.UserActionTypes.GET_DATA_SUCCESS,
		payload: data
	}
}

export function getUserDataFailure(): Types.IGetDataFailure {
	return {
		type: Types.UserActionTypes.GET_DATA_FAILURE
	}
}

export function getUserPosition(): Types.IGetPosition {
	return {
		type: Types.UserActionTypes.GET_POSITION
	}
}

export function getUserPositionSuccess(
	data: IUserPosition
): Types.IGetPositionSuccess {
	return {
		type: Types.UserActionTypes.GET_POSITION_SUCCESS,
		payload: data
	}
}

export function getUserPositionFailure(): Types.IGetPositionFailure {
	return {
		type: Types.UserActionTypes.GET_POSITION_FAILURE
	}
}
