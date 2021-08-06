import React from 'react'

import styles from '~/assets/styles/Home.module.css'
import { Input } from '~/components'

function Home() {
	return (
		<div className={styles.container}>
			<Input placeholder={'higor alves @gmail.com'} />
		</div>
	)
}

// export default withAuth(Home)
export default Home
