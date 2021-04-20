import { IUser, IUserPosition } from '@jetpack/interfaces'

export interface IUserState {
	data: IUser | null
	position: IUserPosition | null
	loading: boolean
}

export enum UserActionTypes {
	GET_DATA = '@user/GET_DATA',
	GET_DATA_SUCCESS = '@user/GET_DATA_SUCCESS',
	GET_DATA_FAILURE = '@user/GET_DATA_FAILURE',
	GET_POSITION = '@user/GET_POSITION',
	GET_POSITION_SUCCESS = '@user/GET_POSITION_SUCCESS',
	GET_POSITION_FAILURE = '@user/GET_POSITION_FAILURE'
}

export interface IGetData {
	type: typeof UserActionTypes.GET_DATA
}

export interface IGetDataSuccess {
	type: typeof UserActionTypes.GET_DATA_SUCCESS
	payload: IUser
}

export interface IGetDataFailure {
	type: typeof UserActionTypes.GET_DATA_FAILURE
}

export interface IGetPosition {
	type: typeof UserActionTypes.GET_POSITION
}

export interface IGetPositionSuccess {
	type: typeof UserActionTypes.GET_POSITION_SUCCESS
	payload: IUserPosition
}

export interface IGetPositionFailure {
	type: typeof UserActionTypes.GET_POSITION_FAILURE
}

export type UserActions =
	| IGetData
	| IGetDataSuccess
	| IGetDataFailure
	| IGetPosition
	| IGetPositionSuccess
	| IGetPositionFailure
