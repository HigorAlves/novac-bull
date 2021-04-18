import React, { Suspense } from 'react'

import * as Sentry from '@sentry/react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { Redirect, Route } from 'react-router-dom'

import { IRoute } from 'router'
import { verifyLogin } from 'store/authentication/actions'

const SentryRoute = Sentry.withSentryRouting(Route as any)

const RouteWithSubRoutes = (route: IRoute) => {
	const dispatch = useDispatch()
	const history = useHistory()

	function isValid() {
		const token = localStorage.getItem('token')
		dispatch(verifyLogin(history, token as string))
		return !!token
	}

	function render(props: any) {
		const Component = route.component

		if (route.private) {
			const hasToken = isValid()
			if (hasToken) {
				return <Component {...props} routes={route.routes} />
			} else {
				return <Redirect to={route.redirect as string} />
			}
		} else {
			return <Component {...props} routes={route.routes} />
		}
	}

	return (
		<Suspense fallback={route.fallback}>
			<SentryRoute path={route.path} render={render} />
		</Suspense>
	)
}

export default RouteWithSubRoutes
