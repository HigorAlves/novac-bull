import React from 'react'

import { Container, Grid } from '@material-ui/core'

import { Navbar, PortfolioSummary } from 'components'

export function MyAccount() {
	return (
		<>
			<Navbar />
			<Container style={{ marginTop: 40 }}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<h1>put something here</h1>
					</Grid>
					<Grid item xs={12} md={6}>
						<PortfolioSummary />
					</Grid>
				</Grid>
			</Container>
		</>
	)
}
