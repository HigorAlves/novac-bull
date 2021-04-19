import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		toolbar: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			paddingTop: theme.spacing(1),
			paddingBottom: theme.spacing(2)
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
