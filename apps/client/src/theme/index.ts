import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#23d2e2',
			dark: '#00c7d9',
			light: '#41efff',
			contrastText: '#1bc5d4'
		},
		secondary: {
			main: '#615dfa',
			light: '#615dfa',
			dark: '#4e4ac8',
			contrastText: '#5753e4'
			// darker: '#45437f'
		},
		background: {
			default: '#f8f8fb'
		},
		text: {
			primary: '#21222c',
			secondary: '#fff'
		}
	},
	typography: {
		fontFamily: 'Rajdhani',
		fontSize: 16,
		fontWeightRegular: 500
	},
	overrides: {
		MuiPaper: {
			root: {
				padding: 20
			}
		},
		MuiButton: {
			containedPrimary: {
				color: '#fff',
				textTransform: 'none',
				fontWeight: 700,
				boxShadow: 'box-shadow: 4px 7px 12px 0 rgb(97 93 250 / 20%)'
			},
			containedSecondary: {
				color: '#fff',
				textTransform: 'none',
				fontWeight: 700,
				boxShadow: 'box-shadow: 4px 7px 12px 0 rgb(97 93 250 / 20%)'
			},
			root: {
				color: '#fff'
			}
		},
		MuiTabs: {
			indicator: {
				backgroundColor: '#fff !important',
				height: '100%',
				zIndex: 0
			}
		},
		MuiTab: {
			root: {
				color: '#fff !important',
				fontWeight: 700,
				opacity: '1 !important',
				zIndex: 1,
				width: '50%',

				'&.Mui-selected': {
					color: '#000 !important'
				}
			}
		},
		MuiInputLabel: {
			root: {
				color: '#adafca',
				fontWeight: 'bold'
			}
		},
		MuiOutlinedInput: {
			root: {
				'& fieldset': {
					borderColor: '#dedeea'
				},
				'& label': {
					color: '#adafca',
					fontWeight: 'bold'
				}
			}
		},
		MuiChip: {
			root: {
				borderRadius: 2,
				backgroundColor: '#fff'
			}
		}
	}
})
