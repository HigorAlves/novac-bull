export enum ActionTypes {
  LOAD_REQUEST = '@user/LOAD_REQUEST',
  LOAD_SUCCESS = '@user/LOAD_SUCCESS',
  LOAD_FAILURE = '@user/LOAD_FAILURE'
}

export interface IReducerState {
  loading: boolean
  error: boolean
  data: any
}

export interface IGet {
  type: typeof ActionTypes.LOAD_REQUEST
}

export interface IGetSuccess {
  type: typeof ActionTypes.LOAD_SUCCESS
}

export interface IGetFailure {
  type: typeof ActionTypes.LOAD_FAILURE
}

export type Actions = IGet | IGetSuccess | IGetFailure
