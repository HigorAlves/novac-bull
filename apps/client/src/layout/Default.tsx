import React from 'react'

import Head from 'next/head'
import { ToastContainer } from 'react-toastify'

interface IProps {
	children: React.ReactNode
}

const DefaultLayout = ({ children }: IProps) => (
	<>
		<Head>
			<title>Novac Bull</title>
		</Head>
		<ToastContainer hideProgressBar />
		<main>{children}</main>
	</>
)

export default DefaultLayout
