import React from 'react'

import * as Sentry from '@sentry/react'
import { useDispatch } from 'react-redux'
import { Redirect, Route, useHistory } from 'react-router'

import { verifyLogin } from 'store/authentication/actions'

const SentryRoute = Sentry.withSentryRouting(Route as any)

export function PrivateRoute({ ...routeProps }) {
	const dispatch = useDispatch()
	const history = useHistory()

	function isValid() {
		const token = localStorage.getItem('token')
		dispatch(verifyLogin(history, token as string))
		return !!token
	}

	return isValid() ? <SentryRoute {...routeProps} /> : <Redirect to='/' />
}
