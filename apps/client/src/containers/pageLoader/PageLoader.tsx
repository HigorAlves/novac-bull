import React from 'react'

import { Typography } from '@material-ui/core'
import Lottie from 'react-lottie'

import LogoImage from 'assets/images/landing/lgo.png'
import animationData from 'assets/lottie/loading-spinner.json'

import { Wrapper } from './styles.pageloader'

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
}

export function PageLoader() {
	return (
		<Wrapper>
			<img
				src={LogoImage}
				alt={'logo'}
				style={{ display: 'block', margin: '0 auto' }}
			/>
			<Typography
				variant={'body1'}
				align={'center'}
				style={{ color: '#fff', fontWeight: 700, marginTop: 10 }}
			>
				NOVAK BULL
			</Typography>
			<Lottie
				options={defaultOptions}
				height={200}
				width={200}
				isPaused={false}
			/>
		</Wrapper>
	)
}
