import React from 'react'

import { IStock } from '@jetpack/interfaces'
import { Button, Paper, Typography } from '@material-ui/core'

import { numberToMoney } from 'utils/numberToMoney'

interface IProps {
	onBuyClick: (symbol: string) => void
}

type Props = IProps & IStock

export function StockCard({ buyPrice, symbol, onBuyClick }: Props) {
	return (
		<>
			<Paper elevation={0} style={{ textAlign: 'center' }}>
				<Typography variant={'h5'} component={'h6'}>
					{symbol}
				</Typography>
				<Typography variant={'h5'} component={'h6'}>
					{numberToMoney(buyPrice, 'pt-BR', 'BRL')}
				</Typography>
			</Paper>
			<Button
				variant={'contained'}
				color={'primary'}
				fullWidth
				onClick={() => onBuyClick(symbol)}
			>
				COMPRAR
			</Button>
		</>
	)
}
