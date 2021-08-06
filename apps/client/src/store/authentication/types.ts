export enum ActionTypes {
  LOGIN_REQUEST = '@authentication/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@authentication/LOGIN_SUCCESS',
  LOGIN_FAILURE = '@authentication/LOGIN_FAILURE',
  REGISTER_SUCCESS = '@authentication/REGISTER_SUCCESS',
  REGISTER_REQUEST = '@authentication/REGISTER_REQUEST',
  REGISTER_FAILURE = '@authentication/REGISTER_FAILURE'
}

export interface IReducerState {
  loading: boolean
  error: boolean
  token: any
}

export interface ILogin {
  type: typeof ActionTypes.LOGIN_REQUEST
  payload: {
    username: string
    password: string
  }
}

export interface ILoginSuccess {
  type: typeof ActionTypes.LOGIN_SUCCESS
  payload: {
    token: string
  }
}

export interface ILoginFailure {
  type: typeof ActionTypes.LOGIN_FAILURE
}

export interface IRegisterRequest {
  type: typeof ActionTypes.REGISTER_REQUEST
  payload: {
    username: string
    password: string
  }
}

export interface IRegisterSuccess {
  type: typeof ActionTypes.REGISTER_SUCCESS
}

export interface IRegisterFailure {
  type: typeof ActionTypes.REGISTER_FAILURE
}

export type Actions =
  | ILogin
  | ILoginSuccess
  | ILoginFailure
  | IRegisterRequest
  | IRegisterSuccess
  | IRegisterFailure
