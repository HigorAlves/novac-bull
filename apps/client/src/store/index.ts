import * as Sentry from '@sentry/react'
import { applyMiddleware, createStore, Store, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { IAuthenticationState } from './authentication/types'
import { NotificationState } from './notification/types'
import { rootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'

export interface AppState {
	authentication: IAuthenticationState
	notification: NotificationState
}

const sagaMiddleware = createSagaMiddleware()

const sentryReduxEnhancer = Sentry.createReduxEnhancer()

export const store: Store<AppState> = createStore(
	rootReducer,
	compose(applyMiddleware(sagaMiddleware), sentryReduxEnhancer)
)

sagaMiddleware.run(rootSaga)
