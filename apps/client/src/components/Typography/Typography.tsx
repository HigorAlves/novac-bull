import React, { ReactChild } from 'react'

import * as S from './Styled.Typography'

interface IProps {
	children: ReactChild
	as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
	center?: boolean
	className?: string
	bold?: boolean
}

export function Typography(props: IProps) {
	return <S.Typography {...props}>{props.children}</S.Typography>
}
