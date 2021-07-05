import React from 'react'

import { BaseComponent } from './styled.button'

interface IProps {
	primary?: boolean
	secondary?: boolean
	download?: boolean
	children: React.ReactNode
}

export function Button({
	primary = false,
	secondary = false,
	download = false,
	children
}: IProps) {
	return (
		<BaseComponent primary={primary} secondary={secondary} download={download}>
			{children}
		</BaseComponent>
	)
}
