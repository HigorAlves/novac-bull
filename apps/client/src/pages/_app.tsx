import '~/assets/styles/globals.css'
import React from 'react'

import type { AppProps } from 'next/app'

import LayoutWrapper from '~/layout'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<LayoutWrapper {...pageProps}>
			<Component {...pageProps} />
		</LayoutWrapper>
	)
}
export default MyApp
