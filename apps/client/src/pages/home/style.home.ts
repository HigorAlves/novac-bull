import { Grid, Paper } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'

import BGImage from '../../assets/images/landing/landing-background.jpg'

export const Main = styled(Grid)({
	backgroundImage: `url(${BGImage})`,
	backgroundSize: 'cover',
	backgroundPosition: 'bottom',
	minHeight: '100vh',
	margin: 0,
	overflow: 'hidden'
})

export const FormWrapper = styled(Paper)(({ theme }) => ({
	position: 'relative',
	padding: 50,

	[theme.breakpoints.down('sm')]: {
		width: '80%',
		margin: '0 auto'
	}
}))

export const FormIcon = styled('img')({
	position: 'absolute',
	top: -68,
	left: -80
})
