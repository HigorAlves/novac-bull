import React from 'react'

import styles from '~/assets/styles/Home.module.css'
import { Steps, Typography } from '~/components'

const listOfSteps = [
	{ name: 'Step 1', status: 'complete' },
	{ name: 'Step 2', status: 'complete' },
	{ name: 'Step 3', status: 'current' },
	{ name: 'Step 4', status: 'upcoming' },
	{ name: 'Step 5', status: 'upcoming' }
]

function Home() {
	return (
		<div className={styles.container}>
			<Typography as={'h3'}>Some test</Typography>
			<Steps steps={listOfSteps} />
		</div>
	)
}

export default Home
