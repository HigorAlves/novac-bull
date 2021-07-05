import styled from 'styled-components'
import tw from 'twin.macro'

interface IBaseComponent {
	primary: boolean
	secondary: boolean
	download: boolean
}

export const BaseComponent = styled.button(
	({ primary, secondary, download }: IBaseComponent) => [
		tw`whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium`,
		primary && tw`text-white bg-indigo-600 hover:bg-indigo-700`,
		secondary && tw`text-white bg-purple-600 hover:bg-purple-600`,
		download &&
			tw`bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none`
	]
)
