import React from 'react'

import { Button, Paper, Typography } from '@material-ui/core'

import { numberToMoney } from 'utils/numberToMoney'

export function StockCard() {
	return (
		<>
			<Paper elevation={0} style={{ textAlign: 'center' }}>
				<Typography variant={'h5'} component={'h6'}>
					Apple Inc.
				</Typography>
				<Typography variant={'body2'} component={'p'}>
					AAPL
				</Typography>
				<Typography variant={'h5'} component={'h6'}>
					{numberToMoney(172.32, 'pt-BR', 'BRL')}
				</Typography>
			</Paper>
			<Button variant={'contained'} color={'primary'} fullWidth>
				COMPRAR
			</Button>
		</>
	)
}
