import React from 'react'

import * as S from './Styled.Button'

interface IProps {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	type?: 'submit' | 'button'
	onClick?: () => void
}

export function Button(props: IProps) {
	return <S.Button {...props}>Button text</S.Button>
}
