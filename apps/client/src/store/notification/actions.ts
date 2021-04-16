import {
	CloseNotification,
	OpenNotification,
	NotificationTypes,
	Notification
} from './types'

export function openNotification(props: Notification): OpenNotification {
	return {
		type: NotificationTypes.OPEN,
		payload: props
	}
}

export function closeNotification(): CloseNotification {
	return {
		type: NotificationTypes.CLOSE
	}
}
