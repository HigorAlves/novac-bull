import { all, takeLatest } from 'redux-saga/effects'

import { ActionTypes as Authentication } from './authentication/types'
import { loadUserData } from './user/sagas'
import { ActionTypes as UserActionTypes } from './user/types'
import {
  loginUserSaga,
  registerNewUserSaga
} from '~/store/authentication/sagas'

export function* rootSaga(): Generator {
  return yield all([
    takeLatest(UserActionTypes.LOAD_REQUEST, loadUserData),
    takeLatest(Authentication.LOGIN_REQUEST, loginUserSaga),
    takeLatest(Authentication.REGISTER_REQUEST, registerNewUserSaga)
  ])
}
