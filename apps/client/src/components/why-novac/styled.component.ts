import styled from 'styled-components'
import tw from 'twin.macro'

export const MainSection = styled.section`
	${tw`text-gray-600 mb-24 container px-5 mx-auto`}
`
export const Heading = styled.h1`
	${tw`sm:text-3xl text-2xl font-medium text-gray-900 mb-4`}
`
export const Paragraph = styled.p`
	${tw`text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500`}
`
export const BenefitiesMainDiv = styled.div`
	${tw`flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6`}
`

export const BenefitiesCard = styled.div`
	${tw`p-4 md:w-1/3 flex flex-col text-center items-center`}
`
export const BenefitiesCardIcon = styled.div`
	${tw`w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0`}
`
export const BenefitiesCardText = styled.div`
	${tw`flex-grow`}
`
export const BenefitiesCardTitle = styled.h2`
	${tw`text-gray-900 text-lg font-medium mb-3`}
`
export const BenefitiesCardSubtitle = styled.p`
	${tw`leading-relaxed text-base`}
`
