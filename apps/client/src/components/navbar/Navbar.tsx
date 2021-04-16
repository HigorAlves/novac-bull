import React from 'react'

import {
	AppBar,
	Avatar,
	Button,
	Chip,
	Link,
	Toolbar,
	Typography
} from '@material-ui/core'

import { useStyles } from './styles.navbar'

export function Navbar() {
	const styles = useStyles()
	return (
		<AppBar
			position='static'
			color={'secondary'}
			style={{ padding: 0 }}
			elevation={0}
		>
			<Toolbar className={styles.toolbar}>
				<Button>NOVAK BULL</Button>
				<div className={styles.leftView}>
					<Chip label={'CONTA DIGITAL'} size={'small'} />
					<Typography variant={'h4'} component={'h3'} color={'textSecondary'}>
						Oi, Higor
					</Typography>
					<Typography
						variant={'caption'}
						component={'p'}
						color={'textSecondary'}
					>
						O que você quer fazer hoje?
					</Typography>
				</div>

				<div className={styles.rightView}>
					<Typography variant={'body1'} component={'p'} color={'textSecondary'}>
						Seu patrimonio hoje
					</Typography>
					<Typography
						variant={'subtitle1'}
						component={'p'}
						color={'textSecondary'}
						style={{ fontWeight: 'bold' }}
					>
						R$ 4.002,32
					</Typography>
				</div>

				<section className={styles.desktop}>
					<Avatar
						alt='Remy Sharp'
						src='https://instagram.fjdf1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/135438095_824407534791326_2920232573424990552_n.jpg?tp=1&_nc_ht=instagram.fjdf1-1.fna.fbcdn.net&_nc_ohc=nVFGM6HrDXsAX9Fh0xU&edm=ABfd0MgAAAAA&ccb=7-4&oh=81729fc894f3309c1125c18d10c38b2d&oe=609E1CF6&_nc_sid=7bff83'
					/>
				</section>
			</Toolbar>
		</AppBar>
	)
}
