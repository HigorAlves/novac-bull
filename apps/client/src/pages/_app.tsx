import React from 'react'

import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'

import 'react-toastify/dist/ReactToastify.min.css'

import LayoutWrapper from '~/layout'
import { storeWrapper } from '~/store'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<LayoutWrapper {...pageProps}>
			<Component {...pageProps} />
		</LayoutWrapper>
	)
}

export default storeWrapper.withRedux(MyApp)
