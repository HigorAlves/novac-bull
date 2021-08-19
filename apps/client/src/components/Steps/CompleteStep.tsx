import React from 'react'

import { CheckIcon } from '@heroicons/react/solid'

export function CompleteStep({ name }: { name: string }): JSX.Element {
	return (
		<div>
			<div className='absolute inset-0 flex items-center' aria-hidden='true'>
				<div className='h-0.5 w-full bg-indigo-600' />
			</div>
			<div className='relative w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-900'>
				<CheckIcon className='w-5 h-5 text-white' aria-hidden='true' />
				<span className='sr-only'>{name}</span>
			</div>
		</div>
	)
}
