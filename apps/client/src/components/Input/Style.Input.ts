import twin, { styled } from 'twin.macro'

interface IProps {
	hasError?: string | null
}

export const Label = styled.label(() => [
	twin`block text-sm font-medium text-gray-700`
])

export const Input = styled.input<IProps>(({ hasError = null }) => [
	twin`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`,
	hasError &&
		twin`pr-10 border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 sm:text-sm`
])

export const HelpText = styled.p<IProps>(({ hasError = null }) => [
	twin`mt-2 text-sm text-gray-500`,
	hasError && twin`text-red-600`
])
