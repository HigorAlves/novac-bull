import React from 'react'

import styles from '~/assets/styles/Home.module.css'
import { Typography } from '~/components'
import withAuth from '~/hooks/withAuth'

function Home() {
	return (
		<div className={styles.container}>
			<Typography as={'h3'}>Some test</Typography>
			<button
				type='button'
				onClick={() => {
					throw new Error('Another test error')
				}}
			>
				CLICAR
			</button>
		</div>
	)
}

export default Home
