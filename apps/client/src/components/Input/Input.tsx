import React from 'react'

import * as S from './Style.Input'

interface IProps {
	htmlFor?: string
	type: 'text' | 'password'
	id: string
	placeholder: string
	helpText?: string
	name: string
}

export function Input({
	id,
	name,
	placeholder,
	htmlFor,
	type,
	helpText
}: IProps) {
	return (
		<div>
			{htmlFor && <S.Label htmlFor={htmlFor}>Email</S.Label>}
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
