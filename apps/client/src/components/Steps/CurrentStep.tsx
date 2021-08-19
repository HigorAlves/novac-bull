import React from 'react'

export function CurrentStep({ name }: { name: string }) {
	return (
		<>
			<div className='absolute inset-0 flex items-center' aria-hidden='true'>
				<div className='h-0.5 w-full bg-gray-200' />
			</div>
			<div
				className='relative w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full'
				aria-current='step'
			>
				<span
					className='h-2.5 w-2.5 bg-indigo-600 rounded-full'
					aria-hidden='true'
				/>
				<span className='sr-only'>{name}</span>
			</div>
		</>
	)
}
