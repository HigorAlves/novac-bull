import React from 'react'

interface IInput {
	type: 'email' | 'password'
	id: string
	name: string
}

export function Input({ id, name, type }: IInput): JSX.Element {
	return (
		<input
			type={type}
			id={id}
			name={name}
			data-testid={id}
			className='w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
		/>
	)
}
