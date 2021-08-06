import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
	${tw``}
`
export const TwoColumn = styled.div`
	${tw`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`}
`
export const LeftColumn = styled.div`
	${tw` lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`}
`
export const RightColumn = styled.div`
	${tw` mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`}
`

export const Heading = styled.h1`
	${tw`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`}
`
export const Paragraph = styled.p`
	${tw`my-5 lg:my-8 text-base xl:text-lg`}
`

export const Actions = styled.div`
	${tw`relative max-w-md text-center mx-auto lg:mx-0`}
	input {
		${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-blue-500 hover:border-gray-500`}
	}
	button {
		${tw`w-full sm:absolute right-0 top-0 bottom-0 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none transition duration-300`}
	}
`

export const IllustrationContainer = styled.div`
	${tw`flex justify-center lg:justify-end items-center ml-40 hidden sm:flex`}
`
