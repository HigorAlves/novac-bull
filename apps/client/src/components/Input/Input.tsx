import React from 'react'

import * as S from './Style.Input'

interface IProps {
	htmlFor?: string
	type: 'text' | 'password' | 'email'
	id: string
	placeholder?: string
	helpText?: string
	name: string
	label?: string
}

export function Input({
	id,
	name,
	placeholder,
	htmlFor,
	type,
	helpText,
	label
}: IProps) {
	return (
		<div>
			{htmlFor && <S.Label htmlFor={htmlFor}>{label}</S.Label>}
			<div className='mt-1'>
				<S.Input
					type={type}
					name={name}
					id={id}
					placeholder={placeholder}
					aria-invalid='true'
					aria-describedby='email-error'
				/>
			</div>
			{helpText && <S.HelpText id={`${id}-helpText`}>{helpText}</S.HelpText>}
		</div>
	)
}
