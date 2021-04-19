import React from 'react'

import { Typography } from '@material-ui/core'

import bannerIcon from 'assets/images/banner/overview-icon.png'

import { Wrapper, BannerIcon } from './styled.banner'

export function Banner() {
	return (
		<Wrapper>
			<BannerIcon src={bannerIcon} />
			<div>
				<Typography
					variant={'h4'}
					color={'textSecondary'}
					style={{ fontWeight: 'bold' }}
				>
					Overview
				</Typography>

				<Typography variant={'body1'} color={'textSecondary'}>
					Revise sua conta, veja as estatísticas e muito mais!
				</Typography>
			</div>
		</Wrapper>
	)
}
