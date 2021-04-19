import styled from 'styled-components'

import bannerBackground from 'assets/images/banner/banner-bg.png'

export const Wrapper = styled.section`
	display: flex;
	background-image: url(${bannerBackground});
	background-repeat: no-repeat;
	max-height: 160px;
	width: 1185px;
	margin-bottom: 20px;
	justify-content: flex-start;
	align-items: center;
`

export const BannerIcon = styled.img`
	bottom: 0;
	height: 172px;
	margin-bottom: 12px;
`
