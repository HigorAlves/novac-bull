import React from 'react'

import LinkC from 'next/link'

import { BaseComponent } from './styled.link'

interface IProps {
	text: string
	link: string
	medium?: boolean
	colorfull?: boolean
}

export function Link({
	text,
	link,
	colorfull = false,
	medium = false
}: IProps) {
	return (
		<LinkC href={link}>
			<BaseComponent medium={medium} colorfull={colorfull}>
				{text}
			</BaseComponent>
		</LinkC>
	)
}
