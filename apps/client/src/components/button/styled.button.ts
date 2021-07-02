import styled from 'styled-components'
import tw from 'twin.macro'

interface IBaseComponent {
	primary?: boolean
}

export const BaseComponent = styled.button<IBaseComponent>(({ primary }) => [
	tw`whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium text-indigo-600`,

	primary &&
		tw`rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700`
])
