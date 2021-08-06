import { ActionTypes, IGet, IGetFailure, IGetSuccess } from './types'

export function getUser(): IGet {
  return {
    type: ActionTypes.LOAD_REQUEST
  }
}

export function getSuccess(): IGetSuccess {
  return {
    type: ActionTypes.LOAD_SUCCESS
  }
}

export function getError(): IGetFailure {
  return {
    type: ActionTypes.LOAD_FAILURE
  }
}
