import React, { ReactChild } from 'react'

import * as S from './Styled.Button'

interface IProps {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	type?: 'submit' | 'button'
	onClick?: () => void
	full?: boolean
	children: ReactChild
}

export function Button(props: IProps) {
	return <S.Button {...props}>{props.children}</S.Button>
}
