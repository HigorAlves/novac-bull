import { put } from 'redux-saga/effects'

import { getError, getSuccess } from '~/store/user/actions'

export function* loadUserData() {
  try {
    yield put(getSuccess())
  } catch (e) {
    console.error(e)
    yield put(getError())
  }
}
