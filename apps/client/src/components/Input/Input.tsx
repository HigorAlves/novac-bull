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
	onChange?: any
	value?: string
	error?: boolean
	hasError?: string | null
}

export function Input({
	id,
	name,
	placeholder,
	htmlFor,
	type,
	helpText,
	hasError,
	label,
	onChange,
	value
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
					onChange={onChange}
					value={value}
					hasError={hasError}
				/>
			</div>
			{(helpText || hasError) && (
				<S.HelpText hasError={hasError} id={`${id}-helpText`}>
					{hasError || helpText}
				</S.HelpText>
			)}
		</div>
	)
}
