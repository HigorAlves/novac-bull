import React from 'react'

import LinkC from 'next/link'

import { BaseComponent } from './styled.link'

interface IProps {
	text: string
	link: string
}

export function Link({ text, link }: IProps) {
	return (
		<LinkC href={link}>
			<BaseComponent>{text}</BaseComponent>
		</LinkC>
	)
}
