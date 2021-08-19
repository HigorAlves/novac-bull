import twin, { styled } from 'twin.macro'

interface IButton {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	type?: 'submit' | 'button'
	onClick?: () => void
	full?: boolean
	variant?: 'primary' | 'secondary'
}

export const Button = styled.button<IButton>(
	({ size = 'xs', full = false, variant = 'primary' }) => [
		twin`inline-flex items-center border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2`,
		variant === 'primary' &&
			twin`focus:ring-indigo-500 text-white bg-indigo-600 hover:bg-indigo-700`,
		variant === 'secondary' &&
			twin`text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500`,
		size === 'xs' && twin`px-2.5 py-1.5 text-xs rounded`,
		size === 'sm' && twin`px-3 py-2 text-sm leading-4 rounded-md`,
		size === 'md' && twin`px-4 py-2 text-sm rounded-md`,
		size === 'lg' && twin`px-4 py-2 text-sm rounded-md`,
		size === 'xl' && twin`px-6 py-3 text-base rounded-md`,
		full && twin`w-full flex justify-center`
	]
)
