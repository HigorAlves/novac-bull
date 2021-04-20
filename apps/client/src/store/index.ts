import * as Sentry from '@sentry/react'
import { applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import { IUserState } from 'store/user/types'

import { IAuthenticationState } from './authentication/types'
import { NotificationState } from './notification/types'
import { rootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'

export interface AppState {
	authentication: IAuthenticationState
	notification: NotificationState
	user: IUserState
}

const sagaMiddleware = createSagaMiddleware()

const sentryReduxEnhancer = Sentry.createReduxEnhancer()

const composeEnhancers = composeWithDevTools({
	// Specify here name, actionsBlacklist, actionsCreators and other options
})

export const store: Store<AppState> = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(sagaMiddleware), sentryReduxEnhancer)
)

sagaMiddleware.run(rootSaga)
