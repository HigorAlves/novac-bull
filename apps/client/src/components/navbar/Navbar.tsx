import React, { useState } from 'react'

import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import Lottie from 'react-lottie'
import { useSelector } from 'react-redux'

import animationData from 'assets/lottie/menu-toogle.json'
import { RootState } from 'store/rootReducer'

import { useStyles } from './styles.navbar'

const defaultOptions = {
	loop: false,
	autoplay: false,
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
}

export function Navbar() {
	const user = useSelector((state: RootState) => state.user.data)
	const [animationState, setAnimationSate] = useState({
		isStopped: true,
		direction: -1
	})
	const styles = useStyles()
	return (
		<AppBar
			position='static'
			color={'secondary'}
			style={{ padding: 0 }}
			elevation={0}
		>
			<Toolbar className={styles.toolbar}>
				<Typography
					variant={'body1'}
					color={'textSecondary'}
					style={{ fontWeight: 'bold' }}
				>
					NOVAK BULL
				</Typography>

				<section className={styles.desktop}>
					<Button>Carteiras</Button>
					<Button>Ações</Button>
				</section>

				<section className={styles.desktop}>
					<Typography
						variant={'body1'}
						component={'p'}
						color={'textSecondary'}
						style={{}}
					>
						Oi, {user?.name}
					</Typography>
				</section>

				<section className={styles.mobile}>
					<div
						onClick={() =>
							setAnimationSate({
								isStopped: false,
								direction: animationState.direction === -1 ? 1 : -1
							})
						}
					>
						<Lottie
							options={defaultOptions}
							height={40}
							width={40}
							isStopped={animationState.isStopped}
							direction={animationState.direction}
						/>
					</div>
				</section>
			</Toolbar>
		</AppBar>
	)
}
