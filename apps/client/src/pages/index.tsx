import React from 'react'

import styles from '~/assets/styles/Home.module.css'
import { Button, Steps, Typography } from '~/components'

function Home() {
	return (
		<div className={styles.container}>
			<Typography as={'h3'}>Some test</Typography>
			<Button size={'md'} variant={'secondary'}>
				Clicar
			</Button>
		</div>
	)
}

export default Home
