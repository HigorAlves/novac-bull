import React, { ReactChild } from 'react'

interface IProps {
	children: ReactChild
}

export function Paper({ children }: IProps) {
	return (
		<div className={'bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'}>
			{children}
		</div>
	)
}
