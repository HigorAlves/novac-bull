import React from 'react'

import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from 'store'
import { closeNotification } from 'store/notification/actions'

export function Notification() {
	const dispatch = useDispatch()
	const data = useSelector((state: AppState) => state.notification)

	function handleClose() {
		dispatch(closeNotification())
	}

	return (
		<Snackbar
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right'
			}}
			open={data.open}
			autoHideDuration={4000}
			onClose={handleClose}
			aria-describedby='client-snackbar'
		>
			<Alert key='0' severity={data.type}>
				{data.message}
			</Alert>
		</Snackbar>
	)
}
