import React from 'react'

import { Container, Grid } from '@material-ui/core'

import { Banner, Navbar, Status } from 'components'

export default function Home() {
	return (
		<>
			<Navbar />
			<Container style={{ marginTop: 40 }}>
				<Grid container justify='center'>
					<Grid item xs={12}>
						<Banner />
					</Grid>
					<Grid item xs={12} md={3}>
						<Status
							amount={3000.32}
							title='Conta Corrente'
							subtitle={'Neste mês'}
						/>
					</Grid>
					<Grid item xs={12} md={3}>
						<Status
							amount={3000}
							title='Conta Corrente'
							subtitle={'Neste mês'}
						/>
					</Grid>
					<Grid item xs={12} md={3}>
						<Status
							amount={1230.32}
							title='Conta Corrente'
							subtitle={'Neste mês'}
						/>
					</Grid>
					<Grid item xs={12} md={3}>
						<Status
							amount={20000}
							title='Reserva de Emergência'
							subtitle={'Para 6 meses'}
						/>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}
