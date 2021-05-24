import React from 'react'

interface IButton {
	text: string
}

export function Button({ text }: IButton): JSX.Element {
	return (
		<button className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
			{text}
		</button>
	)
}
