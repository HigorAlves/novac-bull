import React, {
	ComponentType,
	lazy,
	LazyExoticComponent,
	ReactNode
} from 'react'

import { BrowserRouter } from 'react-router-dom'

import { PageLoader } from 'containers'
import Router from 'router/Router'

export interface IRoute {
	path: string
	exact: boolean
	fallback: NonNullable<ReactNode> | null
	component?: LazyExoticComponent<ComponentType<any>> | any
	routes?: IRoute[]
	redirect?: string
	private?: boolean
}

export const ROUTES: IRoute[] = [
	{
		path: '/login',
		exact: true,
		fallback: <PageLoader />,
		component: lazy(() => import('../pages/home/Home'))
	},
	{
		path: '/register',
		exact: true,
		fallback: <PageLoader />,
		component: lazy(() => import('../pages/home/Home'))
	},
	{
		path: '/dashboard',
		exact: true,
		fallback: <PageLoader />,
		private: true,
		component: lazy(() => import('pages/Dashboard/Home'))
	},
	{
		path: '/',
		exact: true,
		fallback: <PageLoader />,
		component: lazy(() => import('../pages/home/Home'))
	},
	{
		path: '*',
		exact: false,
		private: false,
		fallback: <PageLoader />,
		component: lazy(() => import('pages/404'))
	}
]

export default function Routes(): JSX.Element {
	return (
		<BrowserRouter>
			<Router routes={ROUTES} />
		</BrowserRouter>
	)
}
