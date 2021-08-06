import React from 'react'

import styles from '~/assets/styles/Home.module.css'
import { Button } from '~/components'

function Home() {
	return (
		<div className={styles.container}>
			<Button />
		</div>
	)
}

// export default withAuth(Home)
export default Home
