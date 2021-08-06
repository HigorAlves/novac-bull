import { createWrapper } from 'next-redux-wrapper'
import { applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'
import { IReducerState as IUserState } from './user/types'

export interface AppState {
  user: IUserState
}

const sagaMiddleware = createSagaMiddleware()

export const store: Store<AppState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

const makeStore = () => store

export const storeWrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === 'production'
})

sagaMiddleware.run(rootSaga)
