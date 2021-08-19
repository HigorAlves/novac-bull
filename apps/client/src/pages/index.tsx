import React, { useState } from 'react'

import styles from '~/assets/styles/Home.module.css'
import { Button, Select, Steps, Typography } from '~/components'

const people = [
	{ id: 1, text: 'Wade Cooper' },
	{ id: 2, text: 'Arlene Mccoy' },
	{ id: 3, text: 'Devon Webb' },
	{ id: 4, text: 'Tom Cook' },
	{ id: 5, text: 'Tanya Fox' },
	{ id: 6, text: 'Hellen Schmidt' },
	{ id: 7, text: 'Caroline Schultz' },
	{ id: 8, text: 'Mason Heaney' },
	{ id: 9, text: 'Claudie Smitham' },
	{ id: 10, text: 'Emil Schaefer' }
]

function Home() {
	const [selected, setSelected] = useState(people[0])
	return (
		<div className={styles.container}>
			<Typography as={'h3'}>Some test</Typography>
			<Select
				options={people}
				label={'Select menu'}
				setSelected={setSelected}
				value={selected}
			/>
		</div>
	)
}

export default Home
