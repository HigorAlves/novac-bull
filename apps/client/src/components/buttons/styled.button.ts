import styled from 'styled-components'
import tw from 'twin.macro'

interface IBaseComponent {
	primary: boolean
	secondary: boolean
}

export const BaseComponent = styled.button(
	({ primary, secondary }: IBaseComponent) => [
		tw`ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium`,
		primary && tw`text-white bg-indigo-600 hover:bg-indigo-700`,
		secondary && tw`text-white bg-purple-600 hover:bg-purple-600`
	]
)
