import React from 'react'

export function UpcomingStep({ name }: { name: string }) {
	return (
		<>
			<div className='absolute inset-0 flex items-center' aria-hidden='true'>
				<div className='h-0.5 w-full bg-gray-200' />
			</div>
			<a
				href='#'
				className='group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400'
			>
				<span
					className='h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300'
					aria-hidden='true'
				/>
				<span className='sr-only'>{name}</span>
			</a>
		</>
	)
}
