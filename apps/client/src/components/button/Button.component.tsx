import React, { ReactElement } from 'react'

import { BaseComponent } from './styled.button'

interface IProps {
	children: React.ReactNode
	primary?: boolean
}

export function Button({ children, primary }: IProps): ReactElement {
	return <BaseComponent primary={primary}>{children}</BaseComponent>
}
