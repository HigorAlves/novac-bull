import twin, { styled } from 'twin.macro'

interface ITypographyProps {
	as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
	center?: boolean
	bold?: boolean
}

export const Typography = styled.p<ITypographyProps>(
	({ as = 'p', center = false, bold = false }) => [
		as === 'h1' && twin`font-bold leading-7 text-gray-900 text-6xl truncate`,
		as === 'h2' && twin`font-bold leading-7 text-gray-900 text-5xl truncate`,
		as === 'h3' && twin`font-bold leading-7 text-gray-900 text-4xl truncate`,
		as === 'h4' && twin`leading-4 text-gray-900 text-3xl truncate`,
		as === 'h5' && twin`leading-4 text-gray-900 text-2xl truncate`,
		as === 'h6' && twin`leading-4 text-gray-900 text-xl truncate`,
		as === 'p' && twin`leading-3 text-gray-600 sm:text-xs sm:truncate`,
		center && twin`text-center`,
		bold && twin`font-bold`
	]
)
