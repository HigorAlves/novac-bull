import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		toolbar: {
			display: 'flex',
			justifyContent: 'space-between',
			minHeight: 180,
			alignItems: 'flex-start',
			paddingTop: theme.spacing(1),
			paddingBottom: theme.spacing(2)
		},
		leftView: {
			marginTop: 10,
			flexGrow: 1,
			alignSelf: 'flex-end'
		},
		rightView: {
			alignSelf: 'flex-end'
		},
		menu: {
			listStyleType: 'none',
			marginRight: 20,
			'& li': {
				color: '#fff !imporant'
			}
		},
		desktop: {
			display: 'none',
			[theme.breakpoints.up('md')]: {
				display: 'flex'
			}
		},
		mobile: {
			display: 'flex',
			[theme.breakpoints.up('md')]: {
				display: 'none'
			}
		}
	})
)
