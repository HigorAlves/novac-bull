import React from 'react'

import Head from 'next/head'

import { AppBar } from '~/components'

interface IProps {
	children: React.ReactNode
}

export default function DashboardLayout({ children }: IProps) {
	return (
		<span className='dashboard'>
			<Head>
				<title>Dashboard - Novac Bull</title>
			</Head>

			<AppBar />
			<main>{children}</main>

			{/* <Footer /> */}
		</span>
	)
}
