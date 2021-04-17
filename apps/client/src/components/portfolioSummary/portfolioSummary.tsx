import React from 'react'

import { Divider, Grid, Paper, Typography } from '@material-ui/core'

export function PortfolioSummary() {
	return (
		<Paper>
			<Typography
				variant={'h6'}
				component={'h5'}
				style={{ fontWeight: 'bold' }}
			>
				Resumo da Carteira
			</Typography>
			<Divider style={{ margin: 10 }} />
			<Typography variant={'body1'} component={'p'}>
				Saldo hoje
			</Typography>
			<Typography
				variant={'subtitle1'}
				component={'p'}
				style={{ fontWeight: 'bold' }}
			>
				R$ 4.002,32
			</Typography>
			<Divider style={{ margin: 10 }} />
			<Grid container>
				<Grid item md={12}>
					<Typography
						variant={'h6'}
						component={'h5'}
						style={{ fontWeight: 'bold' }}
					>
						Patrimônio sumarizado
					</Typography>

					<Typography
						variant={'h6'}
						component={'h5'}
						style={{ fontWeight: 'bold' }}
					>
						Valor em ativos
					</Typography>
				</Grid>
			</Grid>
		</Paper>
	)
}
