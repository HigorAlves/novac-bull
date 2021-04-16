import React from 'react'

import * as Sentry from '@sentry/react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { HomePage, MyAccount } from 'pages'

const SentryRoute = Sentry.withSentryRouting(Route as any)

export default function Routes(): JSX.Element {
	return (
		<BrowserRouter>
			<Switch>
				<SentryRoute path='/dashboard'>
					<MyAccount />
				</SentryRoute>
				<SentryRoute path='/'>
					<HomePage />
				</SentryRoute>
			</Switch>
		</BrowserRouter>
	)
}
