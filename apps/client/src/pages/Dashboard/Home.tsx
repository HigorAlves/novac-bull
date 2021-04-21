import React, { useEffect, useState } from 'react'

import { IMostActiveStocks, Stock } from '@jetpack/interfaces'
import { Container, Divider, Grid, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import { Navbar, Status, StockCard } from 'components'
import { buyStock, getStockTrends } from 'services/api/stocks'
import { RootState } from 'store/rootReducer'
import { getUserPosition } from 'store/user/actions'

export default function Home() {
	const dispatch = useDispatch()
	const { position } = useSelector((state: RootState) => state.user)
	const [stockTrend, setStockTrends] = useState<IMostActiveStocks | null>(null)

	async function loadData() {
		dispatch(getUserPosition())
		const stocksResult = await getStockTrends()
		setStockTrends(stocksResult)
	}

	async function buyOneStock(symbol: string) {
		await buyStock(1, symbol)
		dispatch(getUserPosition())
	}

	useEffect(() => {
		loadData()
	}, [])

	return (
		<>
			<Navbar />
			<Container style={{ marginTop: 40 }}>
				<Grid container justify='center' spacing={2}>
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
				<br />
				<br />
				<Divider />
				<br />
				<br />
				<Typography variant={'h4'} component={'h4'}>
					Suas posições
				</Typography>
				<Grid container justify='center' spacing={2}>
					{position?.positions.map((item, index) => (
						<Grid item xs={12} sm={3} key={index}>
							<StockCard
								buyPrice={item.buyPrice}
								symbol={item.symbol}
								createdAt={item.createdAt}
								onBuyClick={buyOneStock}
							/>
						</Grid>
					))}
				</Grid>
				<br />
				<br />
				<Divider />
				<br />
				<br />
				<Typography variant={'h4'} component={'h4'}>
					As 5 mais negociadas
				</Typography>
				<Grid container justify='center' spacing={2}>
					{stockTrend?.stocks &&
						stockTrend.stocks.map((item: Stock, index: number) => (
							<Grid item xs={12} sm={3} key={index}>
								<StockCard
									buyPrice={item.currentPrive}
									symbol={item.symbol}
									createdAt={new Date()}
									onBuyClick={buyOneStock}
								/>
							</Grid>
						))}
				</Grid>
			</Container>
		</>
	)
}
