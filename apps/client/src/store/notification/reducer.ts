import { Reducer } from 'redux'

import {
	NotificationState,
	NotificationActions,
	NotificationTypes
} from './types'

const INITIAL_STATE: NotificationState = {
	open: false,
	type: 'info',
	message: ''
}

export const notificationReducer: Reducer = (
	state = INITIAL_STATE,
	action: NotificationActions
) => {
	switch (action.type) {
		case NotificationTypes.OPEN:
			return {
				...state,
				open: true,
				type: action.payload.type,
				message: action.payload.message
			}
		case NotificationTypes.CLOSE:
			return { ...state, open: false }

		default:
			return state
	}
}
