import React, { ReactNode } from 'react'

interface IProps {
	children: ReactNode
}

export function Paper({ children }: IProps) {
	return (
		<div className={'bg-white py-4 px-8 shadow rounded-lg'}>{children}</div>
	)
}
