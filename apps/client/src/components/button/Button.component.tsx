import React, { ReactElement } from 'react'

import { BaseComponent } from './styled.button'

interface IProps {
	children: React.ReactNode
	primary?: boolean
	full?: boolean
}

export function Button({ children, primary, full }: IProps): ReactElement {
	return (
		<BaseComponent primary={primary} full={full}>
			{children}
		</BaseComponent>
	)
}
