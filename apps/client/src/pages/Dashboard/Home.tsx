import React, { useEffect } from 'react'

import { Container, Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import { Banner, Navbar, Status, StockCard } from 'components'
import { RootState } from 'store/rootReducer'
import { getUserPosition } from 'store/user/actions'

export default function Home() {
	const dispatch = useDispatch()
	const position = useSelector((state: RootState) => state.user.position)

	useEffect(() => {
		dispatch(getUserPosition())
	}, [])

	return (
		<>
			<Navbar />
			<Container style={{ marginTop: 40 }}>
				<Grid container justify='center' spacing={2}>
					<Grid item xs={12}>
						<Banner />
					</Grid>
					<Grid item xs={12} sm={4} md={3}>
						<Status
							amount={position?.checkingAccountAmount ?? 0}
							title='Conta Corrente'
							subtitle={'Neste mês'}
						/>
					</Grid>
					<Grid item xs={12} sm={4} md={3}>
						<Status
							amount={position?.consolidated ?? 0}
							// title='Ações'
							title={'Consolidado'}
							subtitle={'Neste mês'}
						/>
					</Grid>
					<Grid item xs={12} sm={4} md={3}>
						<Status
							amount={1230.32}
							title='Fundos Imobiliários'
							subtitle={'Neste mês'}
						/>
					</Grid>
					<Grid item xs={12} sm={4} md={3}>
						<Status
							amount={20000}
							title='Reserva de Emergência'
							subtitle={'Para 6 meses'}
						/>
					</Grid>
				</Grid>
				<StockCard />
			</Container>
		</>
	)
}
