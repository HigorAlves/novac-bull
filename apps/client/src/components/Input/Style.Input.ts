import twin, { styled } from 'twin.macro'

export const Label = styled.label(() => [
	twin`block text-sm font-medium text-gray-700`
])

export const Input = styled.input(() => [
	twin`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`
])

export const HelpText = styled.p(() => [twin`mt-2 text-sm text-gray-500`])
