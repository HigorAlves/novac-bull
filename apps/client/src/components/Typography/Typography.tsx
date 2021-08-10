import React, { ReactChild } from 'react'

import * as S from './Styled.Typography'

interface IProps {
	children: ReactChild
	as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
}

export function Typography({ children, as }: IProps) {
	return <S.Typography as={as}>{children}</S.Typography>
}
