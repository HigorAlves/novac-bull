import styled from 'styled-components'
import tw from 'twin.macro'

interface IBaseComponent {
	medium: boolean
	colorfull: boolean
}

export const BaseComponent = styled.span`
	cursor: pointer;
	${tw`text-base text-gray-500 hover:text-gray-900`},
	${({ colorfull }: IBaseComponent) =>
		colorfull && tw`text-indigo-600 hover:text-indigo-500`}
	${({ medium }: IBaseComponent) => medium && tw`font-medium`}
`
