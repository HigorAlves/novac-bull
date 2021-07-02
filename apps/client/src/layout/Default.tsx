import React from 'react'

import Head from 'next/head'

import { AppBar } from '~/components'

interface IProps {
	children: React.ReactNode
}

const DefaultLayout = ({ children }: IProps) => (
	<>
		<Head>
			<title>Novac Bull - Login</title>
		</Head>

		<AppBar />

		<main>{children}</main>
	</>
)

export default DefaultLayout
