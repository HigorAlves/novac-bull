import React, {
	ComponentType,
	lazy,
	LazyExoticComponent,
	ReactNode
} from 'react'

import { BrowserRouter } from 'react-router-dom'

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
		fallback: <div> Loading... </div>,
		component: lazy(() => import('../pages/home/Home'))
	},
	{
		path: '/register',
		exact: true,
		fallback: <div> Loading... </div>,
		component: lazy(() => import('../pages/home/Home'))
	},
	{
		path: '/',
		exact: true,
		fallback: <div> Loading... </div>,
		component: lazy(() => import('../pages/home/Home'))
	},
	{
		path: '*',
		exact: false,
		private: false,
		fallback: <div> Loading... </div>,
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
