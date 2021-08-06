import React from 'react'

import '~/assets/styles/globals.css'
import type { AppProps } from 'next/app'

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
