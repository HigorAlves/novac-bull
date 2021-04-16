export type Notification = {
	open: boolean
	type: 'error' | 'warning' | 'success' | 'info'
	message: string
}

export interface NotificationState {
	readonly open: boolean
	readonly type: 'error' | 'warning' | 'success' | 'info'
	readonly message: string
}

export enum NotificationTypes {
	'OPEN' = '@NOTIFICATION/OPEN',
	'CLOSE' = '@NOTIFICATION/CLOSE'
}

export interface OpenNotification {
	type: typeof NotificationTypes.OPEN
	payload: Notification
}

export interface CloseNotification {
	type: typeof NotificationTypes.CLOSE
}

export type NotificationActions = OpenNotification | CloseNotification
