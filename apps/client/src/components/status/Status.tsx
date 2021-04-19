import React from 'react'

import { Typography } from '@material-ui/core'

import { numberToMoney } from 'utils/numberToMoney'

import { Wrapper } from './status.styled'

interface IProps {
	amount: number
	title: string
	subtitle: string
}

export function Status({ amount, subtitle, title }: IProps) {
	return (
		<Wrapper>
			<Typography
				variant={'h5'}
				component={'h6'}
				color={'textSecondary'}
				style={{ fontWeight: 'bold', marginBottom: 10 }}
			>
				{numberToMoney(amount, 'pt-BR', 'BRL')}
			</Typography>
			<Typography
				variant={'body2'}
				component={'p'}
				color={'textSecondary'}
				style={{ fontWeight: 'bold' }}
			>
				{title}
			</Typography>
			<Typography variant={'caption'} component={'p'} color={'textSecondary'}>
				{subtitle}
			</Typography>
		</Wrapper>
	)
}
