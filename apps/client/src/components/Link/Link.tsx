import React, { ReactChild } from 'react'

import Link from 'next/link'
interface IProps {
	children: ReactChild
	url: string
}

export function RedirectLink({ url, children }: IProps) {
	return (
		<Link href={url} passHref>
			<a className='font-medium text-indigo-600 hover:text-indigo-500 text-sm'>
				{children}
			</a>
		</Link>
	)
}
