import React from 'react'

import styles from '~/assets/styles/Home.module.css'
import withAuth from '~/hooks/withAuth'

function Home() {
	return <div className={styles.container} />
}

export default withAuth(Home)
