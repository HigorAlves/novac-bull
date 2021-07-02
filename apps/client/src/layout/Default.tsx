import React from 'react'

import Head from 'next/head'

import HomeAppbar from '~/components/appbars/HomeAppbar.component'

interface IProps {
	children: React.ReactNode
}

const DefaultLayout = ({ children }: IProps) => (
	<>
		<Head>
			<title>Novac Bull - Login</title>
		</Head>
		<HomeAppbar />

		<main className='text-white-400 bg-white-900 body-font h-screen pt-6'>
			{children}
		</main>
	</>
)

export default DefaultLayout
