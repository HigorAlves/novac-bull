import React from 'react'

import { Paper, Tab, Tabs, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import LogoImage from 'assets/images/landing/lgo.png'

type Props = {
	value: number
	setValue: (value: number) => void
}

export function SelectorSwitch({ value, setValue }: Props): JSX.Element {
	const { t } = useTranslation('authentication', {
		useSuspense: false
	})
	return (
		<>
			<img
				src={LogoImage}
				alt={'logo'}
				style={{ display: 'block', margin: '0 auto' }}
			/>
			<Typography
				variant={'h6'}
				align={'center'}
				style={{
					color: '#fff',
					fontWeight: 700,
					marginTop: 40,
					marginBottom: 0,
					padding: 0,
					lineHeight: 0
				}}
			>
				{t('welcome')}
			</Typography>
			<Typography
				variant={'h1'}
				align={'center'}
				style={{ color: '#fff', fontWeight: 700 }}
			>
				NOVAK
			</Typography>
			<Typography
				variant={'body1'}
				align={'center'}
				style={{ color: '#fff', margin: '10px 20px' }}
			>
				{t('about')}
			</Typography>

			<Paper
				style={{
					background: 'transparent',
					padding: 0,
					borderColor: '#fff',
					borderRadius: 10,
					overflow: 'hidden'
				}}
				variant={'outlined'}
				elevation={0}
			>
				<Tabs
					indicatorColor='primary'
					textColor='primary'
					value={value}
					centered
					onChange={(event, selected) => setValue(selected)}
				>
					<Tab label={t('button.tab.login')} />
					<Tab label={t('button.tab.register')} />
				</Tabs>
			</Paper>
		</>
	)
}
